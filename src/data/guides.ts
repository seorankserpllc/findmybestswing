import { EditorialGuide } from '../types/domain';

import { PUTTER_LENGTH_GUIDE } from './putterLengthGuide';
import { BEGINNER_WEDGE_GUIDE } from './beginnerWedgeGuide';
import { TWENTY_HANDICAP_IRONS_GUIDE } from './twentyHandicapIronsGuide';
import { BALL_COMPRESSION_GUIDE } from './ballCompressionGuide';
import { GRIP_REPLACEMENT_GUIDE } from './gripReplacementGuide';
import { GLOVE_FIT_GUIDE } from './gloveFitGuide';
import { BAG_STORAGE_GUIDE } from './bagStorageGuide';
import { TEMPO_GRIP_TRAINER_GUIDE } from './tempoGripTrainerGuide';
import { BALL_WASHER_GUIDE } from './ballWasherGuide';
import { IRON_COVERS_GUIDE } from './ironCoversGuide';
import { GOLF_SPIKE_GUIDE } from './golfSpikeGuide';

export const EDITORIAL_GUIDES: EditorialGuide[] = [
  GOLF_SPIKE_GUIDE,
  IRON_COVERS_GUIDE,
  BALL_WASHER_GUIDE,
  TEMPO_GRIP_TRAINER_GUIDE,
  BAG_STORAGE_GUIDE,
  GLOVE_FIT_GUIDE,
  GRIP_REPLACEMENT_GUIDE,
  TWENTY_HANDICAP_IRONS_GUIDE,
  BEGINNER_WEDGE_GUIDE,
  PUTTER_LENGTH_GUIDE,
  {
    id: 'driver-shaft-flex-swing-speed-matrix',
    slug: 'driver-shaft-flex-swing-speed-matrix',
    title: 'Driver Shaft Flex by Swing Speed: A Starting Chart That Accounts for Tempo',
    subtitle: 'Use speed to choose two flexes to test, then let strike pattern, dispersion and feel decide the winner.',
    readingTimeMinutes: 10,
    publishedDate: 'September 28, 2026',
    authorName: 'FindMyBestSwing Editorial Team',
    authorTitle: 'Equipment research and buyer guidance',
    excerpt: 'A practical driver-shaft buying guide for golfers choosing between A, R, S and X flex, including the limits of flex labels and a no-guesswork test plan.',
    verdict: 'Swing speed can narrow the shelf, but it cannot select a shaft by itself. Start with the two neighboring flexes in your speed band and buy the one that improves centered contact and left-to-right consistency without forcing your tempo.',
    keyTakeaways: [
      'Flex letters are not standardized across brands or even across different shaft families from the same brand.',
      'Driver speed is a useful first filter; transition, shaft weight, bend profile, head, playing length and strike pattern can change the final fit.',
      'A shaft that is too soft does not automatically hook, and one that is too stiff does not automatically slice. Delivery and timing are individual.',
      'Compare complete shafts—not just R versus S—and test them in the same head, loft, length and ball whenever possible.',
    ],
    decisionTable: [
      { situation: 'Under 75 mph', startingPoint: 'Lightweight L or A flex', whyItFits: 'A lighter, more responsive build may be easier to swing and launch.', verifyBeforeBuying: 'Compare total weight and strike location; do not buy by the gendered label.' },
      { situation: '75–85 mph', startingPoint: 'A or softer R flex', whyItFits: 'This is a common overlap band where tempo can move the answer either way.', verifyBeforeBuying: 'Test both and keep the tighter dispersion, not simply the longer best shot.' },
      { situation: '85–95 mph', startingPoint: 'R, with S as the adjacent test', whyItFits: 'Many stock regular shafts are designed around this broad speed range.', verifyBeforeBuying: 'An abrupt transition may favor the firmer option; a smooth load may not.' },
      { situation: '95–105 mph', startingPoint: 'S, with R or X as a comparison', whyItFits: 'Stiff is the usual starting label, but profile and weight still matter.', verifyBeforeBuying: 'Reject any option that improves one perfect drive but widens the normal pattern.' },
      { situation: 'Over 105 mph', startingPoint: 'X or a firm S profile', whyItFits: 'Higher speed often needs more stability, but X is not one universal specification.', verifyBeforeBuying: 'Use measured delivery, strike and dispersion; avoid buying from speed alone.' },
    ],
    contentSections: [
      {
        heading: 'The fastest useful answer',
        body: [
          'If you know your normal driver speed, use the chart above to pick a starting flex and one adjacent flex. If you are on a boundary, test both. If you do not know your speed, a launch-monitor session is more useful than estimating from one unusually long drive.',
          'Major fitting guides agree on the direction—faster swings generally start firmer—but disagree on the exact cutoffs. That disagreement is evidence that the letter on the shaft is a product-specific starting point, not a universal measurement.',
        ],
        callout: { type: 'info', title: 'What to bring to a fitting', message: 'Bring your current driver and the ball you normally play. Ask to keep the head, loft and playing length constant while comparing shafts so the result is interpretable.' },
      },
      {
        heading: 'Why speed alone cannot finish the fit',
        body: [
          'Two golfers can reach the same top speed differently. A quick change of direction can load a shaft differently from a smooth build-up, which is why TaylorMade’s current fitting matrix separates swing profiles in addition to clubhead speed.',
          'Weight and bend profile can be as noticeable as the flex label. A heavier shaft can improve awareness and control for one player while costing speed or comfort for another. Torque, tip behavior and playing length also alter feel and delivery, but none of those specs should be treated as a guaranteed launch or shot-shape switch.',
          'The clubhead matters too. A shaft that performs well in one head can produce a different total weight, swing weight and delivery in another. Fit the assembled club, not an isolated specification sheet.',
        ],
      },
      {
        heading: 'How to choose between two shafts in 20 useful swings',
        body: [
          'Warm up first. Then hit alternating groups with each shaft rather than finishing all swings with one before trying the other. Use the same tee height and ball model.',
          'Ignore obvious mishits, but do not delete every poor result. Your normal misses are part of the buying decision. Compare strike location, start-line spread, left-to-right dispersion, carry consistency and whether your tempo felt natural.',
          'Choose the shaft that makes the middle of your pattern better. A single longest drive is a bad tie-breaker. If the numbers are effectively tied, choose the option that feels easier to return to the center of the face late in the session.',
        ],
        callout: { type: 'warning', title: 'Do not diagnose flex from one miss', message: 'A slice is not proof that a shaft is too stiff, and a hook is not proof that it is too soft. Face angle, path, strike and setup can create the same ball flight.' },
      },
      {
        heading: 'Buying online without a full fitting',
        body: [
          'Write down the exact shaft family, weight class, flex, adapter, playing length and grip—not just “stiff.” Confirm whether the listing is a complete assembled shaft or an uncut shaft that still needs an adapter and grip.',
          'Choose a seller with a usable return or exchange policy. If you already own an adjustable driver, a compatible assembled shaft can be a lower-risk experiment than buying a whole new driver, but adapter compatibility and final playing length must match.',
          'If pain, fatigue or speed loss appears during testing, stop. A different weight or length may be more relevant than moving one flex label.',
        ],
      },
      {
        heading: 'Pros and cons of the three buying paths',
        body: [
          'Stock shaft: easiest and usually best value. The trade-off is fewer weight and profile choices, and the printed flex may not compare cleanly with another model.',
          'Aftermarket assembled shaft: useful when you already like the driver head and know the exact build. The trade-off is paying for a component that may not improve the complete club.',
          'Professional fitting: best when you are between bands, have an unusual transition, fight a wide two-way miss or are making an expensive purchase. The trade-off is the fitting cost and the need to separate useful data from an upsell.',
        ],
      },
    ],
    buyingChecklist: [
      'Measure your normal driver speed after warming up; record a range, not only the maximum.',
      'Shortlist a starting flex and one adjacent flex in the same shaft family.',
      'Keep head, loft, ball, tee height and playing length constant during the comparison.',
      'Compare centered strike rate, dispersion and carry consistency before peak distance.',
      'Confirm exact weight, adapter, final length, grip and return policy on the order.',
      'Save the launch-monitor report or written build spec for future replacements.',
    ],
    faqs: [
      { question: 'Should I play regular or stiff flex at 95 mph?', answer: 'Treat 95 mph as an overlap, not a verdict. Test R and S in the same shaft family. A quicker transition may prefer S; a smoother load may prefer R. Keep the option with the better strike and dispersion pattern.' },
      { question: 'Will a stiffer shaft fix my slice?', answer: 'Not reliably. A slice can come from face angle, swing path, heel strike or setup. Shaft feel may change delivery for an individual golfer, but flex is not a universal anti-slice setting.' },
      { question: 'Does a softer shaft always launch higher?', answer: 'No. Published bend profile, weight and torque can suggest tendencies, but your delivered loft and strike decide the actual flight. Test the assembled club.' },
      { question: 'Is shaft weight more important than flex?', answer: 'They solve different parts of the fit and interact. Weight can change speed, balance and awareness; flex and profile change how the shaft loads and feels. Compare complete builds rather than ranking one spec universally above the other.' },
      { question: 'Can I use carry distance to estimate shaft flex?', answer: 'Only as a rough fallback. Strike, launch, spin, altitude and ground conditions can make equal swing speeds travel very different distances. Measured clubhead speed is a better starting input.' },
      { question: 'What if two flexes produce nearly identical numbers?', answer: 'Choose the one that feels easier to repeat, especially late in the session, and check the return policy. A tied test does not justify paying a premium for a more exotic label.' },
    ],
    sources: [
      { name: 'TaylorMade 2026 custom shaft options and fitting matrix', url: 'https://www.taylormadegolf.com/on/demandware.static/Sites-TMaG-Site/Sites-TMaG-Library/default/v1535702851728/pdf/Custom_Shafts.pdf', note: 'Primary source for speed bands, swing-profile differences and model-specific shaft fitting.' },
      { name: 'Callaway driver buying guide', url: 'https://prd-sfcc.callawaygolf.com/golf-guides/driver-buying-guide.html', note: 'Primary source for flex, weight and driver-fit variables.' },
      { name: 'Callaway custom fitting overview', url: 'https://prd-sfcc.callawaygolf.com/custom-fitting', note: 'Primary source describing head, loft, flex, shaft and weight as parts of the complete fit.' },
      { name: 'MyGolfSpy driver shaft flex chart', url: 'https://mygolfspy.com/news-opinion/instruction/golf-driver-shaft-flex-chart-find-the-right-flex-for-your-swing-speed/', note: 'Independent comparison used to benchmark the buyer questions covered by ranking guides.' },
    ],
    relatedProducts: ['taylormade-stealth-2-driver', 'callaway-paradym-driver'],
  },
  BALL_COMPRESSION_GUIDE,
  {
    id: 'tall-golfer-club-fitting-guide',
    slug: 'tall-golfer-club-fitting-guide',
    title: 'Golf Clubs for Tall Golfers: Measure First, Then Choose Length and Lie',
    subtitle: 'Height starts the question. Height plus wrist-to-floor creates a static starting point; impact and ball flight finish the fit.',
    readingTimeMinutes: 10,
    publishedDate: 'September 28, 2026',
    authorName: 'FindMyBestSwing Editorial Team',
    authorTitle: 'Equipment research and buyer guidance',
    excerpt: 'A purchase-focused guide for tall golfers comparing standard clubs, tall package sets, custom irons and retrofitting—without assuming every 6-foot-2 golfer needs the same build.',
    verdict: 'Do not order “+1 inch and upright” from height alone. Measure height and wrist-to-floor, use a manufacturer chart as a static starting point, then verify iron length and lie dynamically. Tall golfers with long arms may still fit standard length.',
    keyTakeaways: [
      'PING’s official static chart uses both height and wrist-to-floor to recommend a starting length and lie color code.',
      'Length and lie are separate choices: length affects posture, contact and balance; lie affects how a lofted face points at impact.',
      'Adding length changes total weight, swing weight and how the club plays, so an extension is not a free ergonomic adjustment.',
      'Irons and wedges deserve the closest length-and-lie check; driver, woods and putter should be fit for their own tasks rather than scaled by one formula.',
    ],
    decisionTable: [
      { situation: 'Tall with long arms and average wrist-to-floor', startingPoint: 'Test standard length first', whyItFits: 'Longer arms can offset height, leaving hand position near a standard range.', verifyBeforeBuying: 'Check posture, centered contact and dynamic lie instead of assuming “tall” sizing.' },
      { situation: 'Tall with high wrist-to-floor measurement', startingPoint: 'Test longer irons alongside standard', whyItFits: 'A longer starting build may allow comfortable posture and centered contact.', verifyBeforeBuying: 'Confirm lie dynamically; extra length also changes balance and effective playing geometry.' },
      { situation: 'Beginner who needs a complete bag now', startingPoint: 'Tall-size package set if its published specs match your starting fit', whyItFits: 'It is simple and often less expensive than custom-building every club.', verifyBeforeBuying: 'Confirm actual club lengths, included clubs, flex, handedness and return policy—not just the word “tall.”' },
      { situation: 'You already own irons you like', startingPoint: 'Ask a club builder to evaluate extensions, new shafts and lie adjustment', whyItFits: 'Retrofitting can preserve familiar heads and control cost.', verifyBeforeBuying: 'Get the final swing weight, grip size, bendability and total quote before work begins.' },
      { situation: 'You strike the center but shots start consistently off line', startingPoint: 'Test dynamic lie before changing length', whyItFits: 'Start direction with irons may point to delivered lie rather than club length.', verifyBeforeBuying: 'Use impact marks or a line test with a fitter; do not diagnose from divots alone.' },
    ],
    contentSections: [
      {
        heading: 'Measure wrist-to-floor correctly',
        body: [
          'Wear the shoes you normally play in and stand naturally on a level, hard surface. Let both arms hang relaxed. Have another person measure vertically from the prominent wrist crease to the floor; do not bend sideways to read the tape yourself.',
          'Record height and wrist-to-floor, then plot both on the current chart from the manufacturer whose clubs you are considering. “Standard” is not one universal length or lie across brands, so use the chart as a brand-specific starting point.',
        ],
        callout: { type: 'info', title: 'Measure twice', message: 'Repeat the measurement and have a second person check it. A small measuring error can move a static chart recommendation.' },
      },
      {
        heading: 'Length and lie solve different problems',
        body: [
          'Length influences how far you stand from the ball, your posture, strike location and the club’s balance. Too short may feel cramped, but standing poorly can also be a technique issue; pain is not a reason to self-prescribe an exact extension.',
          'Lie angle describes how the shaft and sole are oriented. Because an iron face has loft, a delivered lie that is too upright can point the face left of the target for a right-handed golfer; too flat can point it right. The effect reverses for a left-handed golfer.',
          'Static height and wrist-to-floor cannot see how you deliver the club. That is why the final check should use ball flight and face-contact evidence with the candidate length.',
        ],
      },
      {
        heading: 'Standard, tall package set, custom order or retrofit?',
        body: [
          'Standard clubs are the best-value answer when your measurements and strike fit them. Do not pay for extra length merely because you are tall.',
          'A tall package set is convenient for a new golfer who needs an entire bag. Its limitation is that “tall” may hide one fixed extension, one lie, one shaft flex and a limited club makeup.',
          'A custom-order iron set is the cleanest route when you know length, lie, shaft, grip and head. It costs more, but the build arrives integrated rather than modified later.',
          'Retrofitting can make sense for heads you already like. Extensions, replacement shafts, lie bending and new grips all have limits and can change feel, so get a club builder’s written build plan and total cost first.',
        ],
      },
      {
        heading: 'Fit the bag by club type',
        body: [
          'Irons: establish a comfortable test length, then verify lie and strike. Ask whether the recommendation applies uniformly through the set or changes by club.',
          'Wedges: test full and partial shots. Some golfers prefer wedges slightly shorter than a uniformly extended iron progression for control; the correct answer is the one that preserves posture and contact on the shots you play.',
          'Driver and fairway woods: longer is not automatically better for a tall player. These clubs already have long shafts; center contact and control should decide playing length.',
          'Putter: eye position, setup comfort, stroke shape and where the ball sits relative to your feet matter more than a height-only chart. Test the posture you can repeat without tension.',
        ],
        callout: { type: 'warning', title: 'Do not order every club at one blanket extension', message: 'An iron recommendation does not automatically transfer to driver, fairway woods, wedges and putter. Each category has a different job and starting length.' },
      },
      {
        heading: 'A fitting session that protects your budget',
        body: [
          'Tell the fitter your budget before testing. Ask to compare standard length with the static-chart recommendation using the same or similar head and shaft. Record the exact club number, measured playing length, lie adjustment, shaft model and flex, grip and final price.',
          'Judge the normal pattern: posture, strike location, start direction, carry consistency and comfort. Do not allow three good swings to end the test. You need enough shots to see your ordinary miss.',
          'Before ordering, ask whether lie is measured relative to the brand’s standard, whether the head can be bent later, and whether the shop will recheck lie after delivery.',
        ],
      },
    ],
    buyingChecklist: [
      'Measure height and wrist-to-floor twice in golf shoes on a hard, level floor.',
      'Use the current chart for the manufacturer you plan to buy; standards differ.',
      'Test standard length and the recommended longer option in the same club category.',
      'Verify dynamic lie after choosing length, using ball flight and face-contact evidence.',
      'Check shaft weight and flex, grip size, swing weight and the actual final club length.',
      'Get the full price, return policy and post-delivery lie-check policy in writing.',
      'Fit driver, woods, wedges and putter separately rather than copying the iron adjustment.',
    ],
    faqs: [
      { question: 'Do all golfers over 6 feet 2 inches need longer clubs?', answer: 'No. Arm length changes wrist-to-floor, and delivery changes the dynamic result. Some tall golfers fit standard length; others need extra length. Use height plus wrist-to-floor as the starting point and hit both options.' },
      { question: 'Can I buy a tall package set without a fitting?', answer: 'You can if the published lengths, flex, handedness and club makeup are close to your measured starting point and the seller has a good return policy. A brief static measurement is still better than buying from the “tall” label alone.' },
      { question: 'Should longer irons also be more upright?', answer: 'Not automatically. Length changes how the club sits and swings, but the final lie should be checked dynamically after length is chosen. Order lie as a separate specification relative to that manufacturer’s standard.' },
      { question: 'Can a shop extend my current irons?', answer: 'Often, but feasibility depends on shaft material, existing build, desired change and the club builder’s limits. Ask how the work changes swing weight, total weight, grip and warranty before approving it.' },
      { question: 'Do I need longer wedges too?', answer: 'Maybe, but do not copy the iron adjustment blindly. Test full swings and partial shots. The wedge length should preserve comfortable posture and predictable contact for the short-game motions you use.' },
      { question: 'Does a tall golfer need a longer driver?', answer: 'Not simply because of height. Driver length is primarily a speed-versus-center-contact decision, and many golfers gain control from a shorter build. Test strike and dispersion.' },
      { question: 'What exact specs should appear on my order?', answer: 'Record the model and club makeup, final playing length or adjustment from that brand’s standard, lie adjustment, shaft model and flex, grip model and size, handedness and any swing-weight target.' },
    ],
    sources: [
      { name: 'PING fitting color code chart', url: 'https://ping.com/fitting/color-code-chart', note: 'Primary source for using height and wrist-to-floor together as a static length-and-lie starting point.' },
      { name: 'Callaway custom fitting overview', url: 'https://prd-sfcc.callawaygolf.com/custom-fitting', note: 'Primary source for fitting head, loft, flex, shaft and weight together.' },
      { name: 'Golf Monthly: how to measure wrist-to-floor', url: 'https://www.golfmonthly.com/features/the-game/how-to-measure-wrist-to-floor-246230', note: 'Established instructional source for the measurement method and its role with height.' },
    ],
    relatedProducts: ['wilson-profile-platinum', 'callaway-rogue-st-max-os-irons', 'odyssey-white-hot-og-putter'],
  },
];

export function getGuideBySlug(slug: string): EditorialGuide | undefined {
  return EDITORIAL_GUIDES.find(g => g.slug === slug);
}
