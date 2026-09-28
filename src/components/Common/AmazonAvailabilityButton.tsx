import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';
import { AmazonListing, getAmazonUrl, hasVerifiedAmazonListing } from '../../utils/amazonLinks';

interface AmazonAvailabilityButtonProps {
  listing: AmazonListing;
  label?: string;
  className?: string;
  unavailableClassName?: string;
  iconClassName?: string;
}

export const AmazonAvailabilityButton: React.FC<AmazonAvailabilityButtonProps> = ({
  listing,
  label = 'Check Price on Amazon',
  className = '',
  unavailableClassName = '',
  iconClassName = 'w-3.5 h-3.5',
}) => {
  if (!hasVerifiedAmazonListing(listing)) {
    return (
      <span
        aria-disabled="true"
        title="This Amazon listing is unavailable or awaiting re-verification."
        className={`cursor-not-allowed flex items-center justify-center gap-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 ${unavailableClassName || className}`}
      >
        <AlertTriangle className={`${iconClassName} text-amber-400 shrink-0`} />
        <span>Listing being re-verified</span>
      </span>
    );
  }

  return (
    <a
      href={getAmazonUrl(listing.asin)}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className={className}
    >
      <span>{label}</span>
      <ExternalLink className={`${iconClassName} shrink-0`} />
    </a>
  );
};
