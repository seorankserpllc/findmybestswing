import React from 'react';
import { PRODUCTS } from '../../data/products';
import { formatPriceTierLabel } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { AmazonAvailabilityButton } from '../Common/AmazonAvailabilityButton';
import { ScorecardBadge } from '../Common/ScorecardBadge';
import { Sparkles, ArrowRight, ShieldCheck, Flag, CheckCircle2, Zap, Layers } from 'lucide-react';
import { InternalLink } from '../Common/InternalLink';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* Hero Section: Crisp Golf Course Atmosphere */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#08301f] via-[#062015] to-[#04150e] border-b border-fairway-800/60 golf-dimple-pattern">
        
        {/* Subtle decorative glowing golf green orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fairway-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fairway-950/90 border border-fairway-500/40 text-fairway-300 text-xs font-bold tracking-wide shadow-md">
            <span className="w-2 h-2 rounded-full bg-fairway-400 animate-pulse"></span>
            <span>Simple, Smart Golf Gear Matcher</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Find the Right Clubs & Balls<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fairway-300 via-emerald-300 to-amber-300">
              For Your Exact Swing.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
            Stop guessing what to buy. Answer 4 quick questions about how far you hit it and your height. Our engine matches golf gear to your swing, height, needs, and budget.
          </p>

          {/* Primary Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <InternalLink
              href={'/wizard'} onNavigate={onNavigate}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 py-4 px-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-base transition-all shadow-xl shadow-emerald-950/70 hover:scale-105 active:scale-95 group"
            >
              <span className="text-white">Take the 30-Second Club Quiz</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </InternalLink>

            <InternalLink
              href={'/catalog'} onNavigate={onNavigate}
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-7 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-fairway-800/80 text-white font-bold text-sm transition-colors"
            >
              <span>See Tested Clubs</span>
            </InternalLink>
          </div>

          {/* 3 Quick Badges */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs text-fairway-200/80 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-fairway-400" />
              <span>Fit-First Buying Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-fairway-400" />
              <span>Slices & Tall Golfer Fixes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-fairway-400" />
              <span>Speed-Matched Golf Balls</span>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works: 3 Simple Steps (6th Grade Clarity) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-fairway-400 font-bold">HOW OUR ENGINE WORKS</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Smart Matching Made Simple
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            You don't need a degree in physics to get the right clubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0a2318] border border-fairway-800/60 rounded-3xl p-6 sm:p-7 space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md">
              1
            </div>
            <h3 className="text-lg font-bold text-white">Tell Us Your Swing</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Tell us how far your drives go, what your bad shots look like (like a slice), and how tall you are.
            </p>
          </div>

          <div className="bg-[#0a2318] border border-fairway-800/60 rounded-3xl p-6 sm:p-7 space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md">
              2
            </div>
            <h3 className="text-lg font-bold text-white">We Do the Math</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our engine figures out how much your shaft should flex, what club angle fits your height, and what golf ball core you can compress.
            </p>
          </div>

          <div className="bg-[#0a2318] border border-fairway-800/60 rounded-3xl p-6 sm:p-7 space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md">
              3
            </div>
            <h3 className="text-lg font-bold text-white">Pick Your Match</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Choose an easy all-in-one starter box, or assemble your own bag with the exact driver, irons, and balls that fit you.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Equipment Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-fairway-800/50 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-fairway-400 font-bold">FIT-FIRST REVIEWS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
              Popular Gear Picks
            </h2>
            <p className="text-xs text-slate-400">Honest buying guidance, with purchase links shown only after listing verification.</p>
          </div>

          <InternalLink
            href={'/catalog'} onNavigate={onNavigate}
            className="text-xs font-bold text-fairway-400 hover:text-fairway-300 flex items-center gap-1"
          >
            <span>See All 12 Products</span>
            <ArrowRight className="w-4 h-4" />
          </InternalLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 3).map((prod) => (
            <div
              key={prod.id}
              className="bg-[#0a2318] border border-fairway-800/70 rounded-3xl p-5 flex flex-col justify-between hover:border-fairway-500 transition-all shadow-xl group"
            >
              <div>
                <div className="w-full h-44 bg-slate-950 rounded-2xl p-4 flex items-center justify-center border border-fairway-900 mb-4">
                  <ProductImage
                    src={prod.mediaCdnUrl}
                    alt={prod.model}
                    category={prod.fallbackIcon}
                    className="w-full h-full max-h-36"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-extrabold text-fairway-400 uppercase tracking-wider">{prod.brand}</span>
                    <span className="font-mono text-amber-300 text-[11px] font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/40">
                      {formatPriceTierLabel(prod.priceTier)}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-fairway-300 transition-colors line-clamp-1">
                    {prod.model}
                  </h3>
                  <ScorecardBadge scorecard={prod.scorecard} compact />
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                    {prod.summary}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-fairway-900 flex items-center gap-2">
                <AmazonAvailabilityButton
                  listing={prod}
                  label="Check Price on Amazon"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md"
                  unavailableClassName="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800/80 text-white font-bold text-xs transition-colors "
                  iconClassName="w-3.5 h-3.5 text-white"
                />
                <InternalLink
                  href={`/products/${prod.slug}`} onNavigate={onNavigate}
                  className="inline-flex items-center justify-center px-3 py-2.5 rounded-xl border border-fairway-800 hover:bg-fairway-900/60 text-xs font-semibold text-slate-300"
                >
                  Details
                </InternalLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Build vs. Buy Callout (Plain English) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0d2f21] to-[#0a2318] border border-fairway-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">ALL-IN-ONE VS. CUSTOM BAG</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Should You Buy an All-In-One Box, or Build Your Own Bag?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              If you are just starting out, an all-in-one box set (like Callaway Strata) saves you hundreds of dollars. But if you want clubs tailored to your exact height and swing speed, our custom blueprints show you how to assemble a bag piece by piece.
            </p>
            <div className="pt-2">
              <InternalLink
                href={'/blueprints'} onNavigate={onNavigate}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition-all shadow-lg"
              >
                <span>Compare Build vs. Buy</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </InternalLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full md:w-auto shrink-0 text-center">
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-fairway-800">
              <div className="text-base font-bold text-fairway-400">All-In-One Box</div>
              <div className="text-xs text-slate-300 mt-1">Ready to play</div>
              <div className="text-[11px] text-slate-500 mt-1">Under $600</div>
            </div>
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-amber-800/40">
              <div className="text-base font-bold text-amber-300">Custom Bag</div>
              <div className="text-xs text-slate-300 mt-1">Exact fit for you</div>
              <div className="text-[11px] text-slate-500 mt-1">Maximum distance</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
