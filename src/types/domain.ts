export type PriceTier = '$' | '$$' | '$$$' | '$$$$';

export type ProductCategory = 
  | 'complete-set' 
  | 'driver' 
  | 'irons' 
  | 'putter' 
  | 'wedge' 
  | 'fairway-wood' 
  | 'golf-ball';

export type SwingSpeedBracket = 'under-75' | '75-85' | '85-95' | '95-105' | '105-plus';
export type HandicapBracket = 'high-20-plus' | 'mid-10-19' | 'low-0-9';
export type HeightBracket = 'petite' | 'standard' | 'tall' | 'extra-tall';
export type MissTendency = 'slice' | 'hook' | 'low-trajectory' | 'inconsistent-strike';
export type GreenPriority = 'distance-roll' | 'greenside-spin' | 'balanced';

export interface Scorecard {
  forgiveness: number;       // 1 - 10
  ballSpeedDistance: number; // 1 - 10
  feelAcoustics: number;     // 1 - 10
  dispersionControl: number; // 1 - 10
  buildValue: number;        // 1 - 10
  overallRating: number;     // e.g. 9.4
}

export interface Specification {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  brand: string;
  model: string;
  category: ProductCategory;
  headline: string;
  summary: string;
  asin: string;
  amazonStatus: 'verified' | 'unavailable';
  amazonCheckedAt?: string;
  priceTier: PriceTier;
  priceTierDescription: string;
  mediaCdnUrl: string;
  fallbackIcon: 'driver' | 'irons' | 'putter' | 'wedge' | 'ball' | 'set' | 'wood';
  badge?: string;
  bestFor: string;
  
  // Biomechanical & Engineering Specs
  targetSwingSpeed: SwingSpeedBracket[];
  targetHandicap: HandicapBracket[];
  targetHeight: HeightBracket[];
  recommendedShaftFlex?: string;
  compressionRating?: number; // for balls
  coverMaterial?: string;    // for balls
  constructionLayers?: number;// for balls
  specs: Specification[];
  scorecard: Scorecard;
  pros: string[];
  cons: string[];
  failureModesAndCare: string;
  faqs: ProductFAQ[];
  reviewDate: string;
}

export interface QuizState {
  swingSpeed: SwingSpeedBracket;
  handicap: HandicapBracket;
  height: HeightBracket;
  missTendency: MissTendency;
  greenPriority: GreenPriority;
  experienceYears: number;
}

export interface BiomechanicsResult {
  recommendedShaftFlex: string;
  recommendedDriverLoft: string;
  lieAngleAdjustment: string;
  shaftLengthAdjustment: string;
  targetBallCompression: string;
  recommendedBallCover: string;
  primaryHeadStyle: string;
  analysisSummary: string;
}

export interface BillOfMaterialItem {
  role: string;
  productSlug: string;
  customSpecNote: string;
}

export interface Blueprint {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  targetGolfer: string;
  difficulty: 'Beginner Friendly' | 'Moderate Spec' | 'Advanced Tour Build';
  estimatedBOMTier: PriceTier;
  swingSpeedTarget: string;
  handicapTarget: string;
  heightTarget: string;
  overview: string;
  keyEngineeringBenefits: string[];
  bom: BillOfMaterialItem[];
  assemblyInstructions: string[];
  proFittingNotes: string;
}

export interface EditorialGuide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  publishedDate: string;
  authorName: string;
  authorTitle: string;
  excerpt: string;
  verdict: string;
  keyTakeaways: string[];
  decisionTable: {
    situation: string;
    startingPoint: string;
    whyItFits: string;
    verifyBeforeBuying: string;
  }[];
  contentSections: {
    heading: string;
    body: string[];
    callout?: {
      type: 'tip' | 'warning' | 'info';
      title: string;
      message: string;
    };
  }[];
  buyingChecklist: string[];
  faqs: ProductFAQ[];
  sources: {
    name: string;
    url: string;
    note: string;
  }[];
  relatedProducts: string[]; // slugs
}
