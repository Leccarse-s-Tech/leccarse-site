# GEMINI.md — Project context

This file guides the AI agent working in this repository. Read it fully before editing anything.

## What this project is

Static corporate website for **Morse & Cacciatori**, a two-partner software house:

- **Athos Morse**: dev and training
- **Romeu Cacciatori**: dev and first client contact

Tagline (pt-BR, do not translate): "A base tecnológica das suas maiores ideias."

## Language rules

- **Website content stays in Brazilian Portuguese (pt-BR).** Keep `<html lang="pt-BR">` and write all user-facing copy in pt-BR.
- **Code, comments, commit messages and this file are in English.**
- **Talk to the owners in Brazilian Portuguese.** They are learning, so explain what changed and why in plain language.

## Stack and constraints

- HTML5 + CSS3 + Bootstrap 5.3 (via CDN). **No build step, no npm, no JS framework.**
- No backend. The contact form posts to Formspree.
- The owners know HTML, Jinja2, Bootstrap and basic Java. Write simple code with helpful comments that they can maintain on their own.
- Do not add dependencies, bundlers or libraries unless the user explicitly asks. If you think one is worth it, propose it first and wait for an answer.

## Structure

```
index.html   # single page: #inicio (hero), #servicos, #sobre, #contato
style.css    # custom styles; loaded AFTER Bootstrap
img/         # avatares.png + avatares.webp (both must exist)
README.md    # docs and roadmap (Portuguese + English summary)
```

## Visual identity (do not change unless asked)

- The hero is the heart of the brand: LEGO minifigures on the left; name and tagline on the right, centered, over a neon-green → cyan → off-white gradient.
- CSS variables in `:root` of `style.css`: `--verde`, `--verde-fundo`, `--ciano`, `--gelo`, `--tinta`, `--azul-cinza`, `--fonte`. **Use the variables; never hardcode colors in CSS.**
- Font: Space Grotesk. Hero title is uppercase, weight 300.
- Buttons: `.btn-ink` class (pill shape, `--tinta` background).
- Keep it clean: no heavy shadows, no excessive animation. The only motion is the minifigures' entrance in the hero, guarded by `prefers-reduced-motion`.
- Services are a list with divider lines, not a grid of identical cards. Keep that pattern.

## Content rules

- Tone: technical and direct, but clear for non-technical readers. Short sentences.
- Never invent technologies, clients, numbers or testimonials. If information is missing, ask.
- Do not change without being asked: the partners' emails, the Formspree endpoint (`https://formspree.io/f/mqpeylew`), names and roles.
- There is no WhatsApp number yet. Do not create a WhatsApp link with a made-up number.

## Quality checklist (before delivering)

- Responsive: check around 375 px (phone), 768 px and desktop.
- Accessibility: descriptive `alt` on images, `label` on every form field, visible focus, adequate text contrast, proper heading hierarchy (a single `h1`, in the hero).
- Images: keep `<picture>` with WebP and PNG fallback; keep `width` and `height` set to avoid layout shift.
- Valid HTML with no unclosed tags. Menu anchors (`#servicos`, `#sobre`, `#contato`) must keep working.
- Open `index.html` in a browser (or run `python3 -m http.server`) and test before saying it is done.

## How to work in this repository

1. Before large changes, describe the plan in a few lines and wait for confirmation.
2. Make small, focused edits; do not rewrite whole files without need.
3. If a task touches anything listed under "Do not change without being asked", ask first.

## Backlog

The list of future proposals is in `README.md`, section "Propostas futuras" (also summarized in the English section). When you finish an item, tick its checkbox.
