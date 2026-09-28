import React from 'react';
import { ShieldCheck, Compass, Layers, BookOpen } from 'lucide-react';
import { BrandLogo } from '../Common/BrandLogo';
import { InternalLink } from '../Common/InternalLink';

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
          <InternalLink
            href={'/legal/disclosure'} onNavigate={onNavigate}
            className="text-fairway-400 hover:text-fairway-300 font-semibold underline shrink-0 text-[11px]"
          >
            Read Affiliate Disclosure
          </InternalLink>
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
                <InternalLink href={'/products/callaway-strata-12-piece'} onNavigate={onNavigate} className="hover:text-fairway-400 transition-colors">
                  Callaway Strata 12-Piece Set
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/products/wilson-profile-platinum'} onNavigate={onNavigate} className="hover:text-fairway-400 transition-colors">
                  Wilson Profile SGI (Tall Option)
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/products/taylormade-stealth-2-driver'} onNavigate={onNavigate} className="hover:text-fairway-400 transition-colors">
                  TaylorMade Stealth 2 Driver
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/products/callaway-rogue-st-max-os-irons'} onNavigate={onNavigate} className="hover:text-fairway-400 transition-colors">
                  Callaway Rogue ST Max OS Irons
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/products/callaway-supersoft-golf-balls'} onNavigate={onNavigate} className="hover:text-fairway-400 transition-colors">
                  Callaway Supersoft Golf Balls
                </InternalLink>
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
                <InternalLink href={'/blueprints/95-mph-speed-matched-bag'} onNavigate={onNavigate} className="hover:text-amber-400 transition-colors">
                  The 95 MPH Speed Bag
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/blueprints/tall-golfer-upright-rig'} onNavigate={onNavigate} className="hover:text-amber-400 transition-colors">
                  The Tall Golfer (6'2"+) Bag
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/blueprints/20-handicap-forgiveness-fortress'} onNavigate={onNavigate} className="hover:text-amber-400 transition-colors">
                  The 20+ Handicap Forgiving Bag
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/wizard'} onNavigate={onNavigate} className="hover:text-fairway-400 font-bold text-fairway-300">
                  Take the Club Quiz →
                </InternalLink>
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
                <InternalLink href={'/guides/driver-shaft-flex-swing-speed-matrix'} onNavigate={onNavigate} className="hover:text-fairway-400 transition-colors">
                  Driver Shaft Flex Guide
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/guides/golf-ball-compression-chart-velocity-guide'} onNavigate={onNavigate} className="hover:text-fairway-400 transition-colors">
                  Soft vs. Tour Golf Balls
                </InternalLink>
              </li>
              <li>
                <InternalLink href={'/guides/tall-golfer-club-fitting-guide'} onNavigate={onNavigate} className="hover:text-fairway-400 transition-colors">
                  Tall Golfer Fitting Tips
                </InternalLink>
              </li>
              <li className="pt-2 border-t border-fairway-900/60 flex flex-wrap gap-2 text-[11px]">
                <InternalLink href={'/legal/disclosure'} onNavigate={onNavigate} className="hover:text-white">Disclosure</InternalLink>
                <span>•</span>
                <InternalLink href={'/legal/privacy'} onNavigate={onNavigate} className="hover:text-white">Privacy</InternalLink>
                <span>•</span>
                <InternalLink href={'/legal/terms'} onNavigate={onNavigate} className="hover:text-white">Terms</InternalLink>
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
