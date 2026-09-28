import React, { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import { formatPriceTierLabel } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { AmazonAvailabilityButton } from '../Common/AmazonAvailabilityButton';
import { ScorecardBadge } from '../Common/ScorecardBadge';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { InternalLink } from '../Common/InternalLink';

interface CatalogViewProps {
  initialCategory?: string;
  onNavigate: (route: string) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ initialCategory = 'all', onNavigate }) => {
  const [selectedCat, setSelectedCat] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'complete-set', label: 'Complete Sets' },
    { id: 'driver', label: 'Drivers' },
    { id: 'irons', label: 'Irons' },
    { id: 'putter', label: 'Putters' },
    { id: 'wedge', label: 'Wedges' },
    { id: 'golf-ball', label: 'Golf Balls' },
  ];

  const filtered = PRODUCTS.filter((p) => {
    const matchesCat = selectedCat === 'all' || p.category === selectedCat;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      
      {/* Title & Search bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-fairway-400 font-bold">VERIFIED REVIEWS</span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-0.5">
            Golf Club & Ball <span className="text-fairway-400">Directory</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Browse golf gear by category, price, and skill level. Purchase links appear only when the current listing has been verified.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by brand or club..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-950 border border-fairway-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-fairway-500 transition-colors"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-fairway-500 shrink-0 mr-1" />
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCat(c.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCat === c.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/60'
                : 'bg-[#0a2318] border border-fairway-900 text-slate-300 hover:text-white hover:border-fairway-700'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((prod) => (
          <div
            key={prod.id}
            className="bg-[#0a2318] border border-fairway-800/80 rounded-3xl p-5 flex flex-col justify-between hover:border-fairway-500 transition-all shadow-xl group"
          >
            <div>
              {/* Image */}
              <div className="relative w-full h-48 bg-slate-950 rounded-2xl p-4 flex items-center justify-center border border-fairway-900 mb-4 overflow-hidden">
                {prod.badge && (
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-mono font-bold uppercase tracking-wider bg-fairway-950 border border-fairway-500/60 text-fairway-300 px-2.5 py-0.5 rounded-full shadow-md">
                    {prod.badge}
                  </span>
                )}
                <ProductImage
                  src={prod.mediaCdnUrl}
                  alt={prod.model}
                  category={prod.fallbackIcon}
                  className="w-full h-full max-h-40"
                />
              </div>

              {/* Title & Metadata */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-fairway-400 uppercase tracking-wider">{prod.brand}</span>
                  <span className="font-mono text-amber-300 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/40 text-[11px]">
                    {formatPriceTierLabel(prod.priceTier)}
                  </span>
                </div>

                <h2 className="text-base font-bold text-white group-hover:text-fairway-300 transition-colors line-clamp-1">
                  {prod.model}
                </h2>

                <ScorecardBadge scorecard={prod.scorecard} compact />

                <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                  {prod.summary}
                </p>

                <div className="pt-2 text-[11px] text-slate-400 font-medium">
                  <span className="text-fairway-400 font-semibold">Best for: </span>
                  {prod.bestFor}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-5 pt-4 border-t border-fairway-900 flex items-center gap-2">
              <AmazonAvailabilityButton
                  listing={prod}
                  label="Check Price on Amazon"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md"
                  unavailableClassName="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-slate-800/80 text-white font-bold text-xs transition-colors "
                  iconClassName="w-3.5 h-3.5 text-white"
                />

              <InternalLink
                href={`/products/${prod.slug}`} onNavigate={onNavigate}
                className="inline-flex items-center justify-center p-2.5 rounded-full border border-fairway-800 hover:bg-fairway-900 text-slate-300 hover:text-white transition-colors"
                title="Read Details"
              >
                <ArrowRight className="w-4 h-4" />
              </InternalLink>
            </div>

          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-[#0a2318] border border-fairway-800 rounded-3xl p-8 space-y-3">
          <p className="text-sm text-slate-300">No golf gear matches "{searchQuery}".</p>
          <button
            onClick={() => { setSelectedCat('all'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md"
          >
            Show All Items
          </button>
        </div>
      )}

    </div>
  );
};
