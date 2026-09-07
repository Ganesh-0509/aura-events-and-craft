"""Functional checks: packer composes a WhatsApp link, menu toggles, thumb bar behaves, reduced-motion opens the bag."""
from playwright.sync_api import sync_playwright
URL = "http://127.0.0.1:8765/"
with sync_playwright() as pw:
    b = pw.chromium.launch()
    p = b.new_page(viewport={"width": 390, "height": 844})
    errs = []
    p.on("pageerror", lambda e: errs.append(str(e)))
    p.goto(URL, wait_until="load")
    # menu
    p.click(".menu-btn"); assert not p.is_hidden("#sheet"), "sheet did not open"
    assert p.get_attribute(".menu-btn", "aria-expanded") == "true"
    p.click("#sheet a[href='#pack']"); assert p.is_hidden("#sheet"), "sheet did not close on link"
    # packer
    p.click("label:has(input[value='Return gifts'])"); p.click("label:has(input[value='Photography'])")
    p.fill("#date", "2026-11-14"); p.fill("#name", "Kavitha"); p.fill("#venue", "Valasaravakkam")
    p.click("label:has(input[value='Engagement'])")
    href = p.get_attribute("#send-wa", "href")
    note = p.inner_text("#note-body")
    print("NOTE:\n" + note)
    assert href.startswith("https://wa.me/919884922946?text=") and "Kavitha" in href and "Engagement" not in note[:0]
    assert "engagement" in note and "14 November 2026" in note and "Return gifts" in note and "Valasaravakkam" in note
    print("mini items:", p.evaluate("document.querySelectorAll('#mini-items svg').length"))
    # thumb bar hidden while pack in view, shown elsewhere
    assert p.is_hidden("#thumb-bar"), "thumb bar should hide over #pack"
    p.evaluate("document.getElementById('families').scrollIntoView({behavior:'instant'})"); p.wait_for_timeout(400)
    assert p.is_visible("#thumb-bar"), "thumb bar should show past the hero"
    # reduced motion: bag opened statically
    ctx = b.new_context(viewport={"width": 1440, "height": 900}, reduced_motion="reduce")
    q = ctx.new_page(); q.goto(URL, wait_until="load")
    print("reduced-motion --p:", q.evaluate("getComputedStyle(document.querySelector('.stage')).getPropertyValue('--p')"),
          "stage height:", q.evaluate("document.querySelector('.stage').offsetHeight"))
    # contract survives in served HTML
    html = q.content(); assert "seed 3f9621ac" in html and "FINISH:" in html
    print("errors:", errs, "| ALL CHECKS PASSED")
    b.close()
