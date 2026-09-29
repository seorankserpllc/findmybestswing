import React, { useEffect } from 'react';
import { Product } from '../../types/domain';
import { formatPriceTierLabel, hasVerifiedAmazonListing } from '../../utils/amazonLinks';
import { ProductImage } from '../Common/ProductImage';
import { AmazonAvailabilityButton } from '../Common/AmazonAvailabilityButton';
import { ScorecardBadge } from '../Common/ScorecardBadge';
import { Check, AlertTriangle, ShieldCheck, ArrowLeft, Calendar, User, Wrench, HelpCircle } from 'lucide-react';

interface ProductReviewPageProps {
  product: Product;
  onBack: () => void;
  onNavigate: (route: string) => void;
}

export const ProductReviewPage: React.FC<ProductReviewPageProps> = ({ product, onBack, onNavigate }) => {

  // Dynamic Schema.org JSON-LD structured data injection
  useEffect(() => {
    const scriptId = 'product-json-ld';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const pageUrl = `https://mybestswing.com/products/${product.slug}`;
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "name": `${product.brand} ${product.model}`,
          "description": product.summary,
          "image": new URL(product.mediaCdnUrl, 'https://mybestswing.com').toString(),
          "url": pageUrl,
          "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
          "brand": {
            "@type": "Brand",
            "name": product.brand,
          },
          "category": product.category,
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://mybestswing.com/",
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Golf Gear Reviews",
              "item": "https://mybestswing.com/catalog",
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": `${product.brand} ${product.model}`,
              "item": pageUrl,
            },
          ],
        },
        {
          "@type": "FAQPage",
          "mainEntity": product.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        },
      ],
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [product]);

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-10">
      
      {/* Back button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-fairway-400 hover:text-fairway-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Products</span>
        </button>
      </div>

      {/* Strict Semantic H1: Must be the very first heading in DOM order */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-fairway-300 bg-fairway-950 px-2.5 py-0.5 rounded border border-fairway-700/60">
            {product.category.replace('-', ' ')}
          </span>
          {product.badge && (
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 bg-amber-950 px-2.5 py-0.5 rounded border border-amber-700/60">
              {product.badge}
            </span>
          )}
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            Tested {product.reviewDate}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {product.brand} {product.model} Review & Buying Guide
        </h1>

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
          {product.summary}
        </p>
      </header>

      {/* Hero Product Snapshot & CTA Box */}
      <div className="bg-[#0a2318] border border-fairway-800/80 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-2xl">
        <div className="bg-slate-950 rounded-2xl p-6 flex items-center justify-center border border-fairway-900 h-64">
          <ProductImage
            src={product.mediaCdnUrl}
            alt={product.model}
            category={product.fallbackIcon}
            className="w-full h-full max-h-52"
          />
        </div>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Estimated Price Range</span>
            <div className="text-xl font-extrabold text-amber-300 mt-0.5">
              {formatPriceTierLabel(product.priceTier)}
            </div>
            <p className="text-xs text-slate-400 mt-1">{product.priceTierDescription}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-fairway-900 space-y-1">
            <span className="text-[11px] uppercase font-mono font-bold text-fairway-400">Who This Is Best For:</span>
            <p className="text-xs font-semibold text-slate-200 leading-snug">{product.bestFor}</p>
          </div>

          {hasVerifiedAmazonListing(product) && (
          <div className="pt-2">
            <AmazonAvailabilityButton
                  listing={product}
                  label="Check Current Price on Amazon"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm transition-all shadow-xl shadow-emerald-950/70"
                  iconClassName="w-4 h-4 text-white"
                />
            <p className="text-[11px] text-center text-slate-400 mt-2">
              {`Listing verified ${product.amazonCheckedAt || 'recently'}; availability can change.`}
            </p>
          </div>
          )}
        </div>
      </div>

      {/* Section 1: 5-Factor Scorecard */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-fairway-400" />
          <span>Editorial 5-Factor Fit Score</span>
        </h2>
        <ScorecardBadge scorecard={product.scorecard} category={product.category} />
      </section>

      {/* Section 2: Real-World Specifications */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Wrench className="w-5 h-5 text-fairway-400" />
          <span>Key Specifications (What's Under the Hood)</span>
        </h2>
        <div className="bg-[#0a2318] border border-fairway-800/80 rounded-2xl overflow-hidden">
          <table className="w-full text-left text-xs sm:text-sm">
            <tbody className="divide-y divide-fairway-900">
              {product.specs.map((spec, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-950/40' : 'bg-transparent'}>
                  <td className="py-3 px-4 sm:px-6 font-semibold text-slate-300 w-1/3 border-r border-fairway-900">
                    {spec.label}
                  </td>
                  <td className="py-3 px-4 sm:px-6 font-mono text-fairway-300">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Pros & Cons */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white">
          What We Like & What to Keep in Mind
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0a2318] border border-fairway-800/80 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-fairway-400 flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>What We Love</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-fairway-400 font-bold shrink-0">•</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a2318] border border-amber-800/50 rounded-2xl p-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>Things to Consider</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Care Protocols */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>How to Care for This Equipment</span>
        </h2>
        <div className="bg-amber-950/20 border border-amber-800/40 rounded-2xl p-5 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
          {product.failureModesAndCare}
        </div>
      </section>

      {/* Section 5: PAA FAQs */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-fairway-400" />
          <span>Common Questions & Answers</span>
        </h2>
        <div className="space-y-3">
          {product.faqs.map((faq, i) => (
            <div key={i} className="bg-[#0a2318] border border-fairway-800/80 rounded-2xl p-5 space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-white">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Only show the purchase panel when there is a usable destination. */}
      {hasVerifiedAmazonListing(product) && (
      <div className="bg-slate-950 border border-fairway-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs text-slate-400">Ready to compare the current price?</span>
          <div className="text-base font-bold text-white">{product.brand} {product.model}</div>
        </div>
        <AmazonAvailabilityButton
                  listing={product}
                  label="Check Current Price on Amazon"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors shadow-lg shadow-emerald-950/70"
                  iconClassName="w-4 h-4 text-white"
                />
      </div>
      )}

    </article>
  );
};
