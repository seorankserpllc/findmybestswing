export interface AmazonListing {
  asin: string;
  amazonStatus: 'verified' | 'unavailable';
}

/**
 * Amazon Associates Compliance & Direct Linking Generator
 * 
 * Strict Compliance Rules:
 * 1. NEVER send users to Amazon search pages (amazon.com/s?k=...)
 * 2. Always link directly to verified Amazon Product Detail Pages (/dp/[ASIN])
 * 3. Never display static, unrefreshed dollar amounts; use relative tiers and "Check Price"
 */

export const DEFAULT_AFFILIATE_TAG = 'findmybestswing-20';

export function getAmazonUrl(asin: string, affiliateTag: string = DEFAULT_AFFILIATE_TAG): string {
  const cleanTag = affiliateTag.trim() || DEFAULT_AFFILIATE_TAG;
  const cleanAsin = asin.trim();
  return `https://www.amazon.com/dp/${cleanAsin}?tag=${encodeURIComponent(cleanTag)}`;
}

export function hasVerifiedAmazonListing(listing: AmazonListing): boolean {
  return listing.amazonStatus === 'verified' && /^[A-Z0-9]{10}$/.test(listing.asin.trim());
}

export function formatPriceTierLabel(tier: '$' | '$$' | '$$$' | '$$$$'): string {
  switch (tier) {
    case '$':
      return '$ (Entry: Under $60)';
    case '$$':
      return '$$ (Moderate: $60–$250)';
    case '$$$':
      return '$$$ (Performance: $250–$600)';
    case '$$$$':
      return '$$$$ (Tour Luxury: $600+)';
    default:
      return '$$ (Market Value)';
  }
}
