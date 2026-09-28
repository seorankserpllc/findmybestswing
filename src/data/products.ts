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
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}
