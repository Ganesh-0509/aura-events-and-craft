"""Capture review screenshots of the Aura site (desktop + mobile)."""
import sys, pathlib
from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).parent
URL = "http://127.0.0.1:8765/"

def shoot(pw, name, width, height, mobile=False):
    browser = pw.chromium.launch()
    ctx = browser.new_context(viewport={"width": width, "height": height}, device_scale_factor=2 if mobile else 1, is_mobile=mobile, has_touch=mobile)
    page = ctx.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(2600)  # let the tag swing finish and fonts settle
    page.screenshot(path=str(OUT / f"{name}-top.png"))
    # open the bag: scroll to the end of the stage (instant scroll so the capture is settled)
    page.evaluate("document.documentElement.style.scrollBehavior='auto'")
    stage_h = page.evaluate("document.querySelector('.stage').offsetHeight")
    page.evaluate(f"window.scrollTo(0, {stage_h} - innerHeight)")
    page.wait_for_timeout(900)
    print(name, "header top when open:", page.evaluate("document.querySelector('.top').getBoundingClientRect().top"))
    page.screenshot(path=str(OUT / f"{name}-open.png"))
    # settle everything, then full page
    page.evaluate("document.querySelector('.stage').style.setProperty('--p','1')")
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(800)
    page.evaluate("document.querySelector('.threaded').style.setProperty('--t','0')")
    page.evaluate("document.documentElement.style.scrollBehavior='auto'")
    for sec in ("inside", "pack", "families", "counter", "find"):
        page.evaluate(f"document.getElementById('{sec}').scrollIntoView()")
        page.evaluate("window.scrollBy(0, -70)")
        page.wait_for_timeout(350)
        page.screenshot(path=str(OUT / f"{name}-{sec}.png"))
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(300)
    page.screenshot(path=str(OUT / f"{name}.png"), full_page=True)
    # mid-entrance frame of the reveal grammar: fresh page, jump to families, shoot within the transition
    q = ctx.new_page(); q.goto(URL, wait_until="load"); q.wait_for_timeout(600)
    q.evaluate("document.documentElement.style.scrollBehavior='auto'; document.getElementById('families').scrollIntoView(); window.scrollBy(0,-70)")
    q.wait_for_timeout(140)
    q.screenshot(path=str(OUT / f"{name}-arrive.png"))
    q.wait_for_timeout(1200)
    q.screenshot(path=str(OUT / f"{name}-arrived.png"))
    # header stick check at the end of the stage
    q.evaluate(f"window.scrollTo(0, {stage_h} - innerHeight)"); q.wait_for_timeout(700)
    print(name, "header top at stage end:", q.evaluate("document.querySelector('.top').getBoundingClientRect().top"))
    info = page.evaluate("({sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth, h: document.body.scrollHeight})")
    print(name, info, "errors:", errors)
    browser.close()

with sync_playwright() as pw:
    which = sys.argv[1:] or ["desktop", "mobile", "laptop"]
    if "desktop" in which: shoot(pw, "desktop", 1440, 900)
    if "mobile" in which: shoot(pw, "mobile", 390, 844, mobile=True)
    if "laptop" in which: shoot(pw, "laptop", 1366, 768)
