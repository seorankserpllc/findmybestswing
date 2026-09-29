import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AmazonListing, getAmazonUrl, hasVerifiedAmazonListing } from '../../utils/amazonLinks';

interface AmazonAvailabilityButtonProps {
  listing: AmazonListing;
  label?: string;
  className?: string;
  iconClassName?: string;
}

export const AmazonAvailabilityButton: React.FC<AmazonAvailabilityButtonProps> = ({
  listing,
  label = 'Check Price on Amazon',
  className = '',
  iconClassName = 'w-3.5 h-3.5',
}) => {
  if (!hasVerifiedAmazonListing(listing)) {
    return null;
  }

  return (
    <a
      href={getAmazonUrl(listing.asin)}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={`min-w-0 max-w-full ${className}`}
    >
      <span className="min-w-0 break-words text-center leading-tight">{label}</span>
      <ExternalLink className={`${iconClassName} shrink-0`} />
    </a>
  );
};
