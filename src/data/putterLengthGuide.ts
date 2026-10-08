import { EditorialGuide } from '../types/domain';

const imageUrl = 'https://us.dunlopsports.com/on/demandware.static/-/Sites-masterCatalog_DunlopSports/default/dw30004cc7/images/large/CG23-Clubs-Putters-HB-Soft2-11C-1.jpg';

export const PUTTER_LENGTH_GUIDE: EditorialGuide = {
  id: 'choose-putter-length',
  slug: 'choose-putter-length',
  title: 'Putter Length: Choose 33, 34 or 35 Inches Before You Buy',
  subtitle: 'A practical decision guide for conventional putting: compare a stock purchase, a fitting and a change to the putter you already own.',
  readingTimeMinutes: 10,
  publishedDate: 'October 8, 2026',
  publishedDateIso: '2026-10-08',
  reviewedDateIso: '2026-10-08',
  authorName: 'FindMyBestSwing Editorial Team',
  authorTitle: 'Source-based buying guidance',
  excerpt: 'Choose a putter length with a repeatable comparison, a keep-versus-replace budget decision and an exact-build checklist. Height alone does not settle 33 vs 34 vs 35 inches.',
  verdict: 'Keep your current putter if a comparison does not reveal a repeatable reason to change. If buying, try neighboring lengths with a similar head and grip, then choose the least expensive complete build that lets you set up comfortably and repeat your distance and starting-line control. Use height to choose what to try, not what to order. Pay for a fitting before a costly custom purchase if length, lie or setup remains uncertain.',
  purchaseOptions: [
    {
      name: 'Cleveland HB SOFT 2 11C — 34-inch', imageUrl,
      configuration: 'Right hand; silver; center shaft; oversized grip; steel shaft, Uniflex; 3° loft. One putter.',
      bestFor: 'A buyer whose comparison favors 34 inches and this center-shaft mallet layout.',
      tradeOff: 'A stock length is convenient, but the fixed factory lie and center shaft will not suit every setup.',
      skipIf: 'You need left hand, 33 inches, a different neck or an adjusted lie.',
      asin: 'B0CP9T9TQN', amazonStatus: 'verified', amazonCheckedAt: '2026-10-08',
    },
    {
      name: 'Cleveland HB SOFT 2 11C — 35-inch', imageUrl,
      configuration: 'Right hand; silver; center shaft; oversized grip; steel shaft, Uniflex; 3° loft. One putter.',
      bestFor: 'A buyer who prefers the complete 35-inch build in a trial, including its factory counterweight.',
      tradeOff: 'Its 20 g counterweight means length is not the only difference from the stock 34-inch build.',
      skipIf: 'You plan to cut it to 34 inches without reviewing the resulting balance and grip with a club builder.',
      asin: 'B0CP9T3C1Q', amazonStatus: 'verified', amazonCheckedAt: '2026-10-08',
    },
  ],
  keyTakeaways: [
    'This guide concerns conventional putting. Arm-lock and long-putter builds need a separate fitting; do not apply this selection process unchanged.',
    'Measuring a club tells you what you own. It does not prove that the length fits you.',
    'Length, lie, grip and weighting belong on the same order. A shorter shaft in a different head is not a controlled length comparison.',
    'The protocol below is our suggested shopping exercise, not a lab test or a claim that we have played these putters.',
  ],
  decisionTable: [
    { situation: 'Your current putter feels comfortable; budget is tight', startingPoint: 'Keep it and establish a baseline', whyItFits: 'Costs nothing and avoids replacing a club without evidence. Skip this route if you cannot find a comfortable setup.', verifyBeforeBuying: 'Record short-putt misses and long-putt leave distances before trying alternatives.' },
    { situation: 'Beginner buying a first putter', startingPoint: 'Borrow or demo neighboring stock lengths', whyItFits: 'Preserves budget for practice. A stock purchase is a compromise if none feels comfortable; do not force a fit because it is discounted.', verifyBeforeBuying: 'Try the actual head and grip. Confirm that an on-green trial is allowed under the seller’s return terms.' },
    { situation: 'Between 33, 34 and 35 inches, or results disagree', startingPoint: 'Repeat the trial, then consider a fitting', whyItFits: 'A fitting can examine setup and other specifications together. Skip an expensive custom order based only on one good session.', verifyBeforeBuying: 'Ask for a written build sheet and whether a half-inch option is available in that exact model.' },
    { situation: 'You like your current head but want a different length', startingPoint: 'Get a complete retrofit quote', whyItFits: 'May preserve a familiar head. Labor, grip replacement and balance work can erase the saving; skip if the builder cannot approve the modification.', verifyBeforeBuying: 'Compare the finished quote, adjustment limits and warranty implications with a correctly built replacement.' },
    { situation: 'Tall, short, or unusually long arms for your height', startingPoint: 'Start with your putting setup', whyItFits: 'A height bracket is only a trial shortlist. Skip a blind extra-long or extra-short purchase based on your iron specification.', verifyBeforeBuying: 'Have a fitter observe hand height, posture and how the head sits, then compare the proposed build on a green.' },
    { situation: 'Considering a used bargain or premium upgrade', startingPoint: 'Compare total cost and the actual build', whyItFits: 'Either can work, but neither a low price nor a premium label demonstrates fit. Skip an unreturnable club with unknown alterations.', verifyBeforeBuying: 'Request measured length, grip and modification history. Include any fitting, regripping and shipping in your spending ceiling.' },
  ],
  contentSections: [
    {
      heading: 'Use 33, 34 and 35 inches as trial choices',
      body: [
        'Callaway’s putter buying guide describes 33–35 inches as typical and offers a putting-stance wrist-to-floor measurement minus two inches as a starting estimate. It also recommends trying neighboring lengths. That estimate is a manufacturer’s screening method, not a universal fit formula or the same measurement used to size your irons.',
        'Other advice uses height charts or asks for eyes directly over the ball. Scotty Cameron’s Art of Putting instead describes an eye line slightly inside it. These are different setup assumptions, so copying a chart and an eye-position rule from different sources can produce conflicting answers. Use a comfortable, repeatable setup and an observed trial to settle the purchase.',
        'Scotty Cameron’s fitting material treats hand height, posture, neck choice and how the head sits together. A heel or toe sitting up is a reason to check setup and lie as well as length. A missed putt by itself does not diagnose a shaft that is too long or too short.',
      ],
    },
    {
      heading: 'Measure the club you own before comparing sizes',
      body: [
        'First ask the manufacturer or fitter which endpoints they use. Scotty Cameron’s Custom Shop FAQ specifies the butt of the grip to the bottom center of the face. Record that convention with your measurement; do not silently substitute the heel, exposed shaft length or a vertical floor-to-hand reading.',
        'Use a rigid ruler, have someone help keep the club steady, and repeat the measurement. Photograph the endpoints when asking a seller or builder to compare. Treat a used club’s original length label as a lead to check, especially if its grip or shaft has changed.',
        'Then set up with the measured club in your normal golf shoes. Record where your hands sit on the grip and whether the posture feels sustainable. This is your baseline, not a requirement to preserve a setup that is uncomfortable.',
      ],
    },
    {
      heading: 'Spend on the complete build, not just the sticker price',
      body: [
        'Set an all-in ceiling before shopping: club plus fitting, delivery, possible return shipping and any grip or adjustment work. If your ceiling cannot cover both a premium head and the work needed to make it fit, our recommendation is to prioritize the fit and compare a less expensive head. We do not have evidence that a premium purchase will improve your putting.',
        'For a retrofit, ask a club builder for the proposed finished length, grip, weighting and any lie or loft work in writing. Scotty Cameron explains that its head weights are matched to length; Cleveland also uses a length-dependent counterweight in the model below. Do not assume cutting or extending any putter recreates a different factory build.',
        'Compare that complete quote with a stock replacement and a custom order. Check fitting-fee credits, alteration limits, warranty implications and the specific return policy rather than assuming they are included. If a trial leaves you undecided, keeping a serviceable current club is a valid budget decision.',
        'For a used purchase, ask for measured length, clear head and shaft photos, the current grip and alteration history. A low asking price stops being useful if the specifications are uncertain and you cannot return it after inspection.',
      ],
    },
    {
      heading: 'Run a short-putt and distance-control comparison',
      body: [
        'Our suggested shopping protocol: compare your current putter with two neighboring lengths where available. Start with the same head, neck and grip; ask whether factory weighting changes with length. If the builds differ, label the result a whole-club comparison rather than proof about length alone.',
        'On the same practice green, use the same balls and targets. After a brief warm-up, alternate five-putt blocks with each candidate from about six feet, then from about 25 feet. Choose distances suitable for the space; these are practice prompts, not scientific thresholds.',
        'For the short putts, record makes and the side of each miss. For the longer putts, record the remaining distance and whether each finished short or long. Also note setup comfort, grip position and any effort needed to hold the head in position. Do not change your stroke technique halfway through the comparison.',
        'Repeat in reverse club order on another day if possible. Look for a benefit that survives the repeat without creating a new distance-control or comfort problem. We prescribe no pass score: a small, inconsistent difference is a reason to postpone spending. If none works comfortably, take the observations to a fitter rather than buying the least awkward option.',
      ],
      callout: { type: 'tip', title: 'Choking down is a screening step', message: 'Trying a lower hand position can help decide whether to demo a shorter build. It does not reproduce the grip position, balance and finished construction of a purpose-built shorter putter.' },
    },
    {
      heading: 'Check the exact stock configuration before ordering',
      body: [
        'Cleveland specifies the HB SOFT 2 11C as a face-balanced, center-shaft winged mallet: right hand, 365 g head, 70° lie and stock 34- or 35-inch lengths. Its fitting chart associates the model with a straight stroke; treat that as manufacturer positioning, not a guarantee of compatibility. Trial the layout.',
        'The 35-inch build includes a 20 g counterweight. Cleveland’s custom chart excludes the 11C from loft and lie adjustment. If you need a different lie, choose a model with a manufacturer-approved route instead of expecting a shop to bend this one.',
        'Amazon uses a shared “Model 11” title for these listings. The selected center-shaft configuration and item details distinguish the 11C; a similarly titled heel-shaft version is not an interchangeable order. The cards above specify only the two checked builds. No 33-inch or left-hand Amazon configuration is recommended here.',
        'Each listing identifies one club. Accessory details are unspecified, so we do not promise a headcover or any bundle. Recheck the selected options, seller, total delivered price and return conditions in your own destination before paying. Availability and price can change after our dated check.',
      ],
    },
  ],
  buyingChecklist: [
    'Write the chosen length and the measurement convention on your notes or fitting sheet.',
    'Record brand, exact model and generation, handedness, head and neck configuration, loft and lie.',
    'Specify shaft, grip, color and any factory or custom weighting; do not rely on a generic model title.',
    'Repeat the comparison with short and longer putts. Keep the baseline if the result is inconclusive.',
    'Confirm whether the actual model allows the adjustment you need before ordering or authorizing work.',
    'Compare the complete cost of keeping, modifying, stock replacement and custom ordering.',
    'Check seller, condition, quantity, included accessories, delivery cost and trial/return terms for the exact order.',
    'On arrival, compare the club and label with your build sheet before altering it; contact the seller if they disagree.',
  ],
  faqs: [
    { question: 'Should I buy a 34-inch or 35-inch putter?', answer: 'Try both in a similar build and record comfort, short-putt misses and long-putt leave distances. Choose the complete build that performs consistently for you. In the Cleveland example here, the 35-inch factory counterweight means this is not purely a one-inch shaft comparison.' },
    { question: 'How tall should I be for a 33-inch putter?', answer: 'There is no height cutoff established by the sources here. Height can help choose demo lengths, but arm proportions, posture and hand position still need checking. A 33-inch label alone is not a buying recommendation.' },
    { question: 'Is 34 inches normal for someone who is 5 feet 10 inches or 6 feet tall?', answer: 'It is within Callaway’s typical 33–35-inch range, but neither height proves that it fits. Compare neighboring lengths in your putting stance rather than ordering from a height-only chart.' },
    { question: 'Can a putter-length calculator replace a fitting?', answer: 'Use its result to shortlist trials, and check which inputs and setup assumptions it uses. A number cannot settle whether you like the actual head, grip or balance. Get help if the trial exposes discomfort or unresolved lie and setup questions.' },
    { question: 'Can I cut down my putter or just grip lower?', answer: 'A lower hand position is a useful preview, not proof that cutting will reproduce the feel. Ask a builder for the finished grip and weighting plan and an all-in quote. Confirm manufacturer adjustment and warranty limits first.' },
    { question: 'Will the right length fix pushed or pulled putts?', answer: 'Do not diagnose length from the direction of a miss alone. Compare outcomes while keeping the task consistent, then have setup and the other build specifications checked if the problem persists. This guide promises no automatic scoring improvement.' },
    { question: 'Is a premium putter worth buying for a beginner?', answer: 'Only consider it after it fits your spending ceiling and the complete build wins your comparison for a reason you can describe. If a less expensive option works as well, our recommendation is to keep the saving. Price is not fitting evidence.' },
    { question: 'When should I check putter length again?', answer: 'Recheck after a deliberate posture, grip or build change, or if your setup stops feeling comfortable. Compare with your previous notes. Age, handicap or one poor round alone is not a reason to order a new length.' },
  ],
  sources: [
    { name: 'Cleveland: HB SOFT 2 11C specifications and custom options', url: 'https://us.dunlopsports.com/cleveland-golf/clubs/putters/hb-soft-2/hb-soft-2-putter-model-11c/MHBSOFT2-11C.html', note: 'Primary source for the exact head, factory specifications, length-dependent counterweight and adjustment limits. Manufacturer fitting categories are attributed, not independent test results. Product image: Cleveland.' },
    { name: 'Callaway: putter buying guide', url: 'https://www.callawaygolf.com/golf-guides/putter-buying-guide', note: 'Source for the typical length range and its putting-stance measurement estimate. We use these as trial starting points, not a universal prescription.' },
    { name: 'Scotty Cameron: Custom Shop FAQs', url: 'https://www.scottycameron.com/faqs/', note: 'Source for its specific grip-butt to bottom-center-of-face measurement convention; confirm the convention for another maker.' },
    { name: 'Scotty Cameron: Art of Putting', url: 'https://www.scottycameron.com/art-of-putting/', note: 'Manufacturer setup guidance illustrates why eye position and posture assumptions matter when comparing charts.' },
    { name: 'Scotty Cameron: putter design and fitting discussion', url: 'https://www.scottycameron.com/articles/austie-rollinson-senior-director-putter-rd/', note: 'Primary explanation of hand height, setup, weighting and length. Our budget paths and comparison protocol are editorial recommendations; no hands-on performance test was conducted.' },
  ],
  relatedProducts: [],
};
