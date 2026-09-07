# Aura Events & Craft — website mock

Static site for Aura Events & Craft, Porur, Chennai (event planner + craft shop). No build step.

## Run locally

```
python -m http.server 8765
```

Then open http://127.0.0.1:8765/. Any static host works (GitHub Pages, Cloudflare Pages, Netlify).

## Files

| Path | What it is |
|---|---|
| `index.html` | The whole site, one page. The design contract is the HTML comment at the top of `<body>`. |
| `styles.css` | All styling. Tokens at the top; sections in page order. |
| `script.js` | Scroll-driven bag opening, thread, "Pack a bag" WhatsApp composer, prints gallery, menu. |
| `assets/photos/` | Drop Aura's real photos here and list them in `photos.js`. See the README inside. |
| `content/reviews.md` | The 16 real Google reviews and the owner's post, as captured. |
| `PRODUCT.md` | Product truth: who it is for, what is confirmed, what must not be invented. |
| `DESIGN.md` | The recorded design system, written from the built site. |

## Before this goes live: confirm with Aura

- **Phone / WhatsApp.** All call and WhatsApp actions use `+91 98849 22946` (`wa.me/919884922946`, and `WA_NUMBER` in `script.js`). The Google listing's `090927 02736` is shown as a second number in the Find section.
- **Opening hours.** Google shows Monday 9:30 am to 10 pm and "opens 9:30 am Tue". Other days are marked "to confirm" on the page; once confirmed, update the Hours line and the `openingHoursSpecification` in the JSON-LD.
- **Instagram.** The `auraeventsinchennai` handle from the brief has a bio about weekend meetups and a district.in link, so it may be a different business. Confirm before launch.
- **Photos.** The "Prints from recent functions" section shows labelled placeholders until real photos are added.
- **Logo.** The wordmark is set in Arima Madurai. Swap in the real logo if one exists.
- **Prices.** None are shown, on purpose. The enquiry asks for a quote. Do not add prices without confirmation.
- **Event types.** The "What is the function?" list is a sensible default for Chennai family functions; adjust to what Aura actually takes on.

## Design in one line

The site is a thambulam bag: kraft paper, turmeric, kumkum red and betel green, drawn flat with an ink line. You scroll and the bag opens; everything after hangs on one jute thread. Fonts: Arima Madurai (display) and Catamaran (body), both from Google Fonts.
