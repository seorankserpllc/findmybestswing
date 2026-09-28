import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  compactOnMobile?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  compactOnMobile = false,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex min-w-0 items-center gap-3 select-none ${className}`}>
      {/* Unique FindMyBestSwing Icon */}
      <div className={`${compactOnMobile ? 'hidden min-[390px]:flex' : 'flex'} ${iconSizes[size]} shrink-0 rounded-2xl bg-gradient-to-b from-[#093520] to-[#03150c] p-1.5 border border-emerald-600/40 shadow-lg shadow-black/40 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform`}>
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="logoSwingArc" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#16a34a"/>
              <stop offset="60%" stopColor="#22c55e"/>
              <stop offset="100%" stopColor="#f59e0b"/>
            </linearGradient>
            <radialGradient id="logoBallGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="70%" stopColor="#f1f5f9"/>
              <stop offset="100%" stopColor="#cbd5e1"/>
            </radialGradient>
          </defs>
          {/* Subtle Speed Arc Trail */}
          <path d="M 12 44 C 11 26 24 13 42 12" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 4" opacity="0.45"/>
          {/* Dynamic Best-Swing Trajectory Arc */}
          <path d="M 14 47 C 12 30 25 15 45 15 C 51 15 54 18 53 22 C 51 29 39 36 29 42 C 22 46 17 50 15 52" 
                stroke="url(#logoSwingArc)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Golf Ball sitting in Impact Zone */}
          <circle cx="36" cy="27" r="10" fill="url(#logoBallGrad)" stroke="#e2e8f0" strokeWidth="1"/>
          {/* Dimple Accents */}
          <circle cx="33" cy="24" r="1" fill="#94a3b8" opacity="0.6"/>
          <circle cx="37" cy="23" r="1" fill="#94a3b8" opacity="0.6"/>
          <circle cx="35" cy="27" r="1.1" fill="#94a3b8" opacity="0.7"/>
          <circle cx="39" cy="27" r="1" fill="#94a3b8" opacity="0.6"/>
          <circle cx="33" cy="30" r="1" fill="#94a3b8" opacity="0.6"/>
          <circle cx="37" cy="31" r="1" fill="#94a3b8" opacity="0.6"/>
          {/* Sweet Spot Golden Apex Spark */}
          <path d="M 49 14 L 51 19 L 56 19 L 52 22 L 54 27 L 49 24 L 44 27 L 46 22 L 42 19 L 47 19 Z" 
                fill="#f59e0b" transform="scale(0.5) translate(46, 8)"/>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="min-w-0">
        <div className={`${textSizes[size]} whitespace-nowrap font-extrabold tracking-tight text-white flex items-center gap-1.5 font-sans leading-none`}>
          <span>FindMyBest</span>
          <span className="text-emerald-400">Swing</span>
          {size !== 'sm' && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-600/50 text-emerald-300 font-bold uppercase tracking-wider ml-1">
              SMART MATCH
            </span>
          )}
        </div>
        {showTagline && size !== 'sm' && (
          <p className="text-xs text-fairway-200/70 font-medium mt-1">
            mybestswing.com • Smart Golf Gear Matcher
          </p>
        )}
      </div>
    </div>
  );
};
