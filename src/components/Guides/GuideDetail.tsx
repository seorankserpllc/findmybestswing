import React, { useEffect } from 'react';
import { EditorialGuide } from '../../types/domain';
import { getProductBySlug } from '../../data/products';
import { ProductImage } from '../Common/ProductImage';
import { AmazonAvailabilityButton } from '../Common/AmazonAvailabilityButton';
import { ArrowLeft, Clock, Calendar, User, CheckCircle, AlertCircle, Info, ExternalLink, ShoppingCart, HelpCircle, BookOpenCheck } from 'lucide-react';
import { InternalLink } from '../Common/InternalLink';

interface GuideDetailProps {
  guide: EditorialGuide;
  onBack: () => void;
  onNavigate: (route: string) => void;
}

export const GuideDetail: React.FC<GuideDetailProps> = ({ guide, onBack, onNavigate }) => {
  useEffect(() => {
    const pageUrl = `https://mybestswing.com/guides/${guide.slug}`;
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.dataset.guideSchema = guide.slug;
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: guide.title,
          description: guide.excerpt,
          url: pageUrl,
          mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
          datePublished: guide.publishedDateIso ?? '2026-09-28',
          dateModified: guide.reviewedDateIso ?? guide.publishedDateIso ?? '2026-09-28',
          author: { '@type': 'Organization', name: 'FindMyBestSwing Editorial Team' },
          publisher: {
            '@type': 'Organization',
            name: 'FindMyBestSwing',
            url: 'https://mybestswing.com/',
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://mybestswing.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Buying Guides',
              item: 'https://mybestswing.com/guides',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: guide.title,
              item: pageUrl,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: guide.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        },
      ],
    });
    document.head.appendChild(schema);

    return () => {
      schema.remove();
    };
  }, [guide]);

  return (
    <article className="max-w-6xl mx-auto px-4 py-8 sm:py-12 space-y-10">
      <div>
        <button onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </button>
      </div>

      <header className="max-w-4xl space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-400" />{guide.readingTimeMinutes} min read</span>
          <span aria-hidden="true">•</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />Reviewed {guide.publishedDate}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">{guide.title}</h1>
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light">{guide.subtitle}</p>
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800 text-xs">
          <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 font-bold"><User className="w-5 h-5" /></div>
          <div><div className="font-bold text-white text-sm">{guide.authorName}</div><div className="text-slate-400">{guide.authorTitle}</div></div>
        </div>
      </header>

      <section aria-labelledby="verdict-heading" className="max-w-4xl bg-emerald-950/40 border border-emerald-600/50 rounded-3xl p-6 sm:p-8">
        <h2 id="verdict-heading" className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-3">The buying verdict</h2>
        <p className="text-base sm:text-lg text-white leading-relaxed">{guide.verdict}</p>
      </section>

      {guide.purchaseOptions && guide.purchaseOptions.length > 0 && (
        <section aria-labelledby="purchase-options-heading" className="space-y-4">
          <h2 id="purchase-options-heading" className="text-xl font-bold text-white">{guide.purchaseOptionsHeading ?? 'A stock option after your length test'}</h2>
          <p className="max-w-4xl text-sm text-slate-300">{guide.purchaseOptionsIntro ?? 'These are two configurations of the same model, not two independent winners. Buy only the build that fits.'} As an Amazon Associate, we earn from qualifying purchases.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guide.purchaseOptions.map((option) => (
              <div key={option.asin} className="min-w-0 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
                <img src={option.imageUrl} alt={option.name} className="w-full h-44 object-contain bg-white rounded-xl" loading="lazy" />
                <h3 className="text-lg font-bold text-white">{option.name}</h3>
                <p className="text-sm text-slate-300">{option.configuration}</p>
                <dl className="space-y-3 text-sm text-slate-300 flex-1">
                  <div><dt className="font-bold text-emerald-300">Consider it if</dt><dd>{option.bestFor}</dd></div>
                  <div><dt className="font-bold text-white">Trade-off</dt><dd>{option.tradeOff}</dd></div>
                  <div><dt className="font-bold text-white">Skip it if</dt><dd>{option.skipIf}</dd></div>
                </dl>
                <AmazonAvailabilityButton listing={option} label="Check this build on Amazon" className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-bold" />
                <p className="text-xs text-slate-400">Listing checked {option.amazonCheckedAt}. ASIN: {option.asin}.</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {guide.relatedProducts.length > 0 && (
        <section aria-labelledby="products-heading" className="space-y-4">
          <div className="max-w-4xl">
            <h2 id="products-heading" className="text-xl font-bold text-white">Compare products for this decision</h2>
            <p className="mt-1 text-xs text-slate-400">Compare the exact specifications against your needs. As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guide.relatedProducts.map((slug) => {
              const product = getProductBySlug(slug);
              if (!product) return null;
              return (
                <div key={product.id} className="min-w-0 bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                  <InternalLink href={`/products/${product.slug}`} onNavigate={onNavigate} className="min-w-0 text-left flex items-center gap-4 mb-4 group">
                    <div className="w-20 h-24 sm:w-24 sm:h-28 bg-slate-950 rounded-xl p-2 flex items-center justify-center border border-slate-800 shrink-0"><ProductImage src={product.mediaCdnUrl} alt={product.model} category={product.fallbackIcon} className="w-full h-full" /></div>
                    <div className="min-w-0"><span className="text-[10px] font-bold uppercase text-emerald-400 block">{product.brand}</span><h3 className="text-base font-bold text-white group-hover:text-emerald-300 break-words">{product.model}</h3></div>
                  </InternalLink>
                  <div className="flex flex-wrap gap-2">
                    <InternalLink href={`/products/${product.slug}`} onNavigate={onNavigate} className="flex-1 min-w-0 flex items-center justify-center py-3 px-3 rounded-xl border border-slate-700 text-slate-200 text-xs font-bold hover:border-emerald-600">View product details</InternalLink>
                    <AmazonAvailabilityButton
                      listing={product}
                      label="Check price on Amazon"
                      className="flex-1 flex items-center justify-center gap-1 py-3 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold"
                      iconClassName="w-3 h-3"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section aria-labelledby="takeaways-heading" className="max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 id="takeaways-heading" className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2"><CheckCircle className="w-4 h-4" />What matters before you spend</h2>
        <ul className="space-y-2.5 text-sm text-slate-200">
          {guide.keyTakeaways.map((takeaway) => <li key={takeaway} className="flex items-start gap-2.5"><span className="text-emerald-400 font-bold shrink-0">•</span><span>{takeaway}</span></li>)}
        </ul>
      </section>

      <section aria-labelledby="decision-table-heading" className="space-y-4">
        <div className="max-w-4xl">
          <h2 id="decision-table-heading" className="text-2xl font-bold text-white">Choose your starting point</h2>
          <p className="mt-2 text-sm text-slate-400">Match the row to your situation, then complete the verification step before buying.</p>
        </div>
        <div role="region" aria-label="Buying decision comparison" tabIndex={0} className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-slate-900 text-slate-200">
              <tr><th className="p-4 font-bold">Your situation</th><th className="p-4 font-bold">Start here</th><th className="p-4 font-bold">Why</th><th className="p-4 font-bold">Verify before buying</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-slate-950/50 text-slate-300">
              {guide.decisionTable.map((row) => (
                <tr key={row.situation} className="align-top">
                  <th scope="row" className="p-4 font-semibold text-white">{row.situation}</th>
                  <td className="p-4 text-emerald-300 font-semibold">{row.startingPoint}</td>
                  <td className="p-4">{row.whyItFits}</td>
                  <td className="p-4">{row.verifyBeforeBuying}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="max-w-4xl space-y-10 text-sm sm:text-base text-slate-300 leading-relaxed">
        {guide.contentSections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.callout && (
              <div className={`p-5 rounded-2xl border text-sm flex items-start gap-3 ${section.callout.type === 'warning' ? 'bg-amber-950/30 border-amber-700/50 text-amber-100' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                {section.callout.type === 'warning' ? <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" /> : <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />}
                <div><strong className="block font-bold mb-1 text-white">{section.callout.title}</strong><span>{section.callout.message}</span></div>
              </div>
            )}
          </section>
        ))}
      </div>

      <section aria-labelledby="checklist-heading" className="max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 id="checklist-heading" className="text-xl font-bold text-white flex items-center gap-2"><ShoppingCart className="w-5 h-5 text-emerald-400" />Before-you-buy checklist</h2>
        <ol className="space-y-3 text-sm text-slate-200">
          {guide.buyingChecklist.map((item, index) => <li key={item} className="flex items-start gap-3"><span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-950 text-emerald-300 font-bold shrink-0">{index + 1}</span><span>{item}</span></li>)}
        </ol>
      </section>

      <section aria-labelledby="faq-heading" className="max-w-4xl space-y-5">
        <h2 id="faq-heading" className="text-2xl font-bold text-white flex items-center gap-2"><HelpCircle className="w-6 h-6 text-emerald-400" />Questions that usually come next</h2>
        <div className="space-y-3">
          {guide.faqs.map((faq) => (
            <details key={faq.question} className="group bg-slate-900 border border-slate-800 rounded-2xl p-5">
              <summary className="cursor-pointer list-none font-bold text-white pr-8 relative after:content-['+'] after:absolute after:right-0 after:text-emerald-400 group-open:after:content-['−']">{faq.question}</summary>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="sources-heading" className="max-w-4xl pt-8 border-t border-slate-800 space-y-4">
        <h2 id="sources-heading" className="text-xl font-bold text-white flex items-center gap-2"><BookOpenCheck className="w-5 h-5 text-emerald-400" />Sources and fact-check notes</h2>
        <p className="text-xs text-slate-400">We favor manufacturer fitting material for product-specific claims and use independent guides to identify buyer questions. Sources were checked on {guide.publishedDate}.</p>
        <ul className="space-y-3">
          {guide.sources.map((source) => (
            <li key={source.url} className="text-sm">
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1">{source.name}<ExternalLink className="w-3.5 h-3.5" /></a>
              <p className="mt-1 text-slate-400">{source.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
