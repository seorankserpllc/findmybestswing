import { Product } from '../types/domain';

export const PRODUCTS: Product[] = [
  // ==========================================
  // COMPLETE PACKAGE SETS (ALL-IN-ONE BOX)
  // ==========================================
  {
    id: 'callaway-strata-12-piece',
    slug: 'callaway-strata-12-piece',
    brand: 'Callaway',
    model: 'Strata 12-Piece Complete Golf Set with Bag',
    category: 'complete-set',
    headline: 'The Best All-In-One Starter Set on Amazon',
    summary: 'A complete golf bag with everything you need to start playing this weekend. The driver has a huge sweet spot, the hybrid replaces tricky long irons, and the mallet putter makes lining up putts simple.',
    asin: 'B07H28JYMW',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$',
    priceTierDescription: 'Complete Package: Driver, 3-Wood, 5-Hybrid, 6-9 Irons, PW, Putter, Stand Bag',
    mediaCdnUrl: '/images/products/callaway-strata-12-piece.jpg',
    fallbackIcon: 'set',
    badge: 'Amazon #1 Best Seller',
    bestFor: 'Beginners & high handicappers who want an easy, complete set ready to play',
    targetSwingSpeed: ['under-75', '75-85', '85-95'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['standard', 'petite'],
    recommendedShaftFlex: 'Regular / Uniflex',
    specs: [
      { label: 'Clubs in Bag', value: 'Driver, 3-Wood, 5-Hybrid, 6-9 Irons, Pitching Wedge, Putter' },
      { label: 'Driver Size', value: '460cc Big Head with 10.5° Loft (easy to hit in the air)' },
      { label: 'Shafts', value: 'Lightweight graphite on woods; durable steel on irons' },
      { label: 'Golf Bag', value: 'Lightweight stand bag with backpack straps & rain cover' },
    ],
    scorecard: {
      forgiveness: 9.6,
      ballSpeedDistance: 8.8,
      feelAcoustics: 8.5,
      dispersionControl: 8.9,
      buildValue: 9.8,
      overallRating: 9.1,
    },
    pros: [
      'Has every club you need in one box so you do not have to buy clubs one by one',
      'The 5-hybrid is much easier to hit high than an old-school long iron',
      'The putter has a clean line on top that shows you exactly where you are aiming',
      'Costs way less than buying each club separately',
    ],
    cons: [
      'If you already swing very fast (over 100 MPH), the shafts may bend a bit too much',
      'Does not have a sand wedge (comes with a pitching wedge only)',
    ],
    failureModesAndCare: 'Do not leave the clubs in a hot car trunk in the summer, because extreme heat can weaken the glue holding the club heads. Always use the headcovers when you are not playing.',
    faqs: [
      {
        question: 'Is this set good for someone who has never played golf before?',
        answer: 'Yes! It is the most popular starter set because the clubs are lightweight, have big sweet spots, and forgive off-center hits.'
      },
      {
        question: 'What height golfer does this set fit?',
        answer: 'It fits standard heights between 5’7” and 6’1”. If you are taller than 6’2”, look at the Wilson Profile set with the tall sizing option.'
      }
    ],
    reviewDate: 'September 2026',
  },
  {
    id: 'wilson-profile-platinum',
    slug: 'wilson-profile-platinum',
    brand: 'Wilson',
    model: 'Profile SGI / Platinum Complete Golf Set',
    category: 'complete-set',
    headline: 'The Top Choice with Real Tall-Golfer Sizing Available',
    summary: 'Wilson is one of the only brands that makes complete sets with a true +1 inch tall option right from the factory. Comes with forgiving irons, a big driver, and both a pitching wedge and sand wedge.',
    asin: 'B08NXY6X89',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$',
    priceTierDescription: 'Complete 10-Club Set with Stand Bag and Sand Wedge Included',
    mediaCdnUrl: '/images/products/wilson-profile-platinum.png',
    fallbackIcon: 'set',
    badge: 'Best for Tall Golfers (6’2”+)',
    bestFor: 'Tall golfers (6’2”+) and beginners who want a sand wedge included',
    targetSwingSpeed: ['under-75', '75-85', '85-95'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['tall', 'extra-tall', 'standard'],
    recommendedShaftFlex: 'Regular Flex',
    specs: [
      { label: 'Available Sizes', value: 'Standard (5’7” to 6’1”) and Tall (+1.0” for 6’2” and over)' },
      { label: 'Clubs in Bag', value: 'Driver, 5-Wood, 5-Hybrid, 6-9 Irons, Pitching Wedge, Sand Wedge, Putter' },
      { label: 'Sand Wedge', value: 'Included (wide sole to get out of beach-sand bunkers easily)' },
      { label: 'Putter', value: 'Heel-toe weighted mallet putter with soft face insert' },
    ],
    scorecard: {
      forgiveness: 9.5,
      ballSpeedDistance: 8.7,
      feelAcoustics: 8.6,
      dispersionControl: 8.8,
      buildValue: 9.6,
      overallRating: 9.0,
    },
    pros: [
      'Tall sizing option keeps golfers 6’2” and over from having to hunch their back',
      'Includes a true sand wedge so bunker shots are easy right away',
      'Wide bottoms on the irons slide across the grass so you do not dig deep dirt holes',
      'Lightweight stand bag is comfortable to carry or put on a riding golf cart',
    ],
    cons: [
      'The grips are standard thickness; golfers with very big hands might want thicker grips later',
    ],
    failureModesAndCare: 'Wipe wet grass and dirt off the club faces after your round with a towel. Keep headcovers on the driver and woods so they do not bang against each other in the cart.',
    faqs: [
      {
        question: 'Why is this set great for tall golfers?',
        answer: 'The tall version has 1-inch longer shafts and a slightly upright club angle. That means tall players can stand comfortably at address without aching lower backs.'
      },
      {
        question: 'Does it come with a sand wedge?',
        answer: 'Yes! Unlike many other starter sets, the Wilson Profile includes both a pitching wedge and a sand wedge for green-side bunker shots.'
      }
    ],
    reviewDate: 'September 2026',
  },

  // ==========================================
  // DRIVERS
  // ==========================================
  {
    id: 'taylormade-stealth-2-driver',
    slug: 'taylormade-stealth-2-driver',
    brand: 'TaylorMade',
    model: 'Stealth 2 Carbon Face Driver',
    category: 'driver',
    headline: 'High Ball Speed with 60 Layers of Lightweight Carbon',
    summary: 'By using a red carbon face instead of heavy metal, TaylorMade made the face lighter and shifted heavy weight to the back of the head. That keeps off-center shots flying straight and far.',
    asin: 'B0BR8V5R8B',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$$',
    priceTierDescription: 'High-Tech Carbonwood with Adjustable Loft Sleeve',
    mediaCdnUrl: '/images/products/taylormade-stealth-2-driver.png',
    fallbackIcon: 'driver',
    badge: 'Maximum Distance',
    bestFor: 'Golfers who want to hit their longest drives and adjust their loft angle',
    targetSwingSpeed: ['85-95', '95-105', '105-plus'],
    targetHandicap: ['mid-10-19', 'low-0-9', 'high-20-plus'],
    targetHeight: ['standard', 'tall'],
    recommendedShaftFlex: 'Regular or Stiff',
    specs: [
      { label: 'Head Size', value: '460cc Maximum Legal Size' },
      { label: 'Face Material', value: '60X Carbon Twist Face' },
      { label: 'Adjustable Sleeve', value: 'Yes, change loft up or down with a wrench' },
      { label: 'Standard Loft', value: '10.5° (Recommended for most players)' },
    ],
    scorecard: {
      forgiveness: 9.5,
      ballSpeedDistance: 9.9,
      feelAcoustics: 9.3,
      dispersionControl: 9.2,
      buildValue: 9.0,
      overallRating: 9.4,
    },
    pros: [
      'The ball flies fast off the face even when you miss the dead center',
      'The red carbon face looks sharp and has a clean, solid sound at impact',
      'You can easily adjust the loft higher or lower using the included tool',
    ],
    cons: [
      'Higher price point because it uses modern lightweight carbon materials',
    ],
    failureModesAndCare: 'Never hit scuffed range balls covered in sand or dirt, which can scratch the face coating. Wipe clean with a soft wet towel.',
    faqs: [
      {
        question: 'Which loft should I get: 9°, 10.5°, or 12°?',
        answer: 'Most golfers hit the 10.5° best. It gets the ball high enough into the air to carry past hazards while still rolling out down the fairway.'
      }
    ],
    reviewDate: 'September 2026',
  },
  {
    id: 'callaway-paradym-driver',
    slug: 'callaway-paradym-driver',
    brand: 'Callaway',
    model: 'Paradym Driver (with Sliding Draw Weight)',
    category: 'driver',
    headline: 'The Best Driver to Straighten Out Slices',
    summary: 'The Callaway Paradym has a sliding weight in the back. If you tend to slice your ball to the right, sliding that weight into the Draw spot helps the club face close naturally for straighter shots.',
    asin: 'B0BS78V29V',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$$',
    priceTierDescription: 'Premium Driver with 360° Carbon Body and Sliding Weight',
    mediaCdnUrl: '/images/products/callaway-paradym-driver.png',
    fallbackIcon: 'driver',
    badge: 'Slice Corrector',
    bestFor: 'Golfers fighting a slice who want sliding weight draw correction',
    targetSwingSpeed: ['75-85', '85-95', '95-105'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['standard', 'tall'],
    recommendedShaftFlex: 'Regular or Stiff',
    specs: [
      { label: 'Chassis', value: '360° Carbon Body (saves weight to fight slices)' },
      { label: 'Weight Track', value: '15-gram sliding rear weight (Draw, Neutral, Fade)' },
      { label: 'Lofts Available', value: '9°, 10.5°, 12°' },
    ],
    scorecard: {
      forgiveness: 9.7,
      ballSpeedDistance: 9.6,
      feelAcoustics: 9.5,
      dispersionControl: 9.8,
      buildValue: 9.1,
      overallRating: 9.5,
    },
    pros: [
      'Sliding weight really helps straighten out tee shots that drift into the trees',
      'Super forgiving across the entire club face',
      'Handsome dark blue metallic top that looks confident behind the ball',
    ],
    cons: [
      'Higher price point reflecting top-tier materials',
    ],
    failureModesAndCare: 'When adjusting the weight with the wrench, turn it until you hear one solid "click". Never over-tighten by hand.',
    faqs: [
      {
        question: 'How does sliding the weight fix a slice?',
        answer: 'Moving the weight toward the heel allows the toe of the club to rotate through impact slightly quicker, which helps keep the face from pointing out to the right.'
      }
    ],
    reviewDate: 'September 2026',
  },

  // ==========================================
  // IRONS
  // ==========================================
  {
    id: 'callaway-rogue-st-max-os-irons',
    slug: 'callaway-rogue-st-max-os-irons',
    brand: 'Callaway',
    model: 'Rogue ST MAX OS Iron Set (5-PW, AW)',
    category: 'irons',
    headline: 'Big, Forgiving Irons That Help You Get the Ball in the Air',
    summary: 'The "OS" means Oversized. These irons have wide bottoms that glide through grass without digging dirt, generous offset to fix pushes, and soft urethane inside to make hits feel smooth on your hands.',
    asin: 'B09NZK9P7V',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$$',
    priceTierDescription: '7-Club Set (5-PW, AW) with High-Launch Forgiving Faces',
    mediaCdnUrl: '/images/products/callaway-rogue-st-max-os-irons.png',
    fallbackIcon: 'irons',
    badge: 'Easiest Irons to Hit',
    bestFor: '15 to 30+ handicappers who want easy height and straighter iron shots',
    targetSwingSpeed: ['under-75', '75-85', '85-95'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['standard', 'petite', 'tall'],
    recommendedShaftFlex: 'Regular Steel or Graphite',
    specs: [
      { label: 'Set Makeup', value: '5-Iron through Pitching Wedge plus Approach Wedge (7 Clubs)' },
      { label: 'Head Style', value: 'Oversized Cavity Back with Wide Sole' },
      { label: 'Vibration Control', value: 'Urethane microspheres inside make impacts feel soft' },
    ],
    scorecard: {
      forgiveness: 9.8,
      ballSpeedDistance: 9.5,
      feelAcoustics: 9.2,
      dispersionControl: 9.3,
      buildValue: 9.4,
      overallRating: 9.5,
    },
    pros: [
      'Huge sweet spot protects your distance even if you hit it near the toe or heel',
      'Wide bottoms prevent embarrassing fat chunks in soft fairway grass',
      'Flies high so your ball lands softly on the green instead of rolling off the back',
    ],
    cons: [
      'The top of the club looks slightly thicker than tour-blade irons',
    ],
    failureModesAndCare: 'Use a soft nylon brush and water to clean the grooves between rounds. Clean grooves give you better grip and spin on the ball.',
    faqs: [
      {
        question: 'Will these irons help if I hit the ground before the ball?',
        answer: 'Yes! The wide bottom sole is rounded so it skips right across the turf instead of digging into the ground like a sharp knife.'
      }
    ],
    reviewDate: 'September 2026',
  },
  {
    id: 'mizuno-jpx923-hot-metal-irons',
    slug: 'mizuno-jpx923-hot-metal-irons',
    brand: 'Mizuno',
    model: 'JPX923 Hot Metal Iron Set',
    category: 'irons',
    headline: 'Buttery Soft Feel with Great Distance',
    summary: 'Mizuno is world-famous for making irons that feel wonderful when you strike the ball. The JPX923 Hot Metal gives everyday golfers that legendary soft feel along with modern ball speed.',
    asin: 'B0BHV76C87',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$$',
    priceTierDescription: 'High-Craftsmanship Game Improvement Iron Set',
    mediaCdnUrl: '/images/products/mizuno-jpx923-hot-metal-irons.png',
    fallbackIcon: 'irons',
    badge: 'Best Feel',
    bestFor: '8 to 20 handicappers who want great feedback and clean styling',
    targetSwingSpeed: ['75-85', '85-95', '95-105'],
    targetHandicap: ['mid-10-19', 'low-0-9'],
    targetHeight: ['standard', 'tall'],
    recommendedShaftFlex: 'Regular or Stiff',
    specs: [
      { label: 'Material', value: 'Nickel Chromoly 4335 (stronger and thinner face)' },
      { label: 'Finish', value: 'Sleek satin chrome that cuts down on sun glare' },
      { label: 'Feel Rating', value: 'Top-rated acoustic feedback in player tests' },
    ],
    scorecard: {
      forgiveness: 9.2,
      ballSpeedDistance: 9.6,
      feelAcoustics: 9.9,
      dispersionControl: 9.4,
      buildValue: 9.5,
      overallRating: 9.5,
    },
    pros: [
      'Unbeatable smooth feel when you hit the center of the face',
      'Clean, handsome look in your golf bag without looking bulky',
      'The satin finish stops bright sunlight from glaring into your eyes',
    ],
    cons: [
      'A little less chunky than the Callaway OS, so complete beginners will prefer the Callaway',
    ],
    failureModesAndCare: 'Use individual iron covers when traveling in a car or airline bag so the clubs do not ding against each other.',
    faqs: [
      {
        question: 'Are Mizuno irons only for pro golfers?',
        answer: 'Not the Hot Metal series! While pros love Mizuno blades, the Hot Metal line was designed specifically for normal golfers who want distance and forgiveness.'
      }
    ],
    reviewDate: 'September 2026',
  },

  // ==========================================
  // PUTTERS
  // ==========================================
  {
    id: 'odyssey-white-hot-og-putter',
    slug: 'odyssey-white-hot-og-putter',
    brand: 'Odyssey',
    model: 'White Hot OG #7 Mallet Putter',
    category: 'putter',
    headline: 'The Famous "Fang" Putter That Makes Aiming Easy',
    summary: 'The iconic #7 putter has two "fangs" in the back that push weight out to the sides. This stops the putter from twisting in your hands on off-center hits, giving you consistent distance on every green.',
    asin: 'B08QFL75M3',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$',
    priceTierDescription: 'Tour-Proven Mallet with Soft White Hot Face Insert',
    mediaCdnUrl: '/images/products/odyssey-white-hot-og-putter.png',
    fallbackIcon: 'putter',
    badge: 'Most Reliable Putter',
    bestFor: 'All golfers who want easy aiming and smooth, predictable putts',
    targetSwingSpeed: ['under-75', '75-85', '85-95', '95-105', '105-plus'],
    targetHandicap: ['high-20-plus', 'mid-10-19', 'low-0-9'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    specs: [
      { label: 'Head Shape', value: 'Winged Mallet (#7 Fang Shape)' },
      { label: 'Face Insert', value: 'White Hot Urethane (soft feel and smooth roll)' },
      { label: 'Lengths', value: '33", 34", 35" (35" recommended for players 6’2”+)' },
    ],
    scorecard: {
      forgiveness: 9.8,
      ballSpeedDistance: 9.4,
      feelAcoustics: 9.9,
      dispersionControl: 9.6,
      buildValue: 9.5,
      overallRating: 9.6,
    },
    pros: [
      'The two wings frame the golf ball so you can see your putting line clearly',
      'The soft white face insert gives you great speed control on long putts',
      'Stays square through the stroke without twisting in your hands',
    ],
    cons: [
      'If you prefer a sharp, loud "clack" sound, this soft face feels very quiet',
    ],
    failureModesAndCare: 'Always keep the magnetic headcover on your putter when walking or riding in a cart so other clubs do not scratch the face.',
    faqs: [
      {
        question: 'What putter length should I choose?',
        answer: 'Under 5’9”: pick 33”. Between 5’9” and 6’1”: pick 34”. 6’2” or taller: pick 35” so you don’t have to slouch your back.'
      }
    ],
    reviewDate: 'September 2026',
  },

  // ==========================================
  // WEDGES
  // ==========================================
  {
    id: 'cleveland-cbx-zipcore-wedge',
    slug: 'cleveland-cbx-zipcore-wedge',
    brand: 'Cleveland',
    model: 'CBX ZipCore Cavity Back Wedge',
    category: 'wedge',
    headline: 'A Friendly Cavity-Back Wedge for Sand and Pitch Shots',
    summary: 'Most pro wedges have thin flat backs that punish you if you miss the dead center. The CBX ZipCore has a hollow cavity back, making it easy to pop sand shots out of bunkers and pitch onto greens.',
    asin: 'B08DKY424H',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$',
    priceTierDescription: 'Forgiving Cavity Wedge with Sharp UltiZip Grooves',
    mediaCdnUrl: '/images/products/cleveland-cbx-zipcore-wedge.png',
    fallbackIcon: 'wedge',
    badge: 'Bunker Escape Specialist',
    bestFor: 'Any golfer who struggles getting out of bunkers or chunking short chip shots',
    targetSwingSpeed: ['under-75', '75-85', '85-95', '95-105'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['standard', 'tall', 'petite'],
    specs: [
      { label: 'Lofts Available', value: '50°, 54°, 56° (Most common Sand Wedge is 56°)' },
      { label: 'Back Design', value: 'Hollow Cavity (matches your forgiving irons)' },
      { label: 'Sole Shape', value: 'V-Shaped bottom that slides across sand and grass' },
    ],
    scorecard: {
      forgiveness: 9.7,
      ballSpeedDistance: 9.2,
      feelAcoustics: 9.3,
      dispersionControl: 9.6,
      buildValue: 9.6,
      overallRating: 9.5,
    },
    pros: [
      'Makes sand bunker shots much less scary for weekend golfers',
      'The rounded bottom prevents chunked shots from stopping dead in the grass',
      'Sharp grooves grab the ball so your chip shots check up near the flag',
    ],
    cons: [
      'Cannot lay the face wide flat for extreme flop shots like a pro blade wedge',
    ],
    failureModesAndCare: 'Bunker sand is gritty. Rinse the face with water after sand shots so the grooves stay sharp.',
    faqs: [
      {
        question: 'What loft wedge should I get first?',
        answer: 'A 56° Sand Wedge is the most useful club. It works for bunker shots, 60-yard pitches, and high chips over hazards.'
      }
    ],
    reviewDate: 'September 2026',
  },

  // ==========================================
  // GOLF BALLS (SPEED-MATCHED TO YOUR SWING)
  // ==========================================
  {
    id: 'callaway-supersoft-golf-balls',
    slug: 'callaway-supersoft-golf-balls',
    brand: 'Callaway',
    model: 'Supersoft Golf Balls (12-Pack)',
    category: 'golf-ball',
    headline: 'The #1 Soft Golf Ball That Cuts Down on Slices',
    summary: 'The Callaway Supersoft is the friendliest golf ball on Amazon. Because the core is super soft (38 compression), everyday swing speeds squish it easily, which lowers side spin and helps your shots fly straight down the middle.',
    asin: 'B0BMJ9HFNM',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$',
    priceTierDescription: 'Affordable Speed-Matched Dozen (Usually Under $25)',
    mediaCdnUrl: '/images/products/callaway-supersoft-golf-balls.jpg',
    fallbackIcon: 'ball',
    badge: 'Best Ball for Slices & Normal Swings',
    bestFor: 'Golfers swinging under 85 MPH who want straight drives and soft putting feel',
    targetSwingSpeed: ['under-75', '75-85'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    compressionRating: 38,
    coverMaterial: 'Soft Hybrid Cover',
    constructionLayers: 2,
    specs: [
      { label: 'Core Softness', value: '38 Ultra-Soft Core (super easy to compress)' },
      { label: 'Flight', value: 'Low Driver Spin (Helps eliminate wild curves and slices)' },
      { label: 'Feel', value: 'Soft as a marshmallow off putters and wedges' },
      { label: 'Count', value: '12 Golf Balls per Box' },
    ],
    scorecard: {
      forgiveness: 9.8,
      ballSpeedDistance: 9.4,
      feelAcoustics: 9.9,
      dispersionControl: 9.5,
      buildValue: 9.9,
      overallRating: 9.7,
    },
    pros: [
      'Low side spin helps keep drives in the fairway instead of out of bounds',
      'Feels wonderfully soft when putting on the green',
      'Affordable price means you do not stress out if a ball goes into a water hazard',
      'Great distance for normal, smooth swings',
    ],
    cons: [
      'If you swing over 100 MPH, this ball might compress a bit too much',
    ],
    failureModesAndCare: 'Do not play frozen golf balls. Keep them inside your house the night before a cold morning round so the rubber core stays springy.',
    faqs: [
      {
        question: 'Why does a soft golf ball help stop my slice?',
        answer: 'When a ball is soft, it deforms easily on your club face without spinning wildly sideways. Less side spin means your shot stays much straighter.'
      },
      {
        question: 'Is this ball good for senior golfers and beginners?',
        answer: 'Yes! It is the #1 recommended ball for beginners and seniors because you do not need to swing hard to make it fly far.'
      }
    ],
    reviewDate: 'September 2026',
  },
  {
    id: 'srixon-soft-feel-golf-balls',
    slug: 'srixon-soft-feel-golf-balls',
    brand: 'Srixon',
    model: 'Soft Feel Golf Balls (Dozen)',
    category: 'golf-ball',
    headline: 'Great All-Around Ball for 75 to 90 MPH Swings',
    summary: 'The Srixon Soft Feel has a 60-compression core that feels soft on putts but has plenty of pop off irons and drivers. It has a tough outer cover that resists scuffs from cart paths and trees.',
    asin: 'B08N5Q762H',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$',
    priceTierDescription: 'Durable All-Around Dozen (Under $25)',
    mediaCdnUrl: '/images/products/srixon-soft-feel-golf-balls.png',
    fallbackIcon: 'ball',
    badge: 'Best Everyday Value',
    bestFor: 'Everyday golfers wanting a durable ball with a great balance of soft feel and distance',
    targetSwingSpeed: ['75-85', '85-95'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    compressionRating: 60,
    coverMaterial: 'Durable Soft Ionomer',
    constructionLayers: 2,
    specs: [
      { label: 'Core', value: '60 Compression (soft center with firmer outer edge)' },
      { label: 'Dimples', value: '338 Speed Dimples (cuts through wind nicely)' },
      { label: 'Durability', value: 'Tough cover that lasts multiple rounds' },
    ],
    scorecard: {
      forgiveness: 9.6,
      ballSpeedDistance: 9.3,
      feelAcoustics: 9.4,
      dispersionControl: 9.3,
      buildValue: 9.8,
      overallRating: 9.5,
    },
    pros: [
      'Very tough cover that rarely scuffs even if you hit a cart path',
      'Cuts through breezy crosswinds reliably',
      'Noticeably soft feel on chips and putts without feeling mushy',
    ],
    cons: [
      'Does not spin back 10 feet on greens like an expensive $55 tour ball',
    ],
    failureModesAndCare: 'Wipe off mud and grass with a damp golf towel so the dimples stay clean and aerodynamic.',
    faqs: [
      {
        question: 'How is Srixon Soft Feel different from Callaway Supersoft?',
        answer: 'The Srixon has a slightly firmer core (60 vs 38), which gives players with medium swing speeds a bit more click and rollout on drives.'
      }
    ],
    reviewDate: 'September 2026',
  },
  {
    id: 'titleist-pro-v1-golf-balls',
    slug: 'titleist-pro-v1-golf-balls',
    brand: 'Titleist',
    model: 'Pro V1 Golf Balls (Dozen)',
    category: 'golf-ball',
    headline: 'The Gold Standard Tour Ball for Fast Swings & Backspin',
    summary: 'The Pro V1 is the most famous golf ball in the world. Built with 3 layers and a soft urethane cover, it gives fast-swinging golfers piercing distance off the tee and high backspin to stop the ball instantly on greens.',
    asin: 'B09NZKYP4X',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$',
    priceTierDescription: 'Premium Tour 3-Layer Urethane (Around $50–$55)',
    mediaCdnUrl: '/images/products/titleist-pro-v1-golf-balls.png',
    fallbackIcon: 'ball',
    badge: 'Tour Gold Standard',
    bestFor: 'Fast swingers (95+ MPH) and lower handicappers who want backspin to stick greens',
    targetSwingSpeed: ['95-105', '105-plus'],
    targetHandicap: ['mid-10-19', 'low-0-9'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    compressionRating: 90,
    coverMaterial: 'Cast Urethane Elastomer (maximum green grip)',
    constructionLayers: 3,
    specs: [
      { label: 'Construction', value: '3-Layer Multi-Material Tour Ball' },
      { label: 'Cover', value: 'Cast Thermoset Urethane (grips wedge grooves)' },
      { label: 'Compression', value: '90 Tour Compression (requires fast swing speed)' },
    ],
    scorecard: {
      forgiveness: 8.8,
      ballSpeedDistance: 9.8,
      feelAcoustics: 9.8,
      dispersionControl: 9.9,
      buildValue: 8.9,
      overallRating: 9.5,
    },
    pros: [
      'The best ball on the market for stopping chips and wedge shots dead on the green',
      'Flies on a penetrating, wind-defying flight path',
      'Crisp, responsive click sound preferred by better players',
    ],
    cons: [
      'If you swing under 85 MPH, the core is too firm to get full distance',
      'Higher price point per box',
    ],
    failureModesAndCare: 'Check the soft urethane cover after hitting out of gravel or rock beds to make sure there are no raised burrs that will affect flight.',
    faqs: [
      {
        question: 'Should a beginner play Pro V1?',
        answer: 'Usually no! Slower swings cannot compress the firm 90-compression core, and the extra spin can make slices curve further into the woods. Save money and play Callaway Supersoft or Srixon Soft Feel until your swing speed increases.'
      }
    ],
    reviewDate: 'September 2026',
  },
  {
    id: 'taylormade-distance-plus-golf-balls',
    slug: 'taylormade-distance-plus-golf-balls',
    brand: 'TaylorMade',
    model: 'Distance+ Golf Balls (12-Pack)',
    category: 'golf-ball',
    headline: 'Maximum Rollout with Built-In Alignment Stamp',
    summary: 'Built for maximum roll and straight distance. Features a large crosshair alignment mark printed directly on the ball to help you line up your putts without drawing messy lines with a marker.',
    asin: 'B0BSZ5P169',
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$',
    priceTierDescription: 'Budget Distance 12-Pack (Usually Under $20)',
    mediaCdnUrl: '/images/products/taylormade-distance-plus-golf-balls.png',
    fallbackIcon: 'ball',
    badge: 'Max Distance & Roll',
    bestFor: 'Golfers wanting extra roll on dry fairways and an easy putting alignment mark',
    targetSwingSpeed: ['under-75', '75-85', '85-95'],
    targetHandicap: ['high-20-plus'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    compressionRating: 77,
    coverMaterial: 'Cut-Proof Ionomer',
    constructionLayers: 2,
    specs: [
      { label: 'Core', value: 'REACT Speed Core' },
      { label: 'Cover', value: 'Tough Ionomer (practically indestructible)' },
      { label: 'Alignment', value: 'Built-in "+" Crosshair Putting Stamp' },
    ],
    scorecard: {
      forgiveness: 9.3,
      ballSpeedDistance: 9.7,
      feelAcoustics: 8.7,
      dispersionControl: 9.0,
      buildValue: 9.9,
      overallRating: 9.3,
    },
    pros: [
      'Rolls very far on fairways to give you longer drives',
      'The built-in crosshair stamp makes aiming putts foolproof',
      'Super affordable so you never worry about losing a ball',
    ],
    cons: [
      'A firmer click sound when putting',
    ],
    failureModesAndCare: 'Wipe clean with a towel after wet shots.',
    faqs: [
      {
        question: 'Does the alignment crosshair help with putts?',
        answer: 'Yes! Just point the crosshair arrow straight at the cup. It gives you immediate visual confidence that your putter face is square.'
      }
    ],
    reviewDate: 'September 2026',
  },
  {
    id: 'callaway-xr-2026-complete-set',
    slug: 'callaway-xr-2026-complete-set',
    brand: 'Callaway',
    model: '2026 XR 13-Piece Complete Set',
    category: 'complete-set',
    headline: 'Premium Turnkey Set with Full Course Coverage',
    summary: 'A right-handed, regular-flex complete set for golfers who want one coordinated premium purchase. This exact Amazon variant is standard length in Blue/Red and includes a 460cc driver, fairway wood, two hybrids, irons, three wedges, an Odyssey DFX putter, headcovers, and a golf bag.',
    asin: 'B0FH5V8X7Z',
    amazonStatus: 'verified',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$$',
    priceTierDescription: 'Premium complete-set investment; check the live Amazon price before buying',
    mediaCdnUrl: 'https://m.media-amazon.com/images/I/71D5yFrvcmL._AC_SX522_.jpg',
    fallbackIcon: 'set',
    badge: 'Premium Complete Set',
    bestFor: 'Right-handed golfers of standard height who want a coordinated, ready-to-play bag without choosing every club separately',
    targetSwingSpeed: ['under-75', '75-85', '85-95'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['standard'],
    recommendedShaftFlex: 'Regular',
    specs: [
      { label: 'Exact Amazon Variant', value: 'Right hand / Regular flex / Standard length / Blue-Red' },
      { label: 'Driver', value: '460cc titanium head' },
      { label: 'Long Game', value: '3-wood plus 4- and 5-hybrids' },
      { label: 'Irons & Wedges', value: '6-9 irons, pitching wedge, approach wedge, sand wedge' },
      { label: 'Putter', value: 'Odyssey DFX V-Line Fang' },
      { label: 'Included', value: '12 clubs, 5 headcovers, and golf bag' },
    ],
    scorecard: {
      forgiveness: 9.2,
      ballSpeedDistance: 8.8,
      feelAcoustics: 8.5,
      dispersionControl: 8.8,
      buildValue: 8.0,
      overallRating: 8.7,
    },
    pros: [
      'One purchase covers every main role from driver through putter',
      'Hybrids replace the harder-to-launch long irons',
      'Standard-length regular-flex configuration suits many developing golfers',
    ],
    cons: [
      'This exact listing is right-handed and standard length, so it is not the right choice for left-handed, petite, or tall golfers',
      'Costs more than entry-level boxed sets',
      'A fixed set offers less fitting freedom than building a bag club by club',
    ],
    failureModesAndCare: 'Confirm right hand, regular flex, standard length, and Blue/Red before checkout. Dry clubheads before storing them in the bag and use headcovers on the driver, fairway wood, hybrids, and putter.',
    faqs: [
      {
        question: 'Who should buy this instead of building a custom bag?',
        answer: 'Choose it when convenience and coordinated gapping matter more than fine-tuning every head and shaft. If you already know your ideal shaft, lie, or length adjustments, build a fitted bag instead.'
      },
      {
        question: 'Is this the right set for a tall golfer?',
        answer: 'Not automatically. This ASIN is the standard-length version. Taller golfers should confirm wrist-to-floor measurements and look for a long-length configuration or a fitting.'
      }
    ],
    reviewDate: 'September 28, 2026',
  },
  {
    id: 'taylormade-qi4d-max-driver',
    slug: 'taylormade-qi4d-max-driver',
    brand: 'TaylorMade',
    model: 'Qi4D Max Driver',
    category: 'driver',
    headline: 'Flagship Maximum-MOI Driver with Adjustable Weighting',
    summary: 'TaylorMade’s 460cc maximum-MOI Qi4D head prioritizes stability and a mid-high launch. This exact Amazon variant is right-handed, 10.5 degrees, regular flex, with the Mitsubishi REAX 60 MR Blue shaft.',
    asin: 'B0G2PZ9ZYX',
    amazonStatus: 'verified',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$$',
    priceTierDescription: 'Current flagship driver; check the live Amazon price before buying',
    mediaCdnUrl: 'https://m.media-amazon.com/images/I/61lgyhftAHL._AC_SX522_.jpg',
    fallbackIcon: 'driver',
    badge: 'Flagship Forgiveness',
    bestFor: 'Golfers who prioritize a stable 460cc head, mid-high launch, and adjustable shot-shape weighting',
    targetSwingSpeed: ['75-85', '85-95', '95-105'],
    targetHandicap: ['high-20-plus', 'mid-10-19', 'low-0-9'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    recommendedShaftFlex: 'Regular',
    specs: [
      { label: 'Exact Amazon Variant', value: 'Right hand / 10.5° / Regular / Mitsubishi REAX 60 MR Blue' },
      { label: 'Head Volume', value: '460cc' },
      { label: 'Launch Profile', value: 'Mid-high launch / mid spin' },
      { label: 'Face', value: '60X Carbon Twist Face' },
      { label: 'Adjustability', value: '13g and 4g TAS weights plus 4° loft sleeve' },
      { label: 'Construction', value: '7075 aluminum collar with carbon, titanium, and steel' },
    ],
    scorecard: {
      forgiveness: 9.7,
      ballSpeedDistance: 9.4,
      feelAcoustics: 9.0,
      dispersionControl: 9.5,
      buildValue: 7.8,
      overallRating: 9.1,
    },
    pros: [
      'Maximum-MOI design gives stability priority over a compact tour shape',
      'Two movable weights and the loft sleeve provide meaningful setup options',
      'The selected 10.5-degree regular-flex build is a sensible starting point for many moderate-speed swings',
    ],
    cons: [
      'Premium price is difficult to justify if your current driver already fits well',
      'The Max head is not the compact, low-spin choice some fast players prefer',
      'Movable weights do not replace a proper loft and shaft fitting',
    ],
    failureModesAndCare: 'Verify the selected right-hand, 10.5-degree, regular-flex MR Blue configuration before checkout. Use only the correct TaylorMade torque wrench and stop when it clicks.',
    faqs: [
      {
        question: 'Should I choose Qi4D Max or a lower-spin driver?',
        answer: 'Choose Qi4D Max when stability and a mid-high launch are priorities. A fast player who already launches high and produces excess spin should compare it with a lower-spin head in a fitting.'
      },
      {
        question: 'Can the movable weights fix a slice?',
        answer: 'They can shift the head’s bias, but they cannot correct an open face or out-to-in swing on their own. Treat weighting as fine-tuning, not a swing cure.'
      }
    ],
    reviewDate: 'September 28, 2026',
  },
  {
    id: 'callaway-quantum-max-driver',
    slug: 'callaway-quantum-max-driver',
    brand: 'Callaway',
    model: 'Quantum Max Driver',
    category: 'driver',
    headline: 'Premium Adjustable Driver with Neutral-to-Draw Weighting',
    summary: 'Callaway positions Quantum Max as its versatile 460cc option for speed, consistency, forgiveness, and control. This exact Amazon variant is right-handed, 10.5 degrees, regular flex, with a Project X Denali Silver 50g shaft.',
    asin: 'B0FRPMV8BL',
    amazonStatus: 'verified',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$$',
    priceTierDescription: 'Current flagship driver; check the live Amazon price before buying',
    mediaCdnUrl: 'https://m.media-amazon.com/images/I/6148P4QGZ8L._AC_SX522_.jpg',
    fallbackIcon: 'driver',
    badge: 'Premium Draw Adjustability',
    bestFor: 'Golfers who want a forgiving flagship head with a neutral-to-draw weight track and independent loft and lie settings',
    targetSwingSpeed: ['75-85', '85-95', '95-105'],
    targetHandicap: ['high-20-plus', 'mid-10-19', 'low-0-9'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    recommendedShaftFlex: 'Regular',
    specs: [
      { label: 'Exact Amazon Variant', value: 'Right hand / 10.5° / Regular / Project X Denali Silver 50g' },
      { label: 'Head Volume', value: '460cc' },
      { label: 'Length', value: '45.75 inches' },
      { label: 'Lie', value: '57°' },
      { label: 'Weighting', value: '10g adjustable weight with neutral and draw settings' },
      { label: 'Hosel', value: 'Independent loft and lie adjustment with 8 configurations' },
    ],
    scorecard: {
      forgiveness: 9.4,
      ballSpeedDistance: 9.5,
      feelAcoustics: 9.0,
      dispersionControl: 9.3,
      buildValue: 7.8,
      overallRating: 9.0,
    },
    pros: [
      'Neutral-to-draw weight positions help tune start line and curvature',
      'Independent loft and lie settings provide eight documented configurations',
      'The 10.5-degree regular-flex build is broadly approachable for moderate swing speeds',
    ],
    cons: [
      'A draw setting can make a left miss worse for players who already hook',
      'The 45.75-inch stock length may reduce center contact for some golfers',
      'Flagship pricing makes a fitting especially important before purchase',
    ],
    failureModesAndCare: 'Confirm the right-hand, 10.5-degree, regular-flex Denali Silver variant before checkout. Record your original hosel and weight settings before experimenting.',
    faqs: [
      {
        question: 'Is Quantum Max the better choice for a slice?',
        answer: 'Its draw weight position can help some golfers start the ball farther left and reduce rightward curvature, but results depend on impact and face angle. A fitting is the safest way to confirm.'
      },
      {
        question: 'What if I already miss left?',
        answer: 'Start in the neutral weight position and avoid adding draw bias. Players with a persistent hook should compare a more neutral or fade-capable head.'
      }
    ],
    reviewDate: 'September 28, 2026',
  },
  {
    id: 'taylormade-p790-2025-irons',
    slug: 'taylormade-p790-2025-irons',
    brand: 'TaylorMade',
    model: '2025 P·790 Irons',
    category: 'irons',
    headline: 'Premium Players-Distance Irons with a Seven-Club Gapping Set',
    summary: 'The 2025 P·790 blends a compact players-distance shape with a hollow-body construction and SpeedFoam Air. This exact Amazon set is right-handed, regular flex, and includes 5-iron through pitching wedge plus approach wedge.',
    asin: 'B0DNTS17CL',
    amazonStatus: 'unavailable',
    amazonCheckedAt: '2026-10-10',
    priceTier: '$$$$',
    priceTierDescription: 'Premium seven-club iron set; check the live Amazon price before buying',
    mediaCdnUrl: 'https://m.media-amazon.com/images/I/61mfAKlkwoL._AC_SX522_.jpg',
    fallbackIcon: 'irons',
    badge: 'Premium Players Distance',
    bestFor: 'Mid- and lower-handicap golfers who want a compact look with more speed and forgiveness than a traditional one-piece players iron',
    targetSwingSpeed: ['85-95', '95-105', '105-plus'],
    targetHandicap: ['mid-10-19', 'low-0-9'],
    targetHeight: ['standard'],
    recommendedShaftFlex: 'Regular',
    specs: [
      { label: 'Exact Amazon Variant', value: 'Right hand / Regular flex / 5-PW, AW' },
      { label: 'Set Makeup', value: 'Seven clubs: 5, 6, 7, 8, 9, PW, AW' },
      { label: 'Face Material', value: '4340M forged face' },
      { label: 'Construction', value: 'Hollow body with SpeedFoam Air' },
      { label: 'Center of Gravity', value: 'FLTD CG progression through the set' },
    ],
    scorecard: {
      forgiveness: 8.5,
      ballSpeedDistance: 9.4,
      feelAcoustics: 9.2,
      dispersionControl: 8.9,
      buildValue: 7.5,
      overallRating: 8.8,
    },
    pros: [
      'Seven-club makeup includes an approach wedge for tighter short-iron gapping',
      'Hollow-body construction provides more help than a traditional compact blade',
      'Progressive center-of-gravity design changes by iron role through the set',
    ],
    cons: [
      'Not the easiest choice for a new golfer who needs maximum offset and sole width',
      'This exact listing is right-handed, regular flex, and standard length',
      'Premium pricing leaves little room for a poor shaft or lie-angle fit',
    ],
    failureModesAndCare: 'Confirm the 5-PW plus AW makeup before checkout; it does not include a 4-iron or sand wedge. Dry the forged faces after wet rounds and use a soft brush on the grooves.',
    faqs: [
      {
        question: 'Are P·790 irons suitable for a high handicap?',
        answer: 'They can work for a consistent ball-striker, but most high-handicap golfers should compare a larger game-improvement head with more offset and sole width before buying.'
      },
      {
        question: 'What clubs still need to be added?',
        answer: 'This set starts at 5-iron and ends at approach wedge, so most bags will still need a driver, fairway wood or hybrid, sand or lob wedge, and putter.'
      }
    ],
    reviewDate: 'September 28, 2026',
  },
  {
    id: 'odyssey-ai-dual-s2s-jailbird-putter',
    slug: 'odyssey-ai-dual-s2s-jailbird-putter',
    brand: 'Odyssey',
    model: 'Ai-DUAL Square 2 Square Jailbird Putter',
    category: 'putter',
    headline: 'Premium Zero-Torque Mallet for a Face-Stable Stroke',
    summary: 'A center-shafted, toe-up Jailbird mallet designed to resist face rotation through the stroke. This exact Amazon variant is right-handed, 35 inches, with the Jailbird head and pistol grip.',
    asin: 'B0FQ68VSY4',
    // Listing shaft/grip conflict with Odyssey specs; exact build is not verified.
    amazonStatus: 'unavailable',
    amazonCheckedAt: 'September 30, 2026',
    priceTier: '$$$$',
    priceTierDescription: 'Premium zero-torque putter; compare Amazon with Odyssey direct before buying',
    mediaCdnUrl: 'https://m.media-amazon.com/images/I/51NC7HVDsQL._AC_SX522_.jpg',
    fallbackIcon: 'putter',
    badge: 'Premium Face Stability',
    bestFor: 'Golfers who prefer a center-shafted, face-stable mallet and can set up comfortably with its zero-torque geometry',
    targetSwingSpeed: ['under-75', '75-85', '85-95', '95-105', '105-plus'],
    targetHandicap: ['high-20-plus', 'mid-10-19', 'low-0-9'],
    targetHeight: ['standard', 'tall'],
    specs: [
      { label: 'Exact Amazon Variant', value: 'Right hand / 35 inches / Jailbird / Pistol grip' },
      { label: 'Head Type', value: 'Center-shafted mallet' },
      { label: 'Loft / Lie', value: '3° / 72°' },
      { label: 'Head Weight', value: '360g' },
      { label: 'Face', value: 'Dual-layer Ai-DUAL insert with 19° Forward Roll Design grooves' },
      { label: 'Balance', value: 'Toe-up, zero-torque design' },
    ],
    scorecard: {
      forgiveness: 9.5,
      ballSpeedDistance: 9.0,
      feelAcoustics: 9.2,
      dispersionControl: 9.5,
      buildValue: 7.7,
      overallRating: 9.0,
    },
    pros: [
      'Center-shafted toe-up balance is designed to keep the face square to the stroke path',
      'Large Jailbird mallet provides a strong alignment reference',
      'Dual-layer insert and forward-roll grooves target consistent pace and roll',
    ],
    cons: [
      'Zero-torque setup and center shaft can look and feel unfamiliar',
      'The 35-inch length will not fit every posture or arm hang',
      'Odyssey direct showed a lower promotional price when checked, so compare both stores before buying',
    ],
    failureModesAndCare: 'Confirm right hand, 35-inch length, Jailbird head, and pistol grip before checkout. Compare the live Amazon price with Odyssey direct, use the headcover, and test whether your setup feels natural over a center shaft.',
    faqs: [
      {
        question: 'Who should not buy a zero-torque putter online?',
        answer: 'Avoid buying blind if you strongly arc and release a toe-hang putter or if center-shafted alignment looks uncomfortable. Roll several putts with comparable geometry first.'
      },
      {
        question: 'Does zero torque guarantee fewer missed putts?',
        answer: 'No. It changes how the head resists rotation, but start line also depends on aim, face contact, speed control, and fit.'
      }
    ],
    reviewDate: 'September 28, 2026',
  },
  {
    id: 'cleveland-rtz-56-mid-wedge',
    slug: 'cleveland-rtz-56-mid-wedge',
    brand: 'Cleveland',
    model: 'RTZ Tour Satin Wedge',
    category: 'wedge',
    headline: 'Premium 56-Degree Wedge with Versatile Mid Grind',
    summary: 'Cleveland’s RTZ Tour Satin wedge uses Z-Alloy, HydraZip face treatment, ZipCore weighting, and UltiZip grooves. This exact Amazon variant is right-handed, 56 degrees, with the Mid grind.',
    asin: 'B0DR3B8MY5',
    amazonStatus: 'verified',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$$',
    priceTierDescription: 'Premium specialty wedge; check the live Amazon price before buying',
    mediaCdnUrl: 'https://m.media-amazon.com/images/I/51J1dTFyIeL._AC_SX522_.jpg',
    fallbackIcon: 'wedge',
    badge: 'Premium Versatile Wedge',
    bestFor: 'Golfers who want a versatile 56-degree sand wedge for square-face shots, rough, and bunker play',
    targetSwingSpeed: ['75-85', '85-95', '95-105', '105-plus'],
    targetHandicap: ['mid-10-19', 'low-0-9'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    specs: [
      { label: 'Exact Amazon Variant', value: 'Right hand / 56° / Mid grind / Tour Satin' },
      { label: 'Material', value: 'Z-Alloy' },
      { label: 'Face Treatment', value: 'HydraZip' },
      { label: 'Grooves', value: 'UltiZip' },
      { label: 'Weighting', value: 'ZipCore' },
    ],
    scorecard: {
      forgiveness: 8.3,
      ballSpeedDistance: 8.6,
      feelAcoustics: 9.5,
      dispersionControl: 9.4,
      buildValue: 8.5,
      overallRating: 8.9,
    },
    pros: [
      'Mid grind is the most versatile RTZ starting point for varied lies',
      'HydraZip and UltiZip are designed to manage debris and moisture at impact',
      'ZipCore shifts mass away from the heel and hosel to raise stability',
    ],
    cons: [
      'A blade-style wedge demands more precise contact than a cavity-back wedge',
      'The Mid grind may not be ideal for very steep swings in soft turf or very shallow swings on firm turf',
      'One 56-degree wedge does not solve the rest of the bag’s loft gaps',
    ],
    failureModesAndCare: 'Confirm 56 degrees and Mid grind before checkout. Brush grooves after bunker and rough shots, dry the face, and replace the wedge when groove wear causes a meaningful loss of control.',
    faqs: [
      {
        question: 'Is 56 degrees the right sand-wedge loft?',
        answer: 'It is a common choice, but check the loft of your pitching and gap wedges first. Aim for useful spacing rather than buying 56 degrees by habit.'
      },
      {
        question: 'Who should choose a more forgiving wedge?',
        answer: 'A golfer who frequently strikes the toe, hits behind the ball, or wants maximum help on full swings should compare a cavity-back wedge such as Cleveland CBX.'
      }
    ],
    reviewDate: 'September 28, 2026',
  },
  {
    id: 'titleist-pro-v1-2025-golf-balls',
    slug: 'titleist-pro-v1-2025-golf-balls',
    brand: 'Titleist',
    model: '2025 Pro V1 Golf Balls — Low Numbers',
    category: 'golf-ball',
    headline: 'Premium Urethane Ball with Mid Flight and High Short-Game Spin',
    summary: 'The 2025 Pro V1 is Titleist’s softer-feeling, lower-flying counterpart to Pro V1x. The verified Amazon ASIN is the Low Numbers dozen listing.',
    asin: 'B0DPN71RTJ',
    amazonStatus: 'verified',
    amazonCheckedAt: 'September 28, 2026',
    priceTier: '$$$',
    priceTierDescription: 'Premium urethane dozen; check the live Amazon price before buying',
    mediaCdnUrl: 'https://m.media-amazon.com/images/I/61qY-6YtlgL._AC_SX522_.jpg',
    fallbackIcon: 'ball',
    badge: 'Premium All-Around Ball',
    bestFor: 'Golfers who want a mid-flight premium ball with low long-game spin, high short-game spin, and softer feel than Pro V1x',
    targetSwingSpeed: ['under-75', '75-85', '85-95', '95-105', '105-plus'],
    targetHandicap: ['high-20-plus', 'mid-10-19', 'low-0-9'],
    targetHeight: ['standard', 'tall', 'petite', 'extra-tall'],
    coverMaterial: 'Cast urethane elastomer',
    constructionLayers: 3,
    specs: [
      { label: 'Exact Amazon Variant', value: 'Low Numbers dozen' },
      { label: 'Construction', value: 'Three-piece premium urethane ball' },
      { label: 'Flight', value: 'Mid, flatter than Pro V1x' },
      { label: 'Long Game', value: 'Very low spin profile' },
      { label: 'Short Game', value: 'High spin profile' },
      { label: 'Dimple Pattern', value: '388 tetrahedral dimples' },
    ],
    scorecard: {
      forgiveness: 8.8,
      ballSpeedDistance: 9.3,
      feelAcoustics: 9.6,
      dispersionControl: 9.4,
      buildValue: 7.6,
      overallRating: 9.0,
    },
    pros: [
      'Balances low long-game spin with high short-game spin',
      'Softer feel and lower flight than Pro V1x help separate the two models',
      'The urethane cover is built for greenside control',
    ],
    cons: [
      'Premium cost is hard to justify if you lose several balls per round',
      'Players who need a higher flight should compare Pro V1x',
      'Golf-ball fit depends on full-bag performance, not swing speed alone',
    ],
    failureModesAndCare: 'Confirm the Low Numbers dozen before checkout. Replace balls with cuts, raised cover damage, or deep scuffs, especially after cart-path or tree impacts.',
    faqs: [
      {
        question: 'Do I need a fast swing to play Pro V1?',
        answer: 'No. Titleist does not fit Pro V1 solely by driver speed. Choose it for the flight, spin, and feel profile you need across the full bag.'
      },
      {
        question: 'Should I choose Pro V1 or Pro V1x?',
        answer: 'Start with Pro V1 for a softer feel, mid flight, and slightly less spin. Compare Pro V1x if you want a higher flight and more spin.'
      }
    ],
    reviewDate: 'September 28, 2026',
  },
  {
    id: 'callaway-quantum-max-os-irons',
    slug: 'callaway-quantum-max-os-irons',
    brand: 'Callaway',
    model: 'Quantum Max OS Irons',
    category: 'irons',
    headline: 'Premium Super-Game-Improvement Irons for Higher Launch',
    summary: 'Callaway’s oversized Quantum Max OS is the maximum-forgiveness model in the Quantum iron family. This exact Amazon set is right-handed, regular flex, with the True Temper Elevate 85g shaft and 5-iron through pitching wedge plus approach wedge.',
    asin: 'B0FRPXKGCD',
    amazonStatus: 'unavailable',
    amazonCheckedAt: '2026-10-10',
    priceTier: '$$$$',
    priceTierDescription: 'Premium seven-club game-improvement set; check the live Amazon price before buying',
    mediaCdnUrl: 'https://m.media-amazon.com/images/I/61RsBTgIiSL._AC_SX522_.jpg',
    fallbackIcon: 'irons',
    badge: 'Premium Maximum Forgiveness',
    bestFor: 'Higher-handicap and developing golfers who need a larger head, higher launch, and maximum forgiveness across the face',
    targetSwingSpeed: ['under-75', '75-85', '85-95', '95-105'],
    targetHandicap: ['high-20-plus', 'mid-10-19'],
    targetHeight: ['standard'],
    recommendedShaftFlex: 'Regular',
    specs: [
      { label: 'Exact Amazon Variant', value: 'Right hand / Regular flex / Elevate 85g steel / 5-PW, AW' },
      { label: 'Set Makeup', value: 'Seven clubs: 5, 6, 7, 8, 9, PW, AW' },
      { label: 'Profile', value: 'Oversized super-game-improvement' },
      { label: 'Launch', value: 'Higher-launch design' },
      { label: 'Construction', value: 'Two-piece 360° undercut cavity with perimeter weighting' },
      { label: 'Sole', value: 'Progressive Tri-Sole geometry' },
    ],
    scorecard: {
      forgiveness: 9.8,
      ballSpeedDistance: 9.3,
      feelAcoustics: 8.7,
      dispersionControl: 9.4,
      buildValue: 7.9,
      overallRating: 9.0,
    },
    pros: [
      'Oversized head and perimeter weighting prioritize off-center stability',
      'Higher-launch design helps golfers who struggle to elevate their irons',
      'Progressive sole geometry changes through the set for different shot roles',
    ],
    cons: [
      'Large profile and visible offset may not suit golfers who prefer a compact players shape',
      'This exact set is right-handed, regular flex, and standard length',
      'The set stops at approach wedge, so a sand wedge is still needed',
    ],
    failureModesAndCare: 'Confirm right hand, regular flex, Elevate 85g shaft, and 5-PW plus AW before checkout. Standard length still requires a wrist-to-floor fit check.',
    faqs: [
      {
        question: 'Should I choose Quantum Max OS or P·790?',
        answer: 'Choose Quantum Max OS when launch help and off-center forgiveness come first. Choose P·790 when you already strike the ball consistently and prefer a more compact players-distance shape.'
      },
      {
        question: 'Does the set include a sand wedge?',
        answer: 'No. This exact Amazon configuration includes 5-iron through pitching wedge plus approach wedge. Plan a separate sand wedge after checking the approach-wedge loft.'
      }
    ],
    reviewDate: 'September 28, 2026',
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}
