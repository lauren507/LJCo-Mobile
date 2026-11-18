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
    ui/                Shared building blocks (Screen, Card)
    home/ shop/ play/ account/   Feature components, one folder per tab
  constants/theme.ts   Brand colors for native APIs that can't take class names
  data/                Mock products, drops, loyalty, subscription
  hooks/               Shared hooks
  lib/                 Helpers now; API clients (Shopify, Recharge, Klaviyo) later
  store/               App state (cart, bundle builder, points)
  types/               Shared TypeScript types
  global.css           Tailwind entry and brand color tokens
```

## Styling

Use Tailwind classes through `className`. Brand colors are defined once in `src/global.css` (`bg-smoke`, `bg-char`, `text-cream`, `text-tan`, `text-ember`, `text-bourbon`, `text-pepper`, `border-hickory`). `src/constants/theme.ts` mirrors them for the tab bar and other native APIs; change both together.

NativeWind is pinned to the v5 release candidate, which needs `lightningcss` held at 1.30.1 (see `overrides` in `package.json`).
