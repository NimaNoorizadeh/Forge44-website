# FORGE 44

A responsive fictional strength and conditioning club, built with React, TypeScript and Vite. Workshop signage, chalk, steel and the Unit 44 story establish the visual identity.

## Run locally

Use Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and creates the production site in `dist`. `npm run preview` serves that build.

## Structure

- `src/App.tsx`: homepage sections, navigation, training options and membership selection.
- `src/components/BookingDialog.tsx`: accessible native dialog with validated booking preview. It does not send or save data.
- `src/styles/global.css`: design tokens, layout, typography and responsive styles.
- `public/images`: selected user-provided Unsplash photographs.

## Before using for a real club

Replace fictional pricing, coach profiles, hours, address, email and social handle. Connect the booking form to a real booking service and add the appropriate privacy information. The current booking experience explicitly confirms that no real reservation is made. The `.example` email is intentionally non-operational; no real business address is used.

Typography: Barlow and Barlow Condensed, bundled locally with their SIL Open Font Licenses. Photography supplied by the project owner: Kobe Kian Clata (hero), Ambitious Studio / Rick Barrett (floor), Andrew Valdivia (coaching), Redd Francisco (closing section).

## Verification

The production build passes. Browser checks covered widths of 360, 390, 768, 1024 and 1440 pixels, image loading, horizontal overflow, mobile navigation, schedule and membership selection, the booking preview, Escape dismissal and the coaching/training disclosures. Desktop and mobile screenshots were also reviewed visually.
