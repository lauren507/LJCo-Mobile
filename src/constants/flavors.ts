import type { ImageSource } from 'expo-image';

import { Colors } from '@/constants/theme';

export type FlavorId =
  | 'smoked-black-pepper'
  | 'pepperoni-pizza'
  | 'maple-bacon'
  | 'general-tsos'
  | 'buffalo-hot-wing'
  | 'smoky-carolina-bbq';

export type Flavor = {
  id: FlavorId;
  label: string;
  /** The bag color. Each Classic flavor owns one color everywhere. */
  color: string;
  /** Text color on the flavor's ground. */
  ink: string;
  /** The flavor's character. Use it whole and only with its own flavor. */
  character: ImageSource | number;
  /** The 2025 bag front. */
  bag: ImageSource | number;
};

export const flavors: Record<FlavorId, Flavor> = {
  'smoked-black-pepper': {
    id: 'smoked-black-pepper',
    label: 'Smoked Black Pepper',
    color: Colors.sky,
    ink: Colors.navy,
    character: require('@/assets/brand/characters/smoked-black-pepper.png'),
    bag: require('@/assets/brand/packaging/smoked-black-pepper-front.png'),
  },
  'pepperoni-pizza': {
    id: 'pepperoni-pizza',
    label: 'Pepperoni Pizza',
    color: Colors.red,
    // Navy on red is only 4.3:1, so Pepperoni uses ink-black.
    ink: Colors.inkBlack,
    character: require('@/assets/brand/characters/pepperoni-pizza.png'),
    bag: require('@/assets/brand/packaging/pepperoni-pizza-front.png'),
  },
  'maple-bacon': {
    id: 'maple-bacon',
    label: 'Maple Bacon',
    color: Colors.pink,
    ink: Colors.navy,
    character: require('@/assets/brand/characters/maple-bacon.png'),
    bag: require('@/assets/brand/packaging/maple-bacon-front.png'),
  },
  'general-tsos': {
    id: 'general-tsos',
    label: "General Tso's",
    color: Colors.lavender,
    ink: Colors.navy,
    character: require('@/assets/brand/characters/general-tsos.png'),
    bag: require('@/assets/brand/packaging/general-tsos-front.png'),
  },
  'buffalo-hot-wing': {
    id: 'buffalo-hot-wing',
    label: 'Buffalo Hot Wing',
    color: Colors.orange,
    ink: Colors.navy,
    character: require('@/assets/brand/characters/buffalo-hot-wing.png'),
    bag: require('@/assets/brand/packaging/buffalo-hot-wing-front.png'),
  },
  'smoky-carolina-bbq': {
    id: 'smoky-carolina-bbq',
    label: 'Smoky Carolina BBQ',
    color: Colors.gold,
    ink: Colors.navy,
    character: require('@/assets/brand/characters/smoky-carolina-bbq.png'),
    bag: require('@/assets/brand/packaging/smoky-carolina-bbq-front.png'),
  },
};
