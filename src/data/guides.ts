import { EditorialGuide } from '../types/domain';

export const EDITORIAL_GUIDES: EditorialGuide[] = [
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
  {
    id: 'golf-ball-compression-chart-velocity-guide',
    slug: 'golf-ball-compression-chart-velocity-guide',
    title: 'Golf Ball Compression Chart: Use It for Feel, Not as a Speed Limit',
    subtitle: 'Pick a ball from the green back to the tee—cover, short-game control, flight, feel and budget come before one compression number.',
    readingTimeMinutes: 11,
    publishedDate: 'September 28, 2026',
    authorName: 'FindMyBestSwing Editorial Team',
    authorTitle: 'Equipment research and buyer guidance',
    excerpt: 'Compression is useful, but it is not an industry-standard speed limit. This guide turns it into a practical shortlist and on-course buying test.',
    verdict: 'Do not buy a golf ball only because a chart says your swing can or cannot compress it. Use compression as a feel and broad construction clue, then choose by greenside control, flight, durability, price and the results of a two-ball on-course test.',
    keyTakeaways: [
      'Compression measures relative firmness, but brands and independent labs do not all use the same test, so cross-brand numbers are approximate.',
      'Modern balls are designed as systems: core, mantle layers, cover and dimples all influence speed, spin, flight and feel.',
      'A slower swing can still play a urethane tour ball; the real questions are whether its short-game control and flight help enough to justify the cost.',
      'For frequent ball loss, a durable ionomer ball can be the smarter scoring purchase even when a premium ball spins more around the green.',
    ],
    decisionTable: [
      { situation: 'You lose several balls per round', startingPoint: 'Durable two-piece ionomer ball', whyItFits: 'Lower replacement cost and durable cover reduce the penalty of lost or scuffed balls.', verifyBeforeBuying: 'Make sure the feel is acceptable on putts and the ball still holds your typical approach shots.' },
      { situation: 'You need chips and pitches to stop sooner', startingPoint: 'Urethane-covered multilayer ball', whyItFits: 'Urethane models are generally designed for more greenside control.', verifyBeforeBuying: 'Test 30–70 yard shots and chips before judging it with the driver.' },
      { situation: 'You prefer a soft impact feel', startingPoint: 'Lower-compression or soft-feel model', whyItFits: 'Compression is strongly related to perceived firmness, though cover and club also matter.', verifyBeforeBuying: 'Putt and chip with it; do not assume softer automatically means longer.' },
      { situation: 'You want a firmer response or play in heavy wind', startingPoint: 'Medium-to-firm model with the flight you need', whyItFits: 'Firm feel and flight are model-specific; compression alone does not set trajectory.', verifyBeforeBuying: 'Compare peak height and dispersion outdoors or with reliable launch data.' },
      { situation: 'You only know driver swing speed', startingPoint: 'Use a broad band to build a shortlist, not a rule', whyItFits: 'Speed can rule out an obvious feel mismatch but does not describe your scoring shots.', verifyBeforeBuying: 'Test from green to tee and keep the ball that saves the most strokes.' },
    ],
    contentSections: [
      {
        heading: 'The chart—and the limitation that matters',
        body: [
          'Common retail charts group under roughly 85 mph with softer balls, 85–105 mph with mid-compression balls and faster speeds with firmer balls. Those bands can create a shortlist, but they are not equipment law.',
          'Titleist’s current education material says compression is only one design element and that measurement methods differ. That contradicts the common claim that a player below a fixed speed cannot use a premium ball. Every full swing deforms the ball; the amount and resulting performance vary by the whole design.',
        ],
        callout: { type: 'warning', title: 'No universal compression scale', message: 'Treat model compression figures as approximate unless they come from the same test source. A “70” from one list may not be directly comparable with a “70” from another.' },
      },
      {
        heading: 'Choose in this order: green, approach, tee, wallet',
        body: [
          'Start with the shortest shots. Can you predict rollout on chips? Does the ball give enough feedback on putts? On partial wedges, does it stop where your game needs it to stop?',
          'Next test full irons for carry consistency, peak height and the ability to hold a green. Then compare driver flight and dispersion. A few extra yards are not useful if the ball removes the short-game control you rely on.',
          'Finally, include cost per playable round. A premium ball that you replace after every lost tee shot may be a poor fit for your current game. A value urethane model or durable ionomer model can be the better decision even if it is not the theoretical performance winner.',
        ],
      },
      {
        heading: 'Cover material explains more of the buying trade-off',
        body: [
          'Callaway’s buying guide distinguishes durable ionomer or Surlyn-style covers from softer urethane covers that are used to create more feel and control. The category is not absolute—individual models behave differently—but it is usually more actionable than an isolated compression number.',
          'Choose ionomer when durability, lower cost and lower full-shot spin are priorities. Choose urethane when predictable greenside spin and approach control justify the higher price. Multilayer construction lets designers separate driver and wedge behavior more than a basic two-piece construction can.',
        ],
      },
      {
        heading: 'A fair two-ball test you can run in one round',
        body: [
          'Buy sleeves, not dozens, of two finalists. Use the same two models for several holes and compare from similar lies without delaying play. Start with putting, chips and partial wedges, then full irons and tee shots.',
          'Track three things: proximity or rollout on scoring shots, penalty-worthy dispersion, and confidence in feel. Do not switch models after every bad swing. The goal is to identify a repeatable pattern, not reward one perfect shot.',
          'If performance is tied, use price, durability and availability as the tie-breakers. The easiest ball to replace consistently is often a better long-term choice than a model that is occasionally unavailable.',
        ],
        callout: { type: 'tip', title: 'Test the ball you will actually buy', message: 'Use the same generation and model marking. Manufacturers revise constructions, so a result from an older version may not transfer perfectly to the current box.' },
      },
      {
        heading: 'Pros and cons by ball type',
        body: [
          'Soft two-piece ionomer: usually affordable, durable and comfortable-feeling. The trade-off is generally less greenside spin than a urethane model.',
          'Value urethane: adds short-game control without always reaching tour-ball pricing. The trade-off can be lower cover durability and fewer flight or feel options.',
          'Premium multilayer urethane: offers the broadest separation of tee, iron and wedge performance. The trade-off is cost, especially for golfers who lose balls often.',
        ],
      },
    ],
    buyingChecklist: [
      'Set a realistic price per dozen based on how many balls you lose or scuff.',
      'Choose whether greenside stopping power or cover durability matters more.',
      'Select two models with the feel and flight you prefer; use compression only as a shortlist clue.',
      'Buy one sleeve of each before buying in bulk.',
      'Test from green to tee: putts, chips, partial wedges, irons, then driver.',
      'Record rollout, approach stopping, driver dispersion and cover wear.',
    ],
    faqs: [
      { question: 'Can an 80 mph swing use a Pro V1?', answer: 'Yes. Swing speed alone does not prevent a golfer from using a premium urethane ball. The decision is whether the flight, short-game control, feel and price improve that golfer’s scoring compared with alternatives.' },
      { question: 'Does lower compression automatically mean more distance for slow swings?', answer: 'No. Compression is only one part of the design. Some golfers prefer the feel or flight of a softer ball, but distance depends on the complete construction and the player’s launch and strike.' },
      { question: 'Will a low-compression ball fix a slice?', answer: 'No ball fixes an open face-to-path relationship. A lower-spinning model may curve less for a particular player, but the ball cannot correct the swing cause.' },
      { question: 'Should seniors always play a soft golf ball?', answer: 'No. Age and gender are not fitting inputs by themselves. Choose by flight, short-game needs, feel, durability and budget, then verify on the course.' },
      { question: 'Is urethane worth paying for?', answer: 'It can be if extra control on chips, pitches and approaches changes outcomes for you. If you lose many balls or do not see a scoring difference, a durable ionomer model may be better value.' },
      { question: 'What should I do in cold weather?', answer: 'Expect less distance from the conditions and your body, keep balls at normal room temperature before play, and choose a feel you can judge. Do not heat a ball beyond normal temperature or rely on an exact compression-change claim.' },
      { question: 'How often should I change golf ball models?', answer: 'Retest when the manufacturer releases a new generation, your swing or short-game needs change, or your current ball becomes hard to buy. Consistency is valuable, so avoid changing only because of one poor round.' },
    ],
    sources: [
      { name: 'Titleist Learning Lab: Golf Ball Compression', url: 'https://www.titleist.com/learning-lab/performance/golf-ball-compression', note: 'Primary source for what compression measures, the lack of a universal method and the role of total construction.' },
      { name: 'Titleist golf ball fitting', url: 'https://www.titleist.com/fitting/golf-ball-fitting', note: 'Primary source for fitting by flight, spin and feel rather than a single speed number.' },
      { name: 'Titleist green-to-tee fitting approach', url: 'https://mediacenter.titleist.com/en-US/191125-titleist-golf-ball-fitting-experts-now-available-for-virtual-consultations/', note: 'Primary source for testing scoring shots before tee shots.' },
      { name: 'Callaway golf ball buying guide', url: 'https://odysseygolfqa.callawaygolf.com/golf-guides/golf-ball-buying-guide', note: 'Primary source for cover and construction trade-offs.' },
    ],
    relatedProducts: ['callaway-supersoft-golf-balls', 'titleist-pro-v1-golf-balls', 'srixon-soft-feel-golf-balls', 'taylormade-distance-plus-golf-balls'],
  },
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
