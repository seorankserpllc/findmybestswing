# Irons listing follow-up — October 21, 2026

Scope: verify purchase destinations for the existing Qi Max and Rogue ST ’24 MAX comparisons, then confirm production. No new model, performance claim, score or hands-on test was added. The earlier five-result editorial gap review remains in `2026-10-21-guide-seo-audit.md`; this update concerns stock identity and ordering obstacles.

## Rendered Amazon verification

US delivery: New York 10001. Prices and seller/stock observations below are a dated audit, not prices promised in the article. No purchase was made. Search results were used only to discover detail pages, never as destinations or availability proof.

| ASIN | Exact rendered build / outcome |
| --- | --- |
| B0G2T8JQSV | **Verified.** Qi Max, 2026, LEFT hand, KBS Max 85 MT steel Stiff, Satin Chrome, 5–PW/AW, seven irons, one set / unit count 1. Model/part M2117909, UPC 197995107750. Final tagged detail page title says Qi Max Steel Stiff; selectors, expanded item details and included components agree. New offer $1,099.99, Amazon.com seller/shipper, two left (more on the way), enabled Buy Now. TaylorMade's STOCK configurator, selected Left / Steel / Stiff / 5–PW, AW, independently returned M2117909 at $1,099.99. Stock lofts and lengths come from the same manufacturer page. This SKU match establishes the stock build; no custom fit is implied. |
| B0G2TBP6DC | **Reverified and retained.** Qi Max HL 2026, RH KBS Max Lite steel Regular, Satin Chrome, stock/standard grip, 5–PW/AW; seven irons, pack 1, unit 1, M2133207, UPC 197995159551. Final tagged page, title, selection and expanded details agree. $1,099.99, SPORT +, five left, enabled Buy Now. |
| B0G2TBS42T | **Rejected.** RH steel Stiff 5–PW/AW. Expanded metadata says Number of Packs 6 while included components say seven irons / unit count 1. Old link stays removed. |
| B0G2TDVRFQ | **Rejected.** Regular selected and table Regular, but rendered main title says Steel Stiff. |
| B0G2TD3N3B | **Rejected after further inspection.** RH steel Stiff 4–PW, seven irons, M2116909, available $1,099.99. Although set identity is consistent, Amazon's size field says 38–35 inches; TaylorMade's stock 4–PW lengths run 39.125–35.75 inches. The apparent match reported during research was provisional, not an approval. No link published. |
| B0D5KRH9DR | **Rejected.** Rogue ST 2024, LH steel Regular 5–PW/AW, in stock $777.61, Amazon.com. Table says Graphite material despite steel shaft; shared A+ includes older-generation construction. |
| B0D5K96WYD | **Rejected.** Rogue ST 2024, LH steel Stiff 5–PW/AW, SKU 4I397244I3006, UPC 197193044789. $649.99 / nine left / Amazon.com. Material field says Graphite despite steel build. |
| B0D5KYD7Q3 | **Unavailable.** Rogue ST 2024, RH graphite Light 6–PW/AW, $685.68. Rendered page explicitly says temporarily out of stock, with no delivery estimate. Enabled backorder controls are insufficient. |
| B0D5KX3RYR | **Unavailable.** Rogue ST 2024, LH steel Regular 5–PW, UPC 197193044703, $600. Rendered page explicitly says temporarily out of stock, with no delivery estimate. |

Additional selector exploration switched to 2022 Callaway generations automatically; those are not substitutes for the 2024 comparison. A Qi Max graphite selection retained a Steel Stiff main heading and was not used. No third-party-inferred ASIN was published.

## Primary evidence and buyer guidance

- [TaylorMade Qi Max](https://www.taylormadegolf.com/Qi-Max-Irons/DW-TC675.html?lang=en_US): exact M2117909 stock configuration and direct price; stock 5/6/7/8/9/PW/AW lofts 21/24/28/32.5/37/42.5/48 degrees, lengths 38.50/37.88/37.25/36.75/36.25/35.75/35.50 inches. Manufacturer positioning remains attributed.
- [TaylorMade Qi Max HL](https://www.taylormadegolf.com/Qi-Max-HL-Irons/DW-TC680.html?lang=en_US): existing model specifications and price comparison.
- [Callaway Rogue ST ’24 MAX](https://www.callawaygolf.com/golf-clubs/iron-sets/irons-2024-rogue-st-max.html): exact 2024 identity and existing model lofts/lengths; no retailer generation substitution.

Ordering obstacles addressed: wrong hand, wrong flex, changed Amazon selector, stock versus custom build, misleading search availability, 2022/2024 generation mixing, pack-count conflict, and missing wedges. Revised FAQ distinguishes the two linked builds; the Callaway FAQ gives the concrete failed checks. The Qi Max card prominently says LEFT hand and tells right-handed golfers to skip that listing. Model illustration is explicitly distinct from a retail-build photograph.

## Production-domain finding

`https://findmybestswing.com/guides/best-irons-for-20-handicap` returned HTTP 200 from Vercel with the latest article. GitHub deployment 7234311812 for commit 8da77cb7867b50399abaa3c44d144bf4ac4a1bcf reported success at `https://findmybestswing-mqx1l6orh-raoura.vercel.app`.

The previous checks used `mybestswing.com`, a different domain. Its public DNS resolved to 209.141.38.71 / 107.161.23.204 / 198.251.81.30; the actual project domain resolved to 216.150.1.1. Runtime canonicals, Open Graph, schema, sitemap, robots, displayed domain and build checks were corrected to `findmybestswing.com`. Historical audit notes were retained as history. No DNS or ownership settings were changed.

## Publication verification

Production build and `npm run check:guides` passed: 13 guide documents, 27 contextual links, initial HTML metadata/schema, guarded Amazon destinations and carry-gap checks. Existing Vite large-bundle warning remains. Repository URL scan found Amazon destination generation only in the guarded central component/helper; no direct purchase anchors were added. `git diff --check` passed.

Built article verified in the browser at 320, 360, 390 and 1280 px; document scroll width equaled client width, including each phone menu open and closed. All three product images loaded. Exactly two Amazon anchors appeared, for B0G2TBP6DC and B0G2T8JQSV, with nofollow/sponsored/noopener/noreferrer. Direct load, reload, guide-hub navigation, Back and Forward passed; no browser runtime errors. Hydrated canonical used the real production domain. Final diff reviewed for unsupported claims and generation/hand mismatches.

Post-push deployment confirmation is recorded in automation memory and the completion report after deployment.
