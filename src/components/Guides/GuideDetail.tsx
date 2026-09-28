import React from 'react';
import { EditorialGuide } from '../../types/domain';
import { getProductBySlug } from '../../data/products';
import { getAmazonUrl } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { ArrowLeft, Clock, Calendar, User, CheckCircle, AlertCircle, Info, ExternalLink } from 'lucide-react';

interface GuideDetailProps {
  guide: EditorialGuide;
  onBack: () => void;
  onNavigate: (route: string) => void;
}

export const GuideDetail: React.FC<GuideDetailProps> = ({ guide, onBack, onNavigate }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-10">
      
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </button>
      </div>

      {/* Guide Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            {guide.readingTimeMinutes} min read
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {guide.publishedDate}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {guide.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">
          {guide.subtitle}
        </p>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800 text-xs">
          <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 font-bold">
            <User className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-white text-sm">{guide.authorName}</div>
            <div className="text-slate-400">{guide.authorTitle}</div>
          </div>
        </div>
      </header>

      {/* Key Takeaways Box */}
      <div className="bg-emerald-950/30 border border-emerald-700/40 rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          <span>Key Engineering Takeaways</span>
        </h2>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
          {guide.keyTakeaways.map((takeaway, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">•</span>
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Body Content Sections */}
      <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
        {guide.contentSections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {sec.heading}
            </h2>
            {sec.body.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {p}
              </p>
            ))}

            {/* Optional Callout */}
            {sec.callout && (
              <div className={`p-5 rounded-2xl border text-xs sm:text-sm my-4 flex items-start gap-3 ${
                sec.callout.type === 'warning'
                  ? 'bg-amber-950/30 border-amber-700/50 text-amber-200'
                  : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}>
                {sec.callout.type === 'warning' ? (
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                ) : (
                  <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block font-bold mb-1 text-white">{sec.callout.title}</strong>
                  <span>{sec.callout.message}</span>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Cross-Linked Tested Equipment */}
      {guide.relatedProducts.length > 0 && (
        <div className="pt-8 border-t border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">
            Tested Equipment Mentioned in This Analysis
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {guide.relatedProducts.map((slug) => {
              const prod = getProductBySlug(slug);
              if (!prod) return null;

              return (
                <div key={prod.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-slate-950 rounded-xl p-1 flex items-center justify-center border border-slate-800 shrink-0">
                      <ProductImage
                        src={prod.mediaCdnUrl}
                        alt={prod.model}
                        category={prod.fallbackIcon}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-emerald-400 block">{prod.brand}</span>
                      <h4 className="text-xs font-bold text-white line-clamp-1">{prod.model}</h4>
                    </div>
                  </div>

                  <a
                    href={getAmazonUrl(prod.asin)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                  >
                    <span>Check Price</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </article>
  );
};
