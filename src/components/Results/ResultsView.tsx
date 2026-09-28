import React from 'react';
import { QuizState } from '../../types/domain';
import { calculateBiomechanics } from '../../utils/physicsCalculator';
import { matchGolfGear } from '../../utils/matchingEngine';
import { formatPriceTierLabel } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { AmazonAvailabilityButton } from '../Common/AmazonAvailabilityButton';
import { ScorecardBadge } from '../Common/ScorecardBadge';
import { CheckCircle, Sparkles, RefreshCw, Cpu, Layers } from 'lucide-react';

interface ResultsViewProps {
  quiz: QuizState;
  onRestart: () => void;
  onNavigate: (route: string) => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ quiz, onRestart, onNavigate }) => {
  const biomechanics = calculateBiomechanics(quiz);
  const matched = matchGolfGear(quiz, biomechanics);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-12">
      
      {/* Top Banner: Your Personalized Recommendation */}
      <div className="bg-gradient-to-br from-[#0c2f1f] via-[#092418] to-[#061c12] border border-fairway-700/60 rounded-3xl p-6 sm:p-9 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-fairway-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fairway-950 border border-fairway-500/50 text-fairway-300 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>YOUR CUSTOM GOLF RECOMMENDATION</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Here Is What Our Engine <span className="text-fairway-400">Found for You!</span>
            </h1>
            <p className="mt-2 text-sm text-slate-200 max-w-2xl leading-relaxed">
              {biomechanics.analysisSummary}
            </p>
          </div>

          <button
            onClick={onRestart}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950/80 hover:bg-slate-900 border border-fairway-800 text-slate-300 hover:text-white text-xs font-semibold self-start md:self-auto transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retake Quiz</span>
          </button>
        </div>

        {/* 4 Simple Spec Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="bg-slate-950/70 border border-fairway-900 rounded-2xl p-4">
            <span className="text-[10px] uppercase font-mono text-fairway-400 font-bold block">Shaft Flexibility</span>
            <span className="text-base font-extrabold text-white mt-1 block">{biomechanics.recommendedShaftFlex.split('(')[0]}</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Flexes right for your swing speed</span>
          </div>

          <div className="bg-slate-950/70 border border-fairway-900 rounded-2xl p-4">
            <span className="text-[10px] uppercase font-mono text-fairway-400 font-bold block">Club Length</span>
            <span className="text-base font-extrabold text-white mt-1 block">{biomechanics.shaftLengthAdjustment.split('(')[0]}</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Fits your height so you stand tall</span>
          </div>

          <div className="bg-slate-950/70 border border-fairway-900 rounded-2xl p-4">
            <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">Best Golf Ball</span>
            <span className="text-base font-extrabold text-white mt-1 block">{biomechanics.targetBallCompression.split('(')[0]}</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Easy to squish for straight drives</span>
          </div>

          <div className="bg-slate-950/70 border border-fairway-900 rounded-2xl p-4">
            <span className="text-[10px] uppercase font-mono text-fairway-400 font-bold block">Iron Style</span>
            <span className="text-base font-extrabold text-white mt-1 block">{biomechanics.primaryHeadStyle.split('(')[0]}</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Wide bottom slides across turf</span>
          </div>
        </div>
      </div>

      {/* The Build vs. Buy Side-by-Side Choice */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-fairway-400 font-bold">PICK YOUR APPROACH</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Which Option Do You Prefer?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            You can either buy everything together in one box, or pick custom individual clubs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* OPTION A: EASY ALL-IN-ONE BOX */}
          <div className="bg-[#0a2318] border-2 border-fairway-600/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
              Option A: Easy All-In-One Box Set
            </div>

            <div>
              <div className="flex flex-col sm:flex-row gap-5 mt-3">
                <div className="w-full sm:w-40 h-40 bg-slate-950 rounded-2xl p-3 flex items-center justify-center border border-fairway-900 shrink-0">
                  <ProductImage
                    src={matched.turnkeyProduct.mediaCdnUrl}
                    alt={matched.turnkeyProduct.model}
                    category={matched.turnkeyProduct.fallbackIcon}
                    className="w-full h-full"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-fairway-400">{matched.turnkeyProduct.brand}</span>
                  <h3 className="text-xl font-bold text-white leading-snug">{matched.turnkeyProduct.model}</h3>
                  <ScorecardBadge scorecard={matched.turnkeyProduct.scorecard} compact />
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{matched.turnkeyPitch}</p>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                      Price: {formatPriceTierLabel(matched.turnkeyProduct.priceTier)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Pros list */}
              <div className="mt-6 pt-4 border-t border-fairway-900/80 space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block">Why it’s great for you:</span>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  {matched.turnkeyProduct.pros.slice(0, 3).map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-fairway-400 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-4 border-t border-fairway-900 flex flex-col sm:flex-row items-center gap-3">
              <AmazonAvailabilityButton
                  listing={matched.turnkeyProduct}
                  label="Check Price on Amazon"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm transition-all shadow-lg shadow-emerald-950/70"
                  unavailableClassName="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-slate-800/80 text-white font-black text-sm transition-all "
                  iconClassName="w-4 h-4 text-white"
                />
              <button
                onClick={() => onNavigate(`#/product/${matched.turnkeyProduct.slug}`)}
                className="w-full sm:w-auto px-4 py-3 rounded-full border border-fairway-800 hover:bg-fairway-900 text-slate-300 text-xs font-semibold"
              >
                Read Review
              </button>
            </div>
          </div>

          {/* OPTION B: CUSTOM BUILD YOUR OWN BAG */}
          <div className="bg-[#0a2318] border-2 border-amber-600/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-amber-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
              Option B: Custom "Build Your Own" Bag
            </div>

            <div className="space-y-4 mt-3">
              <div>
                <h3 className="text-xl font-bold text-white">Custom Matched Components</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{matched.modularPitch}</p>
                <div className="mt-2">
                  <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800/40">
                    Estimated Total: $$$$ (Higher performance, bought piece by piece)
                  </span>
                </div>
              </div>

              {/* Sourced Items list */}
              <div className="space-y-2.5 pt-2">
                {[
                  { role: 'Driver', prod: matched.modularDriver },
                  { role: 'Irons', prod: matched.modularIrons },
                  { role: 'Putter', prod: matched.modularPutter },
                  { role: 'Wedge', prod: matched.modularWedge },
                  { role: 'Matched Balls', prod: matched.modularBall },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-fairway-900">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center p-1 border border-fairway-900">
                        <ProductImage
                          src={item.prod.mediaCdnUrl}
                          alt={item.prod.model}
                          category={item.prod.fallbackIcon}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block">{item.role}</span>
                        <span className="text-xs font-bold text-white block">{item.prod.brand} {item.prod.model}</span>
                      </div>
                    </div>

                    <AmazonAvailabilityButton
                  listing={item.prod}
                  label="Check Price"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-fairway-950 border border-fairway-800 text-fairway-300 text-xs font-bold hover:bg-fairway-900"
                  unavailableClassName="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-fairway-950 border border-fairway-800 text-fairway-300 text-xs font-bold "
                  iconClassName="w-3 h-3 text-fairway-400"
                />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-fairway-900 flex items-center justify-between">
              <span className="text-xs text-slate-400">Want to see full specs and distances?</span>
              <button
                onClick={() => onNavigate('#/blueprints')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                View Full Blueprint →
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Useful Companion Gear */}
      <div className="bg-[#0a2318] border border-fairway-800/80 rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-fairway-400 font-bold">HELPFUL ACCESSORIES</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Useful Gear for Your Bag</h3>
          <p className="text-xs text-slate-400">Practical items that make playing golf easier and keep your clubs clean.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {matched.companionGear.map((item, idx) => (
            <div key={idx} className="bg-slate-950/80 border border-fairway-900 rounded-2xl p-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-fairway-400 uppercase font-bold">{formatPriceTierLabel(item.priceTier)}</span>
                <h4 className="text-sm font-bold text-white mt-1">{item.name}</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-fairway-900">
                <AmazonAvailabilityButton
                  listing={item}
                  label="Check Price on Amazon"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-fairway-950 border border-fairway-800 hover:bg-fairway-900 text-fairway-300 text-xs font-bold"
                  unavailableClassName="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-fairway-950 border border-fairway-800 text-fairway-300 text-xs font-bold"
                  iconClassName="w-3.5 h-3.5 text-fairway-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
