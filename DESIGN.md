---
name: Aura Events & Craft
description: A thambulam bag of a website; kraft paper, turmeric fields, one kumkum tag, and everything drawn flat with an ink line.
colors:
  kraft: "#c99b5f"
  kraft-deep: "#b98a4c"
  kraft-inner: "#8d6234"
  manjal: "#f3b41f"
  manjal-deep: "#e2a10e"
  kumkum: "#c8281e"
  kumkum-deep: "#a11c14"
  kumkum-ink: "#6e110c"
  vettrilai: "#1f6b3a"
  vettrilai-deep: "#175229"
  sandal: "#f8e7c8"
  tissue: "#fff6e6"
  paper-white: "#ffffff"
  ink: "#2a1a0f"
  ink-soft: "#4a2e1a"
  jute: "#8a5a2b"
  emerald: "#1e8a5a"
  sapphire: "#1f4fa3"
  magenta: "#c8207a"
  gold: "#d9a441"
typography:
  display:
    fontFamily: "Arima Madurai, Noto Serif Tamil, Georgia, serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.9rem)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Arima Madurai, Noto Serif Tamil, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Arima Madurai, Noto Serif Tamil, Georgia, serif"
    fontSize: "clamp(1.35rem, 2vw, 1.7rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  tag-text:
    fontFamily: "Arima Madurai, Noto Serif Tamil, Georgia, serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "normal"
  lede:
    fontFamily: "Catamaran, Noto Sans Tamil, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Catamaran, Noto Sans Tamil, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Catamaran, Noto Sans Tamil, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  none: "0"
  disc: "50%"
spacing:
  gutter: "clamp(18px, 4vw, 40px)"
  chip-gap: "8px"
  action-gap: "12px"
  field-gap: "14px 20px"
  card-gap: "clamp(28px, 4vw, 56px)"
  column-gap: "clamp(28px, 5vw, 72px)"
  section: "clamp(64px, 9vw, 120px)"
  section-tight: "clamp(56px, 8vw, 100px)"
components:
  button-primary:
    backgroundColor: "{colors.kumkum}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "0.72em 1.15em 0.72em 1.75em"
  button-primary-hover:
    backgroundColor: "{colors.kumkum-deep}"
    textColor: "{colors.paper-white}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sandal}"
    rounded: "{rounded.none}"
    padding: "0.72em 1.15em 0.72em 1.75em"
  button-sandal:
    backgroundColor: "{colors.sandal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.72em 1.15em 0.72em 1.75em"
  button-big:
    backgroundColor: "{colors.kumkum}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "0.9em 1.4em 0.9em 2em"
  hang-tag-cta:
    backgroundColor: "{colors.kumkum}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "22px 14px 14px"
    width: "36%"
  hang-tag-cta-hover:
    backgroundColor: "{colors.kumkum-deep}"
    textColor: "{colors.paper-white}"
  chip:
    backgroundColor: "{colors.tissue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.55em 0.95em 0.55em 1.55em"
  chip-selected:
    backgroundColor: "{colors.manjal}"
    textColor: "{colors.ink}"
  quote-tag:
    backgroundColor: "{colors.sandal}"
    textColor: "{colors.ink}"
    typography: "{typography.tag-text}"
    rounded: "{rounded.none}"
    padding: "0.7em 1em 0.7em 2em"
  paper-tag:
    backgroundColor: "{colors.sandal}"
    textColor: "{colors.ink}"
    typography: "{typography.tag-text}"
    rounded: "{rounded.none}"
    padding: "26px 18px 16px"
    width: "min(78vw, 300px)"
  taped-note:
    backgroundColor: "{colors.tissue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px 20px 22px"
  print:
    backgroundColor: "{colors.tissue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 12px 40px"
    width: "min(72vw, 300px)"
  input:
    backgroundColor: "{colors.tissue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6em 0.5em"
    height: "48px"
  input-focus:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
  stamp-rating:
    backgroundColor: "{colors.sandal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.disc}"
    width: "clamp(116px, 10.6vw, 150px)"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0.3em 0"
---

# Design System: Aura Events & Craft

## Overview

**Creative North Star: "The Thambulam Bag"**

The whole site is the return-gift bag a guest carries home from a Tamil function. The page is kraft paper; its sections are the coloured papers inside (turmeric, betel-leaf green, sandal tissue); its components are bag parts (hang-tags for actions, paper tags for quotes, a rubber stamp for the wordmark and the rating, a jute thread for the spine). You open it and more keeps coming out: the hero bag literally opens on scroll, and everything below arrives toward the viewer rather than fading up.

The world is flat and printed. Every surface is a solid fill with an ink outline drawn as an inset stroke; nothing casts a shadow, nothing has a gradient except the one radial glow behind the bag. Warmth comes from the paper colours and a multiplied grain layer over the whole page, not from photography or gold. The type is two Tamil-native faces: Arima Madurai (heavy, round, festival-poster) for anything that is a heading or a hand-written tag, Catamaran for everything read at length or set as a small capital label. Density is generous on desktop and tight on phones, where the whole story has to fit one screen with the WhatsApp tag still in reach of a thumb.

This world refuses the generic event-planner site (full-bleed wedding photo, gold script, blush/ivory, Services/Gallery/Testimonials stack, fade-up on every card) and its opposite (dark moody luxury).

**Key Characteristics:**
- Kraft paper ground with coloured paper fields; the only pure white is the inside of a filled input and the text on a kumkum tag
- Ink outlines drawn as inset box-shadows or SVG strokes; no cast shadows anywhere
- One red. Kumkum appears on the primary action, focus rings, tick marks and hover underlines, and nowhere else
- Components are physical bag parts: hang-tags, paper tags, taped notes, stamps, a jute thread
- Everything sits slightly off-square (1° to 9° rotations) and settles square on hover
- Motion is "coming out of the bag": scale up toward the viewer, a hang-tag swing, a knot tightening

## Colors

A printed-paper palette: kraft ground, two coloured paper fields (turmeric and betel-leaf), two pale interior papers, brown ink, and a single red kept for the action.

### Primary
- **Kumkum Red** (`kumkum`): the one action colour. The hang-tag on the bag handle, `.btn-kumkum`, the WhatsApp tag in the thumb bar, the focus ring, the tick-mark strokes, the nav hover underline, the input focus underline, the stars in the rating stamp.
- **Kumkum Deep** (`kumkum-deep`): the pressed/hover state of anything kumkum.
- **Kumkum Ink** (`kumkum-ink`): red for small text sitting on kraft (the Tamil line under the hero headline). Chosen for a 4.8:1 contrast on kraft; the brighter kumkum is not used for text on kraft.

### Secondary
- **Manjal (turmeric)** (`manjal`): the first coloured paper field. Section backgrounds for Inside the bag and Families, the selected chip fill, the text selection highlight, the name board and image placeholders inside the icon set, the hole in a paper tag.
- **Manjal Deep** (`manjal-deep`): reserved darker turmeric; defined for the field, used sparingly.

### Tertiary
- **Vettrilai (betel-leaf) Green** (`vettrilai`): the second coloured paper field. The At the counter section, where text switches to tissue. Also the gift-box fill in the icon set.
- **Vettrilai Deep** (`vettrilai-deep`): reserved darker green.
- **Product colours** (`emerald`, `sapphire`, `magenta`, `gold`): the actual colours of the hair clips on sale. They appear only as swatch discs and clip fills in the product drop; they are not interface colours.

### Neutral
- **Kraft** (`kraft`): the page ground, the header, the Find section, the bag front, the tape strips on notes and prints, and the `theme-color`.
- **Kraft Deep** (`kraft-deep`): the Prints section ground, scrollbar track, and the tape on the map frame.
- **Kraft Inner** (`kraft-inner`): the inside of the bag (bag-back), the darker paper you see when it opens.
- **Sandal** (`sandal`): the pale interior paper. Default button and chip-hole fill, paper tags, quote tags, the rating stamp disc, the menu sheet, the thumb bar, the Pack section ground, the text colour on ink.
- **Tissue** (`tissue`): the palest paper. Inputs, chips, the taped note, prints, the owner's post, the map frame, inline code, and the text colour on vettrilai.
- **Paper White** (`paper-white`): text on kumkum, and the background of a focused input. Nowhere else.
- **Ink** (`ink`): all body text on paper, every outline stroke, the footer ground, the lightbox scrim (at 94%), the label-grid rules (at 35%).
- **Ink Soft** (`ink-soft`): secondary text (quote footers, notes, placeholders) and the un-ticked state of the hero contents list.
- **Jute** (`jute`): the thread, the bag handle, the dashed header and thumb-bar rules, the tag strings, the knot, the scrollbar thumb, the dashed `todo` outline.

### Named Rules
**The One Red Rule.** Kumkum is the action colour and only the action colour. It marks the thing to tap (the hang-tag, the WhatsApp button), the thing that has focus, and the tick that confirms; it never fills a section, a card or a decorative shape.

**The Paper Stack Rule.** Backgrounds are papers and they layer in a fixed order: kraft under everything, manjal and vettrilai as section fields, sandal and tissue as the objects lying on them. A component is always a lighter paper than the field it sits on; never place sandal on tissue or tissue on white.

**The Ink Line Rule.** Every outline is ink (`#2a1a0f`), drawn as an inset box-shadow (2px to 3.5px) or an SVG stroke (2 to 4). Borders in other colours exist only as dashed jute rules (header, thumb bar, menu sheet dividers) and the kumkum underline on focused inputs and hovered nav links.

**The Field Text Rule.** Text on manjal, sandal, tissue and kraft is ink. Text on vettrilai and ink is tissue or sandal. Text on kumkum is white. Small red text on kraft uses kumkum-ink, never kumkum.

## Typography

**Display Font:** Arima Madurai (with Noto Serif Tamil, Georgia, serif)
**Body Font:** Catamaran (with Noto Sans Tamil, system-ui, sans-serif)
**Label/Mono Font:** ui-monospace, monospace (inline `code` only)

**Character:** Two Tamil-native faces loaded from Google Fonts (Arima Madurai 400/500/700/900, Catamaran 400 to 800). Arima Madurai at 900 is heavy, round and festive, like a printed banner; at 700 in small sizes it reads as a hand-written tag. Catamaran carries everything read at length and every small capital label. The pairing is warm and plain-spoken, never scripty.

### Hierarchy
- **Display** (900, `clamp(2.5rem, 5.4vw, 4.9rem)`, 0.96, -0.015em): the hero headline only. Balanced wrap (`text-wrap: balance`). Drops to `clamp(2rem, 9.6vw, 2.8rem)` under 600px.
- **Headline** (900, `clamp(1.9rem, 3.6vw, 3rem)`, 1, -0.01em): every section heading (`.h2`), always with a knot tied to its left.
- **Title** (700, `clamp(1.35rem, 2vw, 1.7rem)`, 1): item-card headings (`.h3`). Fieldset legends use the same face at 700 / 1.15rem.
- **Tag Text** (700, 1.02rem, 1.35): the display face at reading size, used for anything written on a tag or note (quote tags, paper tags, the owner's post, the composed WhatsApp message, print captions, the address). This is the "hand-written" register.
- **Lede** (400, `clamp(1.05rem, 1.4vw, 1.2rem)`, 1.55, max 58ch): the one paragraph under each section heading.
- **Body** (400, 1.05rem, 1.55): default reading text. Emphasis is 600 or 700, never italic.
- **Label** (700, 0.78 to 0.8rem, 0.1em tracking, uppercase): label-grid `dt`s, field labels, the note title, the plus-code chip, the hang-tag's first line. The wordmark's "Events & Craft" uses the same register at 0.14em.
- **Button** (700, 1rem, 1): Catamaran on every hang-tag button; 1.15rem on `.btn-big`.

### Named Rules
**The Two Registers Rule.** Arima Madurai is for headings and for anything a person would have written by hand on a tag. Catamaran is for anything printed: body, labels, buttons, the stamp's ring text. Do not set body copy in the display face or headings in the body face.

**The Label Grid Rule.** Facts about a thing (For / Includes / Where / Known for; Hours / Visits / Online / Access) are always a `dl.label-grid`: a 5.5em uppercase Catamaran label column, an ink-at-35% rule between rows, no bullets. It collapses to one column under 600px.

## Layout

A single centred column of 1180px (`--wrap`), with a fluid gutter `clamp(18px, 4vw, 40px)` and a sticky 62px header (`--header-h`). Sections are full-width paper fields with `clamp(64px, 9vw, 120px)` of vertical padding (Prints is tighter at `clamp(56px, 8vw, 100px)`); their content sits in the wrap.

Inside a section the model is two columns. Copy-and-object pairs use asymmetric grids (`1.05fr/1fr` hero, `1.3fr/1fr` pack, `1.1fr/1fr` counter, `1fr/1fr` find) with a `clamp(28px, 5vw, 72px)` gap. The items grid is a strict two-by-two with art-then-body on the left cards and body-then-art on the right cards, so the four illustrations frame the copy. Horizontal rows (prints, paper tags) break out of the wrap: they are flex rows with `overflow-x: auto`, `scroll-snap-type: x proximity`, and a padding edge of `max(gutter, (100% - wrap) / 2)` so the first card aligns with the column while the row runs to the viewport edge.

The jute thread runs the full height of everything below the hero, its centre line 28px left of the content column (`--x: (100vw - wrap) / 2 - 58px`, 60px wide). Every section heading has a knot positioned absolutely onto it.

The hero is a scroll-driven stage: the section is 250vh tall (210vh under 600px) and its view sticks under the header at `min-height: calc(100svh - header)`. Progress `--p` (0 to 1, set by script) opens the bag, ticks the contents list and grows the glow. Without JavaScript the stage is static and fully readable.

**Breakpoints** (max-width): **1100px** the thread moves into the left gutter (`--x: -22px`) and knots sit inline with their heading; **900px** the header nav collapses to a Menu button and a sandal sheet, the hero stacks copy-over-bag (padding `26px 0 56px`) with the contents list in two columns and the scroll hint pinned to the bottom, every two-column grid becomes one, the sticky pack preview releases, and a fixed thumb bar (Call / Pack a bag) appears with 72px of body padding to clear it; **600px** the field grid, label grid, and button rows go full width, the display size drops, the hero tightens to `22px 0 52px`, and the wordmark loses "Events & Craft". A `max-height: 760px and max-width: 900px` rule shrinks the bag and hides the contents list so the tag stays in the first screen on short phones.

Spacing rhythm within components is em-based (0.35em to 0.7em gaps, 0.45em to 0.72em padding), with pixel gaps only for tap-target rows: 8px between chips, 10 to 12px between actions, 14px by 20px between fields. Inputs are at least 48px tall.

## Elevation & Depth

This system has no shadows. Depth is conveyed the way a printed bag conveys it: by stacking papers (a sandal tag on a manjal field on a kraft page), by ink outlines, by slight rotation, and by the paper grain multiplied over everything (`body::before`, a fixed fractal-noise SVG tile at 260px, opacity 0.16, `mix-blend-mode: multiply`). The `box-shadow` property appears throughout the stylesheet, but every instance is `inset 0 0 0 Npx` (an outline stroke), never an offset or a blur.

The two exceptions to flatness are both drawn, not cast: the radial glow behind the hero bag (`.aura`, a turmeric radial gradient that breathes over 6s and grows with scroll progress), and the SVG grain filter (`#kraft-grain`) laid over the bag surfaces to make the kraft read as paper.

### Named Rules
**The No Cast Shadow Rule.** Nothing casts a shadow. Lift is expressed with `translateY(-2px to -8px)` plus a small rotation on hover, or by a lighter paper, never with `box-shadow` offsets or blur. If a future surface needs separation, give it an ink outline and a different paper.

**The Tape Rule.** A loose sheet (note, owner's post, print, map frame) is held down by a kraft tape strip: a 64 to 70px by 16 to 18px pseudo-element at 92% opacity, rotated -2deg (or -40deg on the map's corners), with a 1px ink-at-35% inset outline.

## Shapes

Corners are square. The default radius is 0 on every button, tag, chip, input, card and note. The only round shape is the disc (`50%`): tag holes, the rating stamp, the wordmark stamp, colour swatches, the tick badge. The single 6px radius on the mobile Menu button and the 8px scrollbar thumb are the exceptions; do not extend them.

Silhouettes come from `clip-path`, not radius:
- **Hang-tag** (buttons and chips): `polygon(0 50%, 14px 0, 100% 0, 100% 100%, 14px 100%)`, a pointed left end with a punched hole (a 6 to 7px sandal disc with a 1.5px ink inset ring) sitting 9 to 12px in. Chips use a 12px point, quote tags a 16px point.
- **Hanging tag** (the CTA on the bag): `polygon(50% 0, 100% 12%, 100% 100%, 0 100%, 0 12%)`, a peaked top with the hole at the peak, hung from a jute string drawn in the bag SVG.
- **Paper tag** (reviews): a plain rectangle with a 3px jute string rising 20px from its top centre and a 10px manjal hole 8px down.
- **Stamp**: concentric ink rings (3.5px / 7px sandal gap / 9px) with the `#stamp-ink` SVG filter (fractal-noise displacement at scale 2.6 and an alpha matrix that thins the ink) so every stamp prints unevenly. The filter goes on rings and large numerals only, never on text under about 1rem.

Everything is drawn slightly off-square and settles on interaction: tags and notes rest at -1.2° to 1.6°, prints at ±2°, the map at 1°, the CTA tag at 9°, the rating stamp at -8°, the clips at -14° to 18°. Hover rotates toward 0 (or, for buttons, a nudge of -1° to -1.5°). Alternating children alternate the sign of the rotation.

Rules and dividers are dashed jute (2px dashed for header and thumb bar, 1px dashed between sheet links) or solid ink at 35% (label-grid rows) or solid 3px ink (item-card tops, the paper-tag line).

## Components

Every component is a bag part, drawn flat with an ink line. All share: no radius, an inset ink outline, a paper fill, and a small rotation-plus-lift on hover.

### Buttons (hang-tags)
- **Shape:** a hang-tag silhouette (`clip-path` with a 14px pointed left end), 2.5px inset ink outline, a punched hole 11px in; no radius.
- **Primary (`.btn-kumkum`):** kumkum fill, white text, Catamaran 700 at 1rem; padding `.72em 1.15em .72em 1.75em` (the extra left padding clears the hole); inline SVG icon at 1.15em with a 0.5em gap.
- **Hover / Focus:** `translateY(-2px) rotate(-1.5deg)` over 0.25s exponential ease-out, fill deepens to kumkum-deep; active drops 1px. Focus is the global 3px kumkum outline at 3px offset.
- **Ink (`.btn-ink`):** ink fill, sandal text; the secondary action (Call, Directions). Hover lightens the fill slightly.
- **Sandal (`.btn-sandal`):** sandal fill, ink text; the tertiary action on coloured fields (Ask if it's still in stock, Instagram).
- **Big (`.btn-big`):** 1.15rem, `.9em 1.4em .9em 2em`; full width under 600px.

### Hang-tag CTA (signature)
The primary action of the site is a kumkum tag hanging from the bag's handle. Positioned in percent of the bag box so its hole meets the string drawn in the bag SVG (`left: calc(81.5% - w/2)`, `top: 32.5%`, width 36%, 46% under 900px). Peaked-top `clip-path`, 3px inset ink outline drawn on a `::before` that inherits the clip, a 10px sandal hole with a 2px ink ring at the peak. Three lines: an uppercase Catamaran label, an Arima Madurai 900 line at `clamp(1.35rem, 1.85vw, 1.75rem)`, and a Catamaran 600 phone number. Rests at 9°, swings once on load (2.4s keyframe from -14° through 14° and 5° to 9°, origin at the hole), rotates to -4° and deepens on hover.

### Chips
- **Style:** tissue fill, ink text, Catamaran 700 at 0.98rem, hang-tag silhouette with a 12px point and a sandal hole, 2px inset ink outline; the native input is visually hidden inside the label.
- **State:** selected (`:has(input:checked)`) fills manjal; hover lifts 1px and rotates -1°; keyboard focus shows the 3px kumkum outline at 2px offset. Item chips carry a 1.6em inline SVG of the item. The small variant is 0.9rem.

### Cards / Containers
There is no generic card. Containers are specific papers:
- **Item card** (`.item-card`): no fill, a 3px ink rule on top, 18px top padding, a two-column grid of illustration (`clamp(104px, 11vw, 150px)`) and body; hover lifts the illustration 8px and rotates it -3°.
- **Quote tag** (`.quote-tag`): sandal, 16px hang-tag point, manjal hole, rotated -1.2° from its left edge, Tag Text at 700 with an ink-soft 0.8rem footer; max 34em.
- **Paper tag** (`.ptag`): sandal, 2px inset ink outline, `min(78vw, 300px)` wide, hung from a jute string on a 3px jute line drawn across the row's top; rotated ∓1.5° alternating, settles to 0 on hover over 0.4s.
- **Taped note** (`.note`, `.owner-post`): tissue, 2px inset ink outline, a kraft tape strip at the top, rotated ±1° to 1.2°; body in Tag Text.
- **Print** (`.print`): tissue with 12px padding and a 40px caption band, 2px inset ink outline, kraft tape, 4:5 image, rotated ±2°, hover straightens and lifts 6px; `cursor: zoom-in` opens the lightbox.

### Inputs / Fields
- **Style:** tissue fill, no border except a 2.5px ink bottom rule, `.6em .5em` padding, 48px minimum height, Catamaran 600 at 1.05rem; ink-soft placeholder at 500. The label above is the Label register; an `em` inside it is the un-tracked "(optional)".
- **Focus:** fill goes white and the bottom rule turns kumkum; no outline.
- **Error / Disabled:** not implemented; the form is `novalidate` and hands off to WhatsApp.

### Navigation
- **Header:** sticky, 62px, kraft, 2px dashed jute bottom rule. Wordmark is a 1.5rem stamp SVG plus "Aura" in Arima Madurai 900 at 1.9rem and "Events & Craft" as a 0.8rem uppercase label at 0.14em. Links are Catamaran 700 with a transparent 2px bottom border that turns kumkum on hover. Two hang-tag buttons (Call in ink, WhatsApp in kumkum) sit right.
- **Mobile (≤900px):** nav and actions hide; a sandal Menu button (2.5px ink border, the one 6px radius) toggles a fixed sandal sheet with a 3px ink border and Arima Madurai 700 links divided by 1px dashed jute. A fixed sandal thumb bar with a 2px dashed jute top rule holds Call (ink) and Pack a bag (kumkum) as a `1fr 1.4fr` grid; it appears after 90% of the first viewport has scrolled and hides while the Pack section is in view.
- **Footer:** ink ground, sandal text, the stamp wordmark in currentColor.

### Stamps (signature)
The wordmark and the rating are rubber stamps. Ink rings with the `#stamp-ink` filter, Arima Madurai 900 inside, Catamaran 800 ring text on a `textPath`. The rating stamp is a sandal disc (`clamp(116px, 10.6vw, 150px)`) at -8° with a triple inset ring (3.5px ink, 7px sandal, 9px ink) drawn on a `::before`, "5.0" at `clamp(1.7rem, 2.4vw, 2.3rem)`, five 11px kumkum stars, and a 0.7rem uppercase caption; it links to the Google listing and straightens to -2° with a 1.04 scale on hover. Only the rings and the big numeral take the `#stamp-ink` filter; the small caption is left unfiltered so 11px text stays crisp.

### The Thread (signature)
One jute thread is the spine of everything below the hero: a 4px jute SVG path with a 1.6px dashed lighter twist over it (`vector-effect: non-scaling-stroke`), drawn to the bottom of the viewport via `clip-path: inset(0 0 calc(var(--t) * 100%) 0)` where script sets `--t` to the undrawn fraction. Each `.h2` has a knot (`#ic-knot`, 0.95em) tied onto it, which arrives by scaling from 0.4 and -40° to rest.

### Motion grammar
One grammar: things come out of the bag toward you. The hero items scale from 1 to 1.32 (1.18 on phones) and translate outward as `--p` grows; the contents ticks draw with `stroke-dashoffset` over a 0.28 progress window. Below the hero, `.arrive` elements start at `scale(.92)` with `blur(3px)` and settle over 0.9s on the exponential ease-out `cubic-bezier(.16, 1, .3, 1)` (`--ease-out`, also aliased `--ease-swing`), once, when 20% of them enters the viewport. Hover transitions run 0.2 to 0.5s on the same curve. Mini-bag items drop in with a 0.5s `translateY(-40%) scale(.6)` keyframe staggered 60ms. Under `prefers-reduced-motion` the stage is static and fully open (`--p: 1`), arrivals are visible at rest, and every animation and transition is removed.

## Do's and Don'ts

### Do:
- **Do** draw every outline in ink as an inset box-shadow (2px on chips and cards, 2.5px on buttons and inputs, 3px on the CTA tag and menu sheet) or an SVG stroke.
- **Do** build new actions as hang-tags: the `.btn` clip-path, a punched hole, and one of the three fills (kumkum, ink, sandal).
- **Do** write quotes and facts on paper: quotes on sandal tags, structured facts in a `label-grid`, free text in a taped tissue note.
- **Do** keep kumkum for the primary action, focus, and confirmation marks only.
- **Do** rest new paper objects slightly off-square (1° to 2°, alternating sign across siblings) and settle them on hover.
- **Do** reveal below-the-fold content with `.arrive` (scale toward the viewer) and tie every new section heading to the thread with a knot.
- **Do** keep tap targets at least 48px on phones and keep Call and WhatsApp within one tap via the thumb bar.
- **Do** draw new icons and illustrations inline as SVG in the same 3px ink line, filled with palette variables.

### Don't:
- **Don't** cast a shadow. No `box-shadow` with offset or blur, no `drop-shadow`, no `text-shadow`.
- **Don't** round corners. Radius is 0 except for holes, discs and stamps at 50%.
- **Don't** use gradients on surfaces; the only gradient is the hero glow.
- **Don't** fill a section, card or decorative shape with kumkum, and don't set small text on kraft in kumkum (use kumkum-ink).
- **Don't** use a full-bleed photo as a hero, gold or script type, blush/ivory/rose-gold papers, or a dark luxury field.
- **Don't** fade cards up on scroll; things scale toward the viewer or they do not move.
- **Don't** set headings in Catamaran or body copy in Arima Madurai.
- **Don't** add white surfaces beyond the focused input; the palest paper is tissue.
- **Don't** put a paper darker than its field on top of that field (no sandal on tissue, no kraft object on sandal except a tape strip).
