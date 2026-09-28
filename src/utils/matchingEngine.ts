import { QuizState, BiomechanicsResult, Product } from '../types/domain';
import { PRODUCTS, getProductBySlug } from '../data/products';

export interface MatchingResult {
  biomechanics: BiomechanicsResult;
  // Option A: Turnkey Set
  turnkeyProduct: Product;
  turnkeyPitch: string;
  // Option B: Modular DIY Bag
  modularDriver: Product;
  modularIrons: Product;
  modularPutter: Product;
  modularWedge: Product;
  modularBall: Product;
  modularPitch: string;
  // Companion gear
  companionGear: {
    name: string;
    asin: string;
    amazonStatus: 'verified' | 'unavailable';
    description: string;
    priceTier: '$' | '$$';
  }[];
}

export function matchGolfGear(quiz: QuizState, biomechanics: BiomechanicsResult): MatchingResult {
  // 1. Match a turnkey set only when the verified configuration fits the shopper.
  let turnkeySlug = 'callaway-xr-2026-complete-set';
  let turnkeyPitch = 'A premium, coordinated right-handed set for a standard-height golfer who values one-purchase convenience over component-level fitting.';

  if (quiz.height === 'tall' || quiz.height === 'extra-tall') {
    turnkeySlug = 'wilson-profile-platinum';
    turnkeyPitch = 'We do not currently have a verified premium Amazon complete-set variant for this height. Use the modular recommendation and confirm length and lie in a fitting.';
  } else if (quiz.height === 'petite') {
    turnkeySlug = 'callaway-strata-12-piece';
    turnkeyPitch = 'We do not currently have a verified premium Amazon complete-set variant for this height. Use the modular recommendation and confirm length and lie in a fitting.';
  }

  const turnkeyProduct = getProductBySlug(turnkeySlug) || PRODUCTS[0];

  // 2. Match premium modular components by the needs the quiz actually captures.
  const driverSlug =
    quiz.missTendency === 'slice' || quiz.handicap === 'high-20-plus'
      ? 'callaway-quantum-max-driver'
      : 'taylormade-qi4d-max-driver';
  const modularDriver = getProductBySlug(driverSlug) || PRODUCTS[0];

  const prefersPlayersDistance =
    quiz.handicap === 'low-0-9' ||
    (quiz.handicap === 'mid-10-19' &&
      ['85-95', '95-105', '105-plus'].includes(quiz.swingSpeed));
  const ironsSlug = prefersPlayersDistance
    ? 'taylormade-p790-2025-irons'
    : 'callaway-quantum-max-os-irons';
  const modularIrons = getProductBySlug(ironsSlug) || PRODUCTS[0];

  const modularPutter =
    getProductBySlug('odyssey-ai-dual-s2s-jailbird-putter') || PRODUCTS[0];
  const modularWedge =
    getProductBySlug('cleveland-rtz-56-mid-wedge') || PRODUCTS[0];
  const modularBall =
    getProductBySlug('titleist-pro-v1-2025-golf-balls') || PRODUCTS[0];

  const modularPitch = `A premium component bag pairing ${modularDriver.model} with ${modularIrons.model}. Before buying, confirm shaft length and flex, iron lie, wedge gapping, putter length and setup, and the ball's full-bag flight and spin.`;
  // Companion Gear
  const companionGear = [
    {
      name: 'SKLZ Golf Tempo & Grip Trainer',
      asin: 'B00196U63W',
      amazonStatus: 'unavailable' as const,
      description: 'Corrects hand placement, builds swing muscle memory, and reinforces smooth takeaway tempo before teeing off.',
      priceTier: '$' as const,
    },
    {
      name: 'Callaway Golf Clean Ball Towel & Wire Club Cleaner',
      asin: 'B07HMV42Y3',
      amazonStatus: 'unavailable' as const,
      description: 'Essential dual-surface brass/nylon groove brush with magnetic clip to keep iron and wedge grooves sharp for maximum backspin.',
      priceTier: '$' as const,
    },
    {
      name: 'PrecisionPro Golf Laser Rangefinder with Slope',
      asin: 'B08F2TRQ1N',
      amazonStatus: 'unavailable' as const,
      description: 'Accurate to 1 yard with slope-adjusted elevation calculations to eliminate distance estimation errors.',
      priceTier: '$$' as const,
    },
    {
      name: 'Callaway Org 14 Cart Golf Bag with Full Dividers',
      asin: 'B09R8L6X2Z',
      amazonStatus: 'unavailable' as const,
      description: '14-way individual full-length club dividers with insulated cooler pocket and water-resistant magnetic valuables storage.',
      priceTier: '$$' as const,
    }
  ];

  return {
    biomechanics,
    turnkeyProduct,
    turnkeyPitch,
    modularDriver,
    modularIrons,
    modularPutter,
    modularWedge,
    modularBall,
    modularPitch,
    companionGear,
  };
}
