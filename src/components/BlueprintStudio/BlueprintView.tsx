import React, { useState } from 'react';
import { BLUEPRINTS } from '../../data/blueprints';
import { getProductBySlug } from '../../data/products';
import { formatPriceTierLabel } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { AmazonAvailabilityButton } from '../Common/AmazonAvailabilityButton';
import { Layers, Wrench, CheckCircle } from 'lucide-react';
import { InternalLink } from '../Common/InternalLink';

interface BlueprintViewProps {
  initialSlug?: string;
  onNavigate: (route: string) => void;
}

export const BlueprintView: React.FC<BlueprintViewProps> = ({ initialSlug, onNavigate }) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    initialSlug || '95-mph-speed-matched-bag'
  );

  const activeBlueprint = BLUEPRINTS.find((b) => b.slug === selectedSlug) || BLUEPRINTS[0];

  return (
    <div className="w-full min-w-0 max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 text-xs font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>CUSTOM BAG BLUEPRINTS</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Build Your Own <span className="text-amber-300">Custom Bag</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Want clubs picked piece by piece? Here are 3 proven setups designed for specific swing types.
        </p>

        {/* Blueprint Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-3">
          {BLUEPRINTS.map((bp) => (
            <button
              key={bp.id}
              onClick={() => setSelectedSlug(bp.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                bp.slug === selectedSlug
                  ? 'bg-emerald-600 text-white font-black shadow-md shadow-emerald-950/60'
                  : 'bg-[#0a2318] border border-fairway-800 text-slate-300 hover:text-white hover:bg-fairway-900'
              }`}
            >
              {bp.title.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Blueprint Sheet */}
      <div className="bg-[#0a2318] border border-fairway-800/80 rounded-3xl p-6 sm:p-9 shadow-2xl space-y-7">
        
        {/* Header summary */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-fairway-900">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-700/40">
              {activeBlueprint.difficulty}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {activeBlueprint.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeBlueprint.overview}
            </p>
          </div>

          <div className="bg-slate-950 rounded-2xl p-4 border border-fairway-900 space-y-2 shrink-0 w-full md:w-60 text-xs">
            <div className="text-slate-400 uppercase font-mono text-[10px]">Estimated Price Tier:</div>
            <div className="text-base font-extrabold text-amber-300">{formatPriceTierLabel(activeBlueprint.estimatedBOMTier)}</div>
            <div className="text-slate-300 pt-1 border-t border-fairway-900">
              Best Distance: <strong className="text-white">{activeBlueprint.swingSpeedTarget}</strong>
            </div>
            <div className="text-slate-300">
              Best Height: <strong className="text-white">{activeBlueprint.heightTarget}</strong>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-fairway-400 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4" />
            <span>Why This Setup Works So Well</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeBlueprint.keyEngineeringBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded-2xl bg-slate-950/60 border border-fairway-900 text-xs text-slate-200">
                <span className="text-fairway-400 font-bold">•</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Parts List */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
            <h3 className="min-w-0 text-sm font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-amber-400" />
              <span>Recommended Equipment List</span>
            </h3>
            <span className="text-[11px] text-slate-400">Links shown after verification</span>
          </div>

          <div className="space-y-2.5">
            {activeBlueprint.bom.map((item, idx) => {
              const product = getProductBySlug(item.productSlug);
              if (!product) return null;

              return (
                <div
                  key={idx}
                  className="bg-slate-950/80 border border-fairway-900 rounded-2xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl p-1 flex items-center justify-center border border-fairway-900 shrink-0">
                      <ProductImage
                        src={product.mediaCdnUrl}
                        alt={product.model}
                        category={product.fallbackIcon}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase font-bold text-amber-300">{item.role}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-white break-words">{product.brand} {product.model}</h4>
                      <p className="text-xs text-fairway-300 font-medium">{item.customSpecNote}</p>
                    </div>
                  </div>

                  <div className="flex w-full min-[380px]:w-auto flex-col min-[380px]:flex-row items-stretch min-[380px]:items-center gap-2 self-stretch sm:self-center">
                    <InternalLink
                      href={`/products/${product.slug}`} onNavigate={onNavigate}
                      className="inline-flex items-center justify-center w-full min-[380px]:w-auto px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white border border-fairway-800"
                    >
                      Review
                    </InternalLink>
                    <AmazonAvailabilityButton
                  listing={product}
                  label="Check Price"
                  className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
                  iconClassName="w-3 h-3 text-white"
                />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pro Fitting Note */}
        <div className="p-4 rounded-2xl bg-fairway-950/80 border border-fairway-700/60 text-xs text-fairway-200 leading-relaxed">
          <strong className="text-fairway-300 font-bold block mb-1">PRO FITTING TIP:</strong>
          {activeBlueprint.proFittingNotes}
        </div>

      </div>

    </div>
  );
};
