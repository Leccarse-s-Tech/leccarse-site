# GEMINI.md — BarbeMan (fictional demo project)

Context for the AI agent working in this folder. Read it fully before editing anything.

## Purpose

BarbeMan is a **fictional barbershop website** built as a portfolio piece for **Morse & Cacciatori**, a two-partner software house (Athos Morse: dev and training; Romeu Cacciatori: dev and first client contact).

It lives in the "Projects" page of the main Morse & Cacciatori site and exists to show prospective clients what the studio can deliver for a small local business:

- a distinctive, premium-feeling design instead of a generic template;
- a presentation-style layout (a carousel of full-screen slides) instead of a long scrolling page;
- a clear path to conversion (booking through WhatsApp);
- fast, accessible, mobile-friendly, dependency-free code.

It is **not a real business**. Names, prices, plans, hours and copy are invented examples.

### Concept and inspiration

- Inspiration: a minimalist product site (MOHEIM) with a giant thin wordmark overlapping the hero image, a muted single-color palette, a tiny uppercase menu, a "01 / 03" counter with a thumbnail of the next slide, and a floating corner tab.
- Our adaptation: the giant thin **BARBEMAN** wordmark over a barbershop photo, one slide per topic, a floating **WhatsApp** tab in the bottom-right corner.
- Slides: **Início**, **Preços e planos**, **Sobre nós**. WhatsApp is a floating tab and a menu link, not a slide.

## Language rules

- **Site copy stays in Brazilian Portuguese (pt-BR).** Keep `<html lang="pt-BR">`.
- **Code, comments, commit messages and this file are in English.**
- **Talk to the owners in Brazilian Portuguese.** They are learning, so explain what changed and why in plain language.

## Stack and constraints

- A single self-contained `index.html` with inline CSS and vanilla JS, plus `img/`. **No build step, no npm, no framework, no Bootstrap.**
- Only external resource: Google Fonts (Jost). Everything else is local.
- Keep it simple enough for the owners (who know HTML, Jinja2, Bootstrap and basic Java) to maintain. Comment non-obvious code.
- Do not add dependencies unless the user explicitly asks. If you think one is worth it, propose it first and wait for an answer.

## Structure

```
index.html   # header, 3 slides, carousel controls, WhatsApp tab, JS
img/         # each photo exists as .webp (used) and .jpg (fallback)
GEMINI.md    # this file
```

## Visual identity (independent from the main site)

This project has its **own identity**. Do **not** apply the main site's green gradient, Space Grotesk font, Bootstrap classes or `style.css` here.

- Palette (CSS variables in `:root`): `--musgo #1b231f` (moss-graphite background and photo shade), `--osso #eee9dc` (text), `--osso-2 #c9c4b6` (secondary text), `--latao #c4a463` (muted brass for prices and active states). Use the variables; never hardcode colors.
- Font: Jost. Wordmark and slide titles are uppercase at weight 200; body text at 300/400.
- Photos are full-bleed backgrounds with a dark overlay (`--shade`) so text stays readable.
- Lists use thin divider lines, not grids of identical cards.
- Motion: crossfade between slides only, disabled under `prefers-reduced-motion`. No decorative animations.
- Spend boldness in one place: the giant wordmark over the photo. Keep everything else quiet.

## Content rules

- Tone: plain, direct, short sentences. No hype.
- Everything is fictional: do not present invented prices or claims as real, and do not invent testimonials or statistics.
- WhatsApp number `5511999999999` is a placeholder. It appears in three links (menu, hero button, floating tab); change all three together.
- The line "Projeto fictício de demonstração, desenvolvido por Morse & Cacciatori" must remain visible on the last slide.
- The three photos were AI-generated. That is fine for a demo, but a real client site needs real photos of the real shop.

## Possible improvements

Ordered roughly by value for the portfolio. Tick the box when done.

### Quick wins

- [x] Add `<meta name="robots" content="noindex">` so the fictional demo does not show up in search results as a real business
- [x] Add a favicon and Open Graph tags so the link previews well on WhatsApp and LinkedIn
- [ ] Replace the 1024 px razor photo with a higher-resolution one (the other two are 2576 px)
- [x] Preload the next slide's image to avoid a flash on slow connections
- [x] Support URL hashes (`#precos`, `#sobre`) so each slide can be linked and the back button works

### Better booking flow (strongest selling point for clients)

- [x] Service picker on the pricing slide: choosing a service or plan builds the WhatsApp message ("Olá, quero agendar Corte e barba")
- [x] Highlight a recommended plan and show the monthly saving versus paying per service
- [ ] Optional day/time-of-day preference before opening WhatsApp

### More slides, if more photos and content become available

- [ ] **Equipe**: the barbers, one photo and one line each
- [ ] **Galeria**: a few cuts and beard styles
- [ ] **Onde estamos**: address, hours and a static map image (no third-party embed)

### Carousel polish

- [ ] Mouse wheel / trackpad navigation between slides (with a short lock so it does not skip slides)
- [ ] Directional transition (slide left/right) in addition to the crossfade, still disabled for reduced motion
- [ ] A thin progress indicator for the current slide

### Performance and accessibility

- [ ] Responsive image sizes (`srcset` at roughly 800, 1280 and 1920 px)
- [ ] Self-host the Jost font so the page has no external requests
- [ ] Re-check text contrast over each photo, especially where text sits on top of hands or bright areas
- [ ] Test with a screen reader (slide announcements, tab order, `inert` on hidden slides)

### Architecture

- [ ] Move services, prices and plans to a data file (JSON or YAML) and render the HTML with Jinja2 at build time, still outputting a static site. This is a good showcase of "editable content without touching the layout".

## Quality checklist (before delivering)

- Check around 375 px (phone), 768 px and desktop, on all three slides.
- Keyboard: left/right arrows change slides, Tab order is logical, focus is always visible.
- Hidden slides are not reachable by keyboard or screen reader (`aria-hidden` and `inert`).
- Text stays readable over every photo; controls never overlap content (the content area scrolls on small screens).
- Valid HTML, no console errors, all image paths relative so the folder can be moved.
- Open `index.html` in a browser (or run `python3 -m http.server`) and test before saying it is done.

## How to work in this folder

1. Before large changes, describe the plan in a few lines and wait for confirmation.
2. Make small, focused edits; do not rewrite the whole file without need.
3. If a task touches the visual identity or the "fictional demo" notice, ask first.
4. When you finish an item from "Possible improvements", tick its checkbox.
