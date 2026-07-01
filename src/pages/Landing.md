# Landing.jsx — Aya Club "جربي قبل تشترين"

Arabic (RTL) waitlist landing page for Aya Club's "Try Before You Buy" initiative. Renders at `/`.

## Sections

1. **Hero** — full-bleed photo background (`src/assets/images/hero.png`), "Aya Club" wordmark + "Beta" badge top-left, headline "جربي قبل تشترين", supporting copy, and a "جربي الحين" CTA that anchors to `#signup`. Image crop and gradient scrim differ between mobile (bottom-anchored text, bottom-to-top scrim) and desktop (right-anchored text, left-to-right scrim).

2. **How it works (كيفية العمل)** — `STEPS` array of 5 steps (icon, title, body) rendered as cards. Single column stacked "small rectangle" cards on mobile, 2-column then 5-column grid from `sm`/`lg` up.

3. **Waitlist form (#signup)** — burgundy card containing `SignupForm`. On successful submit, swaps to a centered thank-you message using the submitted first name; no longer displays the submitted phone/email.

4. **Perks (Aya Club قادم قريباً)** — `PERKS` array of 5 perks, same card layout pattern as the "how it works" section, on a black background.

## Data

- `STEPS` and `PERKS` are local const arrays at the top of the file — edit copy/icons there.
- Icons from `lucide-react`.
- Actual signup persistence/validation logic lives in `../components/SignupForm.jsx` and `../lib/storage.js` (localStorage key `aya_club_waitlist`).

## Styling notes

- Uses the project's Tailwind `@theme` tokens (`burgundy`, `biscuit`, `offwhite`, `black`, `white`) defined in `src/index.css` — never the placeholder `gold`/`charcoal`/`cream` names from the original mockup.
- Font: `Thmanyah Sans` (see `src/index.css` `@font-face` rules), applied via `--font-arabic`.
- Mobile-first classes with `sm:` overrides preserve the original desktop design while giving mobile its own compact layout (this page is expected to be viewed primarily on mobile).
