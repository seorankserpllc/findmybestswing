import React from 'react';
import { EDITORIAL_GUIDES } from '../../data/guides';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';

interface GuidesHubProps {
  onNavigate: (route: string) => void;
}

export const GuidesHub: React.FC<GuidesHubProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 space-y-10">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>EDITORIAL KNOWLEDGE BASE</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Technical Golf Fitting <span className="text-emerald-400">Guides</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Independent biomechanical ballistics research, launch monitor fitting matrices, and equipment diagnostics from our PGA engineering lab.
        </p>
      </div>

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDITORIAL_GUIDES.map((guide) => (
          <div
            key={guide.id}
            onClick={() => onNavigate(`#/guide/${guide.slug}`)}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-600/60 transition-all shadow-xl cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readingTimeMinutes} min read
                </span>
                <span>{guide.publishedDate}</span>
              </div>

              <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug">
                {guide.title}
              </h2>

              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                {guide.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400">
                  <User className="w-3.5 h-3.5" />
                </div>
                <span>{guide.authorName.split(',')[0]}</span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                Read Guide
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
