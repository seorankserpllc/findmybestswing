import React from 'react';
import { Scorecard } from '../../types/domain';

interface ScorecardBadgeProps {
  scorecard: Scorecard;
  compact?: boolean;
}

export const ScorecardBadge: React.FC<ScorecardBadgeProps> = ({ scorecard, compact = false }) => {
  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 font-bold text-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Lab Score: {scorecard.overallRating.toFixed(1)}/10</span>
      </div>
    );
  }

  const items = [
    { label: 'Forgiveness & MOI', score: scorecard.forgiveness },
    { label: 'Ball Speed & Distance', score: scorecard.ballSpeedDistance },
    { label: 'Feel & Acoustic Feedback', score: scorecard.feelAcoustics },
    { label: 'Dispersion Control', score: scorecard.dispersionControl },
    { label: 'Build Quality & Value', score: scorecard.buildValue },
  ];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">TrackMan™ Laboratory Verified</span>
          <h3 className="text-lg font-bold text-white">5-Factor Engineering Scorecard</h3>
        </div>
        <div className="text-right">
          <div className="text-3xl font-extrabold text-emerald-400 font-mono">{scorecard.overallRating.toFixed(1)}</div>
          <div className="text-xs text-slate-400">OUT OF 10.0</div>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium">{item.label}</span>
              <span className="font-bold text-emerald-400">{item.score.toFixed(1)}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${(item.score / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
