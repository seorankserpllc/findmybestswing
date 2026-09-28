import React, { useState } from 'react';
import { Sparkles, Menu, X, ChevronDown, Compass, Layers, BookOpen, MessageSquare } from 'lucide-react';
import { BrandLogo } from '../Common/BrandLogo';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [reviewsDropdownOpen, setReviewsDropdownOpen] = useState(false);

  const handleNav = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setReviewsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#072417]/95 backdrop-blur-md border-b border-fairway-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* FindMyBestSwing Brand Logo */}
          <div 
            onClick={() => handleNav('#/')} 
            className="cursor-pointer group"
          >
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            
            {/* Primary Action: Find My Clubs */}
            <button
              onClick={() => handleNav('#/wizard')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-extrabold transition-all shadow-md ${
                currentRoute === '#/wizard' || currentRoute.startsWith('#/results')
                  ? 'bg-emerald-600 text-white shadow-emerald-600/30 scale-105'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Find My Clubs</span>
            </button>

            {/* Club Reviews Dropdown */}
            <div className="relative">
              <button
                onClick={() => setReviewsDropdownOpen(!reviewsDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  currentRoute.startsWith('#/catalog') || currentRoute.startsWith('#/product')
                    ? 'text-fairway-300 bg-fairway-950/80 border border-fairway-800'
                    : 'text-slate-200 hover:text-white hover:bg-fairway-950/50'
                }`}
              >
                <Compass className="w-4 h-4 text-fairway-400" />
                <span>Reviews & Catalog</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {reviewsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-60 bg-slate-950 border border-fairway-800 rounded-2xl p-2 shadow-2xl z-50">
                  <button
                    onClick={() => handleNav('#/catalog')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-white hover:bg-fairway-900/70 hover:text-fairway-300"
                  >
                    All Tested Equipment
                  </button>
                  <div className="h-px bg-fairway-900/80 my-1"></div>
                  <button
                    onClick={() => handleNav('#/catalog?cat=complete-set')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-fairway-900/70 hover:text-fairway-300"
                  >
                    Complete Starter Sets
                  </button>
                  <button
                    onClick={() => handleNav('#/catalog?cat=driver')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-fairway-900/70 hover:text-fairway-300"
                  >
                    Drivers & Speed Shafts
                  </button>
                  <button
                    onClick={() => handleNav('#/catalog?cat=irons')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-fairway-900/70 hover:text-fairway-300"
                  >
                    Forgiving Iron Sets
                  </button>
                  <button
                    onClick={() => handleNav('#/catalog?cat=golf-ball')}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-fairway-900/70 hover:text-fairway-300"
                  >
                    Speed-Matched Golf Balls
                  </button>
                </div>
              )}
            </div>

            {/* Build vs Buy */}
            <button
              onClick={() => handleNav('#/blueprints')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                currentRoute.startsWith('#/blueprint')
                  ? 'text-amber-300 bg-fairway-950/80 border border-fairway-800'
                  : 'text-slate-200 hover:text-white hover:bg-fairway-950/50'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Build vs. Buy</span>
            </button>

            {/* Golf Guides */}
            <button
              onClick={() => handleNav('#/guides')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                currentRoute.startsWith('#/guide')
                  ? 'text-fairway-300 bg-fairway-950/80 border border-fairway-800'
                  : 'text-slate-200 hover:text-white hover:bg-fairway-950/50'
              }`}
            >
              <BookOpen className="w-4 h-4 text-fairway-400" />
              <span>Simple Guides</span>
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNav('#/contact')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                currentRoute === '#/contact'
                  ? 'text-fairway-300 bg-fairway-950/80 border border-fairway-800'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4 text-slate-400" />
              <span>Ask an Expert</span>
            </button>
          </nav>

          {/* Mobile Finder Button & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNav('#/wizard')}
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md"
            >
              Find My Clubs
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-fairway-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-fairway-800 px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => handleNav('#/wizard')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm"
          >
            <span>Start 30-Second Club Finder</span>
            <span>→</span>
          </button>
          <button
            onClick={() => handleNav('#/catalog')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-fairway-900"
          >
            Reviews & Equipment Catalog
          </button>
          <button
            onClick={() => handleNav('#/blueprints')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-fairway-900"
          >
            Build vs. Buy (Custom Bag Setups)
          </button>
          <button
            onClick={() => handleNav('#/guides')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-fairway-900"
          >
            Simple Golf Fitting Guides
          </button>
          <button
            onClick={() => handleNav('#/contact')}
            className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-fairway-900"
          >
            Ask a Fitting Question
          </button>
        </div>
      )}
    </header>
  );
};
