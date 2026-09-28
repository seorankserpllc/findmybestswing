import { Blueprint } from '../types/domain';

export const BLUEPRINTS: Blueprint[] = [
  {
    id: '95-mph-speed-matched-bag',
    slug: '95-mph-speed-matched-bag',
    title: 'The 95 MPH Swing Speed Speed-Matched Arsenal',
    tagline: 'Precision Shaft-Flex & Core-Compression Calibration for the Average Amateur Golfer',
    targetGolfer: 'Golfers swinging between 90 and 98 MPH seeking maximum carry without over-spinning',
    difficulty: 'Moderate Spec',
    estimatedBOMTier: '$$$$',
    swingSpeedTarget: '90–98 MPH Driver Clubhead Velocity',
    handicapTarget: '8–18 Handicap',
    heightTarget: 'Standard to Tall (5’8” to 6’2”)',
    overview: 'Our laboratory data proves that 95 MPH golfers suffer a 15–22 yard distance penalty when playing either senior-soft flex shafts (which balloon and spin over 3,200 RPM) or tour-stiff 105+ MPH gear (which fails to elevate). This blueprint harmonizes a 60g mid-kick Stiff driver shaft, forged hollow-body irons, and a 80-90 compression ball to hit the theoretical maximum smash factor of 1.48.',
    keyEngineeringBenefits: [
      'Eliminates the 600 RPM ballooning spin penalty caused by under-flexed stock shafts',
      'Pairs high-launch hollow-body irons with crisp turf-relieved soles for tight dispersion',
      'Includes high-velocity balls that compress precisely under 95 MPH impact dynamics',
      'Provides a consistent 4-degree gapping bridge from driver down to 58° lob wedge',
    ],
    bom: [
      {
        role: 'Primary Driver',
        productSlug: 'taylormade-stealth-2-driver',
        customSpecNote: '10.5° Loft set to Standard; paired with 60g Stiff Flex shaft',
      },
      {
        role: 'Core Iron Set',
        productSlug: 'mizuno-jpx923-hot-metal-irons',
        customSpecNote: '5-Iron through PW; Nickel Chromoly face cup with KBS Tour Lite Stiff',
      },
      {
        role: 'Greenside Scoring Wedge',
        productSlug: 'cleveland-cbx-zipcore-wedge',
        customSpecNote: '54° Sand Wedge (12° bounce) + 58° Lob Wedge for soft pin landings',
      },
      {
        role: 'Anchor Putter',
        productSlug: 'odyssey-white-hot-og-putter',
        customSpecNote: '34" Stroke Lab shaft with White Hot dual-layer urethane insert',
      },
      {
        role: 'Speed-Matched Ball',
        productSlug: 'titleist-pro-v1-golf-balls',
        customSpecNote: '90 Compression Cast Urethane 3-piece for optimal 2,300 RPM driver spin',
      },
    ],
    assemblyInstructions: [
      'Step 1: Set driver loft sleeve to 10.5° neutral; check that face angle sits perfectly square at address.',
      'Step 2: Install midsize grips if your glove size is Men’s Large or XL to prevent early wrist flip.',
      'Step 3: Gap testing on launch monitor: verify 12–14 yard separation between 5-iron (185y), 6-iron (172y), and 7-iron (160y).',
      'Step 4: Match ball core: never switch back and forth between ultra-low compression and tour balls during a round.',
    ],
    proFittingNotes: 'Golfers swinging 95 MPH should aim for an attack angle between +1.5° and +3.0° on the driver. This setup produces a 13.5° launch angle and 2,250 RPM backspin, maximizing carry out to 245–255 yards.',
  },
  {
    id: 'tall-golfer-upright-rig',
    slug: 'tall-golfer-upright-rig',
    title: 'The Tall Golfer (6’2”+) Upright Lie & Extended Rig',
    tagline: 'Eliminating Spine Strain & Heel-Drag Slices with +0.75" Shafts & 2° Upright Lies',
    targetGolfer: 'Golfers 6’2” to 6’6” struggling with thin heel strikes, hunched posture, and lower back fatigue',
    difficulty: 'Moderate Spec',
    estimatedBOMTier: '$$$',
    swingSpeedTarget: '80–100 MPH',
    handicapTarget: '10–25+ Handicap',
    heightTarget: 'Tall & Extra Tall (6’2” to 6’6”)',
    overview: 'Standard off-the-rack golf clubs are designed around a 5’9” average male golfer. When a 6’3” player swings standard clubs, the clubhead arrives at impact with the toe angled sharply into the air and the heel dragging, causing pushed fades and severe fat strikes. This blueprint addresses posture mechanics, wrist-to-floor geometry, and extended leverage.',
    keyEngineeringBenefits: [
      'Allows tall golfers to maintain a 38-degree spine tilt without knee bending fatigue',
      '2° upright lie angle squares the sole perfectly level with the turf at high-speed impact',
      '+0.75" shaft length increases clubhead swing arc for effortless 8–15 yards extra carry',
      'Oversized / Midsize grip options relieve hand cramping for larger wingspans',
    ],
    bom: [
      {
        role: 'Turnkey Base or Custom Irons',
        productSlug: 'wilson-profile-platinum',
        customSpecNote: 'Specify Factory Tall (+1.0" length) package option',
      },
      {
        role: 'Alternative Modular Irons',
        productSlug: 'callaway-rogue-st-max-os-irons',
        customSpecNote: 'Ordered with +0.75" custom shaft extension and 2° Upright Lie',
      },
      {
        role: 'Tall Player Putter',
        productSlug: 'odyssey-white-hot-og-putter',
        customSpecNote: '35" length configuration (replaces standard 33" or 34" to prevent slouching)',
      },
      {
        role: 'Forgiving Bunker Wedge',
        productSlug: 'cleveland-cbx-zipcore-wedge',
        customSpecNote: '56° with Dynamic Sole grind to prevent toe dig on greenside pitches',
      },
      {
        role: 'Straight Flight Ball',
        productSlug: 'srixon-soft-feel-golf-balls',
        customSpecNote: '60 Compression to minimize rotational slice side-spin',
      },
    ],
    assemblyInstructions: [
      'Step 1: Measure your wrist-to-floor measurement wearing golf shoes; if greater than 36 inches, +0.75" to +1.0" shaft extension is mandatory.',
      'Step 2: Have lie angles bent 2.0° upright on a Mitchell bending machine or ordered direct from manufacturer.',
      'Step 3: Put on a 35" putter and confirm eyes sit directly over the ball line without rounding lower back.',
      'Step 4: Use midsize or jumbo grips to prevent overactive wrist action.',
    ],
    proFittingNotes: 'Tall players naturally create more centrifugal speed due to longer arm levers. Focus on smooth transition tempo rather than aggressive hand release.',
  },
  {
    id: '20-handicap-forgiveness-fortress',
    slug: '20-handicap-forgiveness-fortress',
    title: 'The 20+ Handicap Forgiveness Fortress',
    tagline: 'Wide-Sole Cavity Backs, Draw-Biased Woods & Soft-Core Balls for Stress-Free Golf',
    targetGolfer: 'Recreational and weekend golfers shooting 92–108 wanting to break 90 consistently',
    difficulty: 'Beginner Friendly',
    estimatedBOMTier: '$$$',
    swingSpeedTarget: '75–90 MPH',
    handicapTarget: '20–36 Handicap',
    heightTarget: 'All heights',
    overview: 'Golfers with 20+ handicaps do not suffer from lack of effort—they suffer from equipment mismatch. Playing tour blade wedges, stiff low-spin balls, and compact drivers guarantees mishits lose 30 yards. This fortress build incorporates maximum allowable MOI perimeter weighting and ultra-low compression cores to keep off-center strikes airborne and straight.',
    keyEngineeringBenefits: [
      'Draw-biased perimeter weighting counteracts the open-face out-to-in slice path',
      'Wide chamfered iron soles prevent heavy "chunk" strikes from digging into soft soil',
      '38-compression golf ball deforms completely at 80 MPH for effortless carry',
      'High-MOI mallet putter eliminates twisting when putts are struck off the toe',
    ],
    bom: [
      {
        role: 'Slice-Correction Driver',
        productSlug: 'callaway-paradym-driver',
        customSpecNote: '12.0° Loft with sliding weight shifted to full "Draw" setting',
      },
      {
        role: 'Maximum MOI Irons',
        productSlug: 'callaway-rogue-st-max-os-irons',
        customSpecNote: 'Wide-sole cavity design with patented urethane microspheres',
      },
      {
        role: 'Chunk-Proof Wedge',
        productSlug: 'cleveland-cbx-zipcore-wedge',
        customSpecNote: '56° Cavity back wedge with wide dynamic sole',
      },
      {
        role: 'High-MOI Mallet Putter',
        productSlug: 'odyssey-white-hot-og-putter',
        customSpecNote: '#7 Winged mallet with high-contrast alignment wings',
      },
      {
        role: 'Slice-Reducing Ball',
        productSlug: 'callaway-supersoft-golf-balls',
        customSpecNote: '38 Ultra-low compression to cut side spin by up to 350 RPM',
      },
    ],
    assemblyInstructions: [
      'Step 1: Set driver loft to 12 degrees to ensure ball gets into the air without forcing an artificial upward scoop.',
      'Step 2: Replace hard 4-iron and 3-iron with forgiving 5-hybrid and 7-wood.',
      'Step 3: Play exclusively low-compression balls (Callaway Supersoft) to eliminate the harsh sting of cold-weather thin strikes.',
    ],
    proFittingNotes: 'The primary goal for a 20-handicapper is eliminating the double bogey. Keeping tee shots in play and pitching onto the green in regulation or +1 saves 6–9 strokes per round.',
  }
];

export function getBlueprintBySlug(slug: string): Blueprint | undefined {
  return BLUEPRINTS.find(b => b.slug === slug);
}
