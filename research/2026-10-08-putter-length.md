# Putter length buying guide — publication evidence

Reviewed 2026-10-08. Exactly one new article: `/guides/choose-putter-length`.

## Demand and scope

Read GUIDE_QUALITY_STANDARD.md before drafting. The existing three guides cover driver flex, ball compression and tall-player club fitting; no dedicated putter-length buying decision exists. The available adjacent-property Search Console export `https___golfkitadvisor.com_-Performance-on-Search-2026-09-28/Queries.csv` contains putter length calculator (4 impressions), how to measure putter length (3), average putter length (3), and how to determine putter length (2), plus related low-volume queries. This is adjacent-site demand, not FindMyBestSwing traffic or proof of search volume.

Intent: choose a conventional putter length before buying or modifying a club. Segments: budget-conscious existing owner, first-time buyer, between-size buyer, tall/short player, used buyer and premium shopper. Decisions: keep, retrofit, stock replacement or fitted/custom order.

## Live top-five article benchmark

Google rendered query: `how to choose putter length 33 34 35 inches`, October 8. Five relevant article results in observed order, excluding Reddit and videos; rankings depend on location and time. All five article bodies were opened and read (PGA through rendered browser; others through web page extraction).

1. [PGA TOUR Superstore](https://www.pgatoursuperstore.com/learning-center/how-to-choose-the-right-putter-length.html): useful posture, arm-length and trial guidance. Opportunity: distinguish measuring an existing club from choosing a fit; add an all-in budget and written order protocol.
2. [myvicto](https://www.myvicto.com/blogs/news/how-to-measure-putter-length): accessible home measurements, size chart and symptom FAQs. Opportunity: avoid diagnosing length from a miss and control the complete build during comparisons.
3. [Clarkes Golf](https://www.clarkesgolf.co.uk/blogs/clarkes-golf-news/what-length-putter-do-i-need): quick 33/34/35 explanation and measurement advice. Opportunity: explain setup assumptions and provide a recorded trial rather than a chart-only purchase.
4. [Callaway](https://www.callawaygolf.com/golf-guides/putter-buying-guide): strong coverage of purchase variables, baseline estimate and adjacent-size trials. Our addition is a repeatable recorded exercise, cost paths and exact configuration evidence; we do not claim competitors omit trials.
5. [Skillest](https://skillest.com/blog/what-length-putter-do-i-need/): covers fitting, retrofit and grip/weight. Opportunity: avoid strong height prescriptions and combine these issues into a purchase/return decision.

Gap addressed: turn sizing advice into a budget-led keep/modify/buy decision, test the complete build, and verify exact order identity. No claim that every element is absent from every competing article.

Live People Also Ask: 34 vs 35; height for 33; whether 34 is normal; ideal length for height. Related searches: fitting chart, standard length for 5 feet 10 inches and 6 feet, 34-inch fit, measuring length, calculator and 35-inch putters. Eight FAQs cover these sizing questions plus calculator limits, retrofit, miss diagnosis, premium value and retesting.

## Primary evidence and claim boundaries

- [Cleveland HB SOFT 2 11C](https://us.dunlopsports.com/cleveland-golf/clubs/putters/hb-soft-2/hb-soft-2-putter-model-11c/MHBSOFT2-11C.html): stock 34/35 inches, RH, center shaft, winged mallet, face balanced, oversized grip, 365 g head, 70° lie, 3° loft. 35-inch build has 20 g counterweight. Custom chart excludes 11C from loft/lie adjustment. Straight-stroke category is manufacturer positioning, not an independent outcome. Exact 11C manufacturer image loaded and visually checked in the guide.
- [Callaway buying guide](https://www.callawaygolf.com/golf-guides/putter-buying-guide): typical 33–35-inch range, putting-stance wrist-floor minus two inches as a starting estimate, neighboring-length trials. Not used as a universal prescription; unrelated stroke/neck simplifications not adopted.
- [Scotty Cameron FAQs](https://www.scottycameron.com/faqs/): its grip-butt to bottom-center-of-face measuring convention, explicitly manufacturer-specific.
- [Art of Putting](https://www.scottycameron.com/art-of-putting/): setup and eye-line guidance. Explains differing assumptions without claiming one universal posture.
- [Scotty Cameron R&D discussion](https://www.scottycameron.com/articles/austie-rollinson-senior-director-putter-rd/): hand height, neck, setup, weighting matched to length; full relevant text read, including weighting section.

Budget recommendations, recording exercise and keep-if-inconclusive decision are editorial judgment. No hands-on trial, performance score, expert identity, lab sample or improvement claim is invented. The five-putt blocks and suggested distances are practice prompts, not validated thresholds. Prices below are dated research evidence and are not hard-coded in the article.

## Amazon rendered verification — 2026-10-08

Verification used the actual rendered detail pages, selected options, Item details and active new-offer buy box. No search link, shortened URL, third-party-inferred ASIN or HTTP-only verification. US delivery was set through the normal UI: ZIP 10001, Apply, confirmation Continue, then reload. Header and buy box then agreed on New York 10001. This resolves the prior runs' Argentina-delivery blocker. No checkout action was taken.

| ASIN | Exact displayed build | Rendered offer | Result |
| --- | --- | --- | --- |
| B0CP9T9TQN | Cleveland Golf HB Soft 2, shared Model 11 title; 34-inch, Silver, Center Shafted – Oversized Grip, Right Hand. Item details model number HB Soft 2 #11C. Alloy Steel shaft, Uniflex, 3° loft; quantity/unit count 1; included components Clubs. | In Stock; new $155.97; sold/shipped by Amazon.com; Add to cart and Buy Now enabled. | verified, amazonCheckedAt 2026-10-08 |
| B0CP9T3C1Q | Same selected center-shaft oversized-grip RH build, 35-inch Silver. Item details model/part 11239025, HB SOFT 2 series. Alloy Steel shaft, Uniflex, 3° loft; quantity/unit count 1; components Clubs. | In Stock; new $147.85; sold/shipped by Amazon.com; Add to cart and Buy Now enabled. | verified, amazonCheckedAt 2026-10-08 |

Cleveland direct displayed $159.99 during this check; neither observed Amazon new offer showed a reseller markup. The center-shaft selection and manufacturer 11C specifications reconcile the umbrella Amazon Model 11 title. No 33-inch, left-hand or heel-shaft version is linked. Accessories were not specified beyond one club; the article explicitly makes no headcover/bundle promise. No failed listing was enabled, and no existing catalog listing status was changed.

## Obstacles resolved (12)

1. Sizing vs current-club measurement.
2. Different measurement endpoints.
3. Height and putting-stance assumptions.
4. Between-size uncertainty.
5. Length vs lie/setup ambiguity.
6. Grip and weighting differences during comparison.
7. Total spending ceiling.
8. Keep vs retrofit vs stock vs custom purchase.
9. Used-club alterations.
10. Premium price without demonstrated personal benefit.
11. Exact online configuration, accessories and return conditions.
12. Repeated comparison and arrival/order checklist.

## Publication QA

- Production `npm run build`: passed (TypeScript + Vite).
- Repository-wide Amazon URL scan: executable purchase URL construction exists only in `src/utils/amazonLinks.ts`, called only by the guarded `AmazonAvailabilityButton`; all purchase surfaces use that component. Other matches are image assets or documentation. No unguarded direct Amazon anchor found.
- New rendered article has exactly two Amazon anchors, correct ASINs/tag, and `nofollow sponsored noopener noreferrer`. Unavailable guard remains unchanged and returns no anchor.
- New article, guide hub and all three existing guide pages checked at viewport widths 320, 360, 390 and 1440. All 20 checks satisfy document scrollWidth === clientWidth; no out-of-bounds content outside table regions. Scrollbar reduces content width by 6 px normally.
- Mobile menu opened/closed at each phone width on article and hub. Cookie customization checked at all phone widths and saved successfully. Cards, header, table and hub visually inspected. Both manufacturer images load.
- Table keyboard scrolling advances its scrollLeft inside labeled overflow container, without page scrolling horizontally.
- Direct clean-path loading, refresh, Back and Forward passed for article and hub. Existing Vercel catch-all rewrite retained.
- One h1 and one self-referencing canonical per checked page. New canonical/OG/Article/Breadcrumb URL and sitemap path agree. Article date is 2026-10-08; all eight FAQ schema answers equal page content. No source/internal href, canonical, social or sitemap fragment routing found.
- Browser console: no errors during preview QA. Preview required an elevated local server after sandbox socket restriction; Git fetch succeeded with approved network access. Origin/main matched starting HEAD before commit.
- Final staged diff reviewed for unsupported claims and scope; `git diff --cached --check` passed. Publication outcome is recorded in automation memory.

Scope: one new buying guide plus its registration, sitemap entry, optional guide-specific product cards and per-guide structured-data dates. Existing article wording and product catalog preserved. Unrelated untracked PDF excluded.
