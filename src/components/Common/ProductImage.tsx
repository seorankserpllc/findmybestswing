import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  category: 'driver' | 'irons' | 'putter' | 'wedge' | 'ball' | 'set' | 'wood';
  className?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({ src, alt, category, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-900 border border-slate-800 rounded-xl p-4 text-emerald-400 select-none ${className}`}>
        {category === 'driver' && (
          <svg className="w-16 h-16 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l4-8 14 3-4 8-14-3zM7 5.5l10 13" />
          </svg>
        )}
        {category === 'irons' && (
          <svg className="w-16 h-16 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 18l6-14 10 4-4 10H4z" />
          </svg>
        )}
        {category === 'putter' && (
          <svg className="w-16 h-16 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m-6 0h12v4H6z" />
          </svg>
        )}
        {category === 'wedge' && (
          <svg className="w-16 h-16 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19l4-12 11 5-6 7H5z" />
          </svg>
        )}
        {category === 'ball' && (
          <svg className="w-16 h-16 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="9" cy="9" r="1" />
            <circle cx="15" cy="9" r="1" />
            <circle cx="9" cy="15" r="1" />
            <circle cx="15" cy="15" r="1" />
          </svg>
        )}
        {category === 'set' && (
          <svg className="w-16 h-16 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <rect x="6" y="8" width="12" height="13" rx="2" />
            <path d="M9 8V5a2 2 0 012-2h2a2 2 0 012 2v3M9 13h6M9 17h6" />
          </svg>
        )}
        {category === 'wood' && (
          <svg className="w-16 h-16 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="8" ry="6" />
            <path d="M4 12h16" />
          </svg>
        )}
        <span className="mt-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">{category.replace('-', ' ')}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={`object-contain transition-transform duration-300 hover:scale-105 ${className}`}
    />
  );
};
