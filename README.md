# Louisville Jerky Co. mobile app

iOS app built with Expo (SDK 58), Expo Router, and NativeWind. It combines the shop, the Jerky Club subscription, and mini-games that award loyalty points.

Phase 1 runs entirely on mock data in `src/data`. Shopify, Recharge, and Klaviyo come in later phases.

## Run it

```bash
npm install
```

```bash
npx expo start
```

Press `i` for the iOS simulator (macOS with Xcode), or scan the QR code with Expo Go on an iPhone.

## Checks

```bash
npm run typecheck
```

```bash
npm run lint
```

## Layout

```
src/
  app/                 Routes (Expo Router). Every file here is a screen.
    _layout.tsx        Root stack; imports global.css
    (tabs)/            The four tabs: index (Home), shop, play, account
  components/
    ui/                Brand components (Headline, Button, Card, FlavorTag...)
    home/ shop/ play/ account/   Feature components, one folder per tab
  constants/           Brand colors, shadows and the flavor lineup
  data/                Mock products, drops, loyalty, subscription
  hooks/               Shared hooks
  lib/                 Helpers now; API clients (Shopify, Recharge, Klaviyo) later
  store/               App state (cart, bundle builder, points)
  types/               Shared TypeScript types
  global.css           Tailwind entry and brand color tokens
```

## Brand and styling

The look comes from the Louisville Jerky Co. design system: https://claude.ai/artifact/VxKLF44LorgF8ucedwWVb8

- **Tokens** live in `src/global.css` and become Tailwind classes: colors (`bg-cream`, `text-navy`, `bg-gold`, `bg-sky`...), semantic colors (`bg-ground`, `text-ink`, `border-edge`), type sizes (`text-headline`, `text-subhead`, `text-body`, `text-label`...), fonts (`font-display`, `font-body`, `font-body-bold`, `font-letter`, `font-flavor`) and radii (`rounded-lg`, `rounded-pill`). `src/constants/theme.ts` mirrors the colors and hard shadows for style props; change both together.
- **Flavors** are in `src/constants/flavors.ts`: each Classic flavor's color, character and bag art.
- **Components** in `src/components/ui` are ported from the design system: `Headline`, `Button`, `Card`, `FlavorTag`, `CertBadge`.
- **Assets** are in `assets/brand` (logos, badges, characters, packaging) and `assets/fonts`.

The app uses the Classic theme (cream ground, navy ink). `Headline` is the plain, ink-filled variant because React Native has no text stroke.

Copy rules: headlines and CTAs are uppercase; no em dashes; customers are "Jerky Heads" and loyalty points are "Jerky Coins"; lead with flavor, never with "vegan"; never invent a stat or a scarcity claim.

NativeWind is pinned to the v5 release candidate, which needs `lightningcss` held at 1.30.1 (see `overrides` in `package.json`).
