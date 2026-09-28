import React from 'react';
import { ProductCategory, Scorecard } from '../../types/domain';

interface ScorecardBadgeProps {
  scorecard: Scorecard;
  category?: ProductCategory;
  compact?: boolean;
}

const getScoreLabels = (category?: ProductCategory) => {
  if (category === 'putter') {
    return [
      'Stability & Forgiveness',
      'Pace Control',
      'Feel & Feedback',
      'Start-Line Control',
      'Build Quality & Value',
    ];
  }

  if (category === 'wedge') {
    return [
      'Full-Swing Forgiveness',
      'Distance Control',
      'Feel & Feedback',
      'Spin & Trajectory Control',
      'Build Quality & Value',
    ];
  }

  if (category === 'golf-ball') {
    return [
      'Off-Center Forgiveness',
      'Long-Game Distance',
      'Feel',
      'Flight & Spin Control',
      'Durability & Value',
    ];
  }

  return [
    'Forgiveness & Stability',
    'Ball Speed & Distance',
    'Feel & Feedback',
    'Dispersion Control',
    'Build Quality & Value',
  ];
};

export const ScorecardBadge: React.FC<ScorecardBadgeProps> = ({
  scorecard,
  category,
  compact = false,
}) => {
  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 font-bold text-xs">
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>Editorial Fit Score: {scorecard.overallRating.toFixed(1)}/10</span>
      </div>
    );
  }

  const labels = getScoreLabels(category);
  const items = [
    { label: labels[0], score: scorecard.forgiveness },
    { label: labels[1], score: scorecard.ballSpeedDistance },
    { label: labels[2], score: scorecard.feelAcoustics },
    { label: labels[3], score: scorecard.dispersionControl },
    { label: labels[4], score: scorecard.buildValue },
  ];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
            Editorial assessment — not hands-on testing
          </span>
          <h3 className="text-lg font-bold text-white">5-Factor Product Fit Score</h3>
        </div>
        <div className="text-right shrink-0">
          <div className="text-3xl font-extrabold text-emerald-400 font-mono">
            {scorecard.overallRating.toFixed(1)}
          </div>
          <div className="text-xs text-slate-400">OUT OF 10.0</div>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-slate-400 mb-4">
        Our score weighs verified manufacturer specifications, the exact listed variant,
        intended player profile, limitations, and value. It is not a laboratory result.
      </p>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs mb-1 gap-4">
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
