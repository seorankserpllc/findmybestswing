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
    description: string;
    priceTier: '$' | '$$';
  }[];
}

export function matchGolfGear(quiz: QuizState, biomechanics: BiomechanicsResult): MatchingResult {
  // 1. Match Turnkey Product
  let turnkeySlug = 'callaway-strata-12-piece';
  let turnkeyPitch = 'The most cohesive, forgiving unbox-and-play complete set for standard stature and high handicappers.';

  if (quiz.height === 'tall' || quiz.height === 'extra-tall') {
    turnkeySlug = 'wilson-profile-platinum';
    turnkeyPitch = 'Engineered specifically with factory +1.0" extended shaft configurations and upright lie angles to prevent tall player spine fatigue.';
  } else if (quiz.handicap === 'high-20-plus' && quiz.missTendency === 'slice') {
    turnkeySlug = 'callaway-strata-12-piece';
    turnkeyPitch = 'Offset hybrid and lightweight graphite construction engineered to cure extreme slices and elevate ball flight.';
  }

  const turnkeyProduct = getProductBySlug(turnkeySlug) || PRODUCTS[0];

  // 2. Match Modular Components
  // Driver
  let driverSlug = 'taylormade-stealth-2-driver';
  if (quiz.missTendency === 'slice' || quiz.handicap === 'high-20-plus') {
    driverSlug = 'callaway-paradym-driver';
  }
  const modularDriver = getProductBySlug(driverSlug) || PRODUCTS[2];

  // Irons
  let ironsSlug = 'callaway-rogue-st-max-os-irons';
  if (quiz.handicap === 'mid-10-19' || quiz.swingSpeed === '95-105') {
    ironsSlug = 'mizuno-jpx923-hot-metal-irons';
  }
  const modularIrons = getProductBySlug(ironsSlug) || PRODUCTS[4];

  // Putter
  const modularPutter = getProductBySlug('odyssey-white-hot-og-putter') || PRODUCTS[6];

  // Wedge
  const modularWedge = getProductBySlug('cleveland-cbx-zipcore-wedge') || PRODUCTS[7];

  // Golf Ball (Matched to Swing Speed from our SEO Data!)
  let ballSlug = 'callaway-supersoft-golf-balls';
  if (quiz.swingSpeed === 'under-75') {
    ballSlug = 'callaway-supersoft-golf-balls';
  } else if (quiz.swingSpeed === '75-85') {
    ballSlug = 'callaway-supersoft-golf-balls';
  } else if (quiz.swingSpeed === '85-95') {
    ballSlug = quiz.greenPriority === 'distance-roll' ? 'taylormade-distance-plus-golf-balls' : 'srixon-soft-feel-golf-balls';
  } else if (quiz.swingSpeed === '95-105' || quiz.swingSpeed === '105-plus') {
    ballSlug = 'titleist-pro-v1-golf-balls';
  }
  const modularBall = getProductBySlug(ballSlug) || PRODUCTS[8];

  const modularPitch = `Custom modular combination pairing ${modularDriver.model} with ${modularIrons.model} and speed-matched ${modularBall.model} to unlock up to 18 extra carry yards.`;

  // Companion Gear
  const companionGear = [
    {
      name: 'SKLZ Golf Tempo & Grip Trainer',
      asin: 'B00196U63W',
      description: 'Corrects hand placement, builds swing muscle memory, and reinforces smooth takeaway tempo before teeing off.',
      priceTier: '$' as const,
    },
    {
      name: 'Callaway Golf Clean Ball Towel & Wire Club Cleaner',
      asin: 'B07HMV42Y3',
      description: 'Essential dual-surface brass/nylon groove brush with magnetic clip to keep iron and wedge grooves sharp for maximum backspin.',
      priceTier: '$' as const,
    },
    {
      name: 'PrecisionPro Golf Laser Rangefinder with Slope',
      asin: 'B08F2TRQ1N',
      description: 'Accurate to 1 yard with slope-adjusted elevation calculations to eliminate distance estimation errors.',
      priceTier: '$$' as const,
    },
    {
      name: 'Callaway Org 14 Cart Golf Bag with Full Dividers',
      asin: 'B09R8L6X2Z',
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
