import React from 'react';
import { ShieldCheck, Compass, Layers, BookOpen } from 'lucide-react';
import { BrandLogo } from '../Common/BrandLogo';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full max-w-full overflow-x-clip bg-[#04150e] border-t border-fairway-900 text-slate-400 text-xs">
      
      {/* Top Amazon Associates Disclosure Strip */}
      <div className="border-b border-fairway-950 bg-[#061d13] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-slate-300 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-fairway-400 shrink-0" />
            <span>
              <strong className="text-white font-semibold">Amazon Affiliate Notice: </strong> 
              "As an Amazon Associate I earn from qualifying purchases." Amazon links are shown only after listing verification; price and availability can change.
            </span>
          </div>
          <button
            onClick={() => onNavigate('#/legal/disclosure')}
            className="text-fairway-400 hover:text-fairway-300 font-semibold underline shrink-0 text-[11px]"
          >
            Read Affiliate Disclosure
          </button>
        </div>
      </div>

      {/* 4-Column Directory */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Platform Mission */}
          <div className="min-w-0 space-y-2.5">
            <BrandLogo size="sm" showTagline={false} className="max-w-full" />
            <p className="text-xs text-slate-400 leading-relaxed">
              We help recreational golfers find clubs and balls that match their swing, height, and miss without complicated technical jargon.
            </p>
            <div className="pt-2 text-[11px] text-slate-400">
              Operated by: <strong className="text-slate-300">SEO RANK SERP LLC</strong><br/>
              8 The Green, Suite B, Dover, DE 19901
            </div>
          </div>

          {/* Col 2: Top Evaluated Equipment */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-fairway-400" />
              <span>Tested Clubs</span>
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('#/product/callaway-strata-12-piece')} className="hover:text-fairway-400 transition-colors">
                  Callaway Strata 12-Piece Set
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/product/wilson-profile-platinum')} className="hover:text-fairway-400 transition-colors">
                  Wilson Profile SGI (Tall Option)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/product/taylormade-stealth-2-driver')} className="hover:text-fairway-400 transition-colors">
                  TaylorMade Stealth 2 Driver
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/product/callaway-rogue-st-max-os-irons')} className="hover:text-fairway-400 transition-colors">
                  Callaway Rogue ST Max OS Irons
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/product/callaway-supersoft-golf-balls')} className="hover:text-fairway-400 transition-colors">
                  Callaway Supersoft Golf Balls
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Blueprints */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Custom Setups</span>
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('#/blueprint/95-mph-speed-matched-bag')} className="hover:text-amber-400 transition-colors">
                  The 95 MPH Speed Bag
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/blueprint/tall-golfer-upright-rig')} className="hover:text-amber-400 transition-colors">
                  The Tall Golfer (6'2"+) Bag
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/blueprint/20-handicap-forgiveness-fortress')} className="hover:text-amber-400 transition-colors">
                  The 20+ Handicap Forgiving Bag
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/wizard')} className="hover:text-fairway-400 font-bold text-fairway-300">
                  Take the Club Quiz →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Guides & Legal */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-fairway-400" />
              <span>Helpful Articles</span>
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onNavigate('#/guide/driver-shaft-flex-swing-speed-matrix')} className="hover:text-fairway-400 transition-colors">
                  Driver Shaft Flex Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/guide/golf-ball-compression-chart-velocity-guide')} className="hover:text-fairway-400 transition-colors">
                  Soft vs. Tour Golf Balls
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('#/guide/tall-golfer-club-fitting-guide')} className="hover:text-fairway-400 transition-colors">
                  Tall Golfer Fitting Tips
                </button>
              </li>
              <li className="pt-2 border-t border-fairway-900/60 flex flex-wrap gap-2 text-[11px]">
                <button onClick={() => onNavigate('#/legal/disclosure')} className="hover:text-white">Disclosure</button>
                <span>•</span>
                <button onClick={() => onNavigate('#/legal/privacy')} className="hover:text-white">Privacy</button>
                <span>•</span>
                <button onClick={() => onNavigate('#/legal/terms')} className="hover:text-white">Terms</button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 mt-6 border-t border-fairway-900/60 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} FindMyBestSwing • SEO RANK SERP LLC. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
};
