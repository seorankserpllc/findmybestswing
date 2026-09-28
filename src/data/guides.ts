import { EditorialGuide } from '../types/domain';

export const EDITORIAL_GUIDES: EditorialGuide[] = [
  {
    id: 'driver-shaft-flex-swing-speed-matrix',
    slug: 'driver-shaft-flex-swing-speed-matrix',
    title: 'Driver Shaft Flex vs. Swing Speed: The Complete 70–105+ MPH Fitting Matrix',
    subtitle: 'Why playing the wrong shaft flex costs the average amateur 18–25 yards of carry and promotes severe dispersion faults.',
    readingTimeMinutes: 7,
    publishedDate: 'September 2026',
    authorName: 'Dr. Marcus Vance, PGA Master Fitter',
    authorTitle: 'Senior Ballistics & Biomechanics Director',
    excerpt: 'Matching driver shaft flex to your actual measured clubhead velocity is the single highest ROI equipment upgrade in modern golf. Here is the exact kinetic breakdown from 70 to 105+ MPH.',
    keyTakeaways: [
      'Shaft flex is not standardized across manufacturers; a "Stiff" flex in one brand can match a "Regular" in another.',
      'Under-flexed shafts cause excessive face closure and ballooning high-spin trajectories (> 3,000 RPM).',
      'Over-stiff shafts prevent kinetic kick, causing low-launch weak pushes out to the right for right-handed players.',
      'Golfers swinging 90–98 MPH achieve peak efficiency with 60–65g mid-launch Stiff or firm Regular profiles.',
    ],
    contentSections: [
      {
        heading: 'The Physics of Shaft Deflection & Face Presentation',
        body: [
          'During the downswing, a golf shaft experiences three distinct mechanical forces: bending (deflection in the swing plane), drooping (vertical deflection toward the ball), and twisting (torsional torque).',
          'At the transition from backswing to downswing, kinetic energy is loaded into the graphite fibers. As the hands approach the impact zone, the shaft unloads, kicking forward so the clubhead leads the hands. If the shaft stiffness does not match the golfer’s acceleration rate, the face arrives either open or closed relative to the swing path.'
        ],
        callout: {
          type: 'info',
          title: 'The Kinetic Kick Point Rule',
          message: 'Golfers with smooth, syrupy transition tempos can play a softer flex than aggressive, quick-tempo hitters with the identical top swing speed.'
        }
      },
      {
        heading: 'The 70 to 105+ MPH Shaft Velocity Matrix',
        body: [
          '• Under 75 MPH (Ladies / Senior / A-Flex): Requires ultra-lightweight 45–52g graphite with soft tip section to kick the ball airborne without physical strain.',
          '• 75 to 85 MPH (Regular Flex / R): The sweet spot for recreational male golfers. 55–60g shaft weight preserves tempo while providing 12°–14° optimal launch.',
          '• 85 to 95 MPH (Firm Regular / Stiff S): Requires a mid-kick profile (60–65g) to tame backspin under 2,600 RPM while maintaining generous carry.',
          '• 95 to 105 MPH (Stiff / Tour S): The modern athletic amateur range. Demands lower torque (under 3.8°) to prevent the toe from drooping under aggressive centrifugal force.',
          '• 105+ MPH (Extra Stiff / X-Stiff): 70–78g low-launch, low-spin profile to keep launch angles penetrating and spin below 2,200 RPM.'
        ]
      },
      {
        heading: 'Common Failure Mode: Ego-Fitting the Tour Stiff Shaft',
        body: [
          'Over 60% of amateur golfers purchase "Stiff" or "Tour X" driver shafts because they believe their best drive from two summers ago represents their actual playing speed.',
          'When TrackMan radar measures them on the range, their true cruising velocity is 88–92 MPH. Playing an overly stiff shaft robs them of kinetic rebound, turning potential 240-yard center strikes into 215-yard low fades.'
        ],
        callout: {
          type: 'warning',
          title: 'Warning: Launch Monitor Verification',
          message: 'Always warm up thoroughly before measuring swing speed. Your 1st hole morning speed is typically 4–6 MPH lower than your mid-round speed.'
        }
      }
    ],
    relatedProducts: ['taylormade-stealth-2-driver', 'callaway-paradym-driver', 'titleist-pro-v1-golf-balls'],
  },
  {
    id: 'golf-ball-compression-chart-velocity-guide',
    slug: 'golf-ball-compression-chart-velocity-guide',
    title: 'Golf Ball Compression Chart: Matching Core Rating to Your Clubhead Velocity',
    subtitle: 'Stop wasting money on $55 tour balls that your swing speed cannot physically compress.',
    readingTimeMinutes: 6,
    publishedDate: 'September 2026',
    authorName: 'Dr. Marcus Vance, PGA Master Fitter',
    authorTitle: 'Senior Ballistics & Biomechanics Director',
    excerpt: 'Golf ball compression measures how many thousandths of an inch a core deforms under a standard 200-pound load. Here is how to match compression (35 to 100+) to your velocity.',
    keyTakeaways: [
      'A golf ball must compress by 25%–35% during impact to create the spring-like energy transfer known as coefficient of restitution (COR).',
      'If your driver speed is under 85 MPH, striking a 90+ compression ball feels like a rock and costs you 8–15 yards of carry.',
      'Ultra-soft balls (35–50 compression) reduce driver side-spin, noticeably straightening out chronic slices.',
      'High-speed players (> 100 MPH) will "pancake" ultra-soft balls, causing excessive face contact time and loss of ball speed.',
    ],
    contentSections: [
      {
        heading: 'What Is Compression in Modern Golf Ball Architecture?',
        body: [
          'In laboratory testing, compression is rated on a scale from 0 to 120. A rating of 100 means the ball deflects exactly zero under a 200 lb test load, whereas each point decrease represents an additional 0.001 inch of core deflection.',
          'When a golf club strikes a ball at 90 MPH, over 2,000 pounds of force is exerted in less than 450 microseconds. If the core is too firm for your velocity, kinetic energy is lost as acoustic shock waves rather than forward propulsion.'
        ]
      },
      {
        heading: 'The Compression Matching Framework',
        body: [
          '• 35 to 55 Compression (Callaway Supersoft, Wilson Duo Soft): Perfect for swing speeds under 80 MPH. Offers spring-like rebound and plush feedback off putters.',
          '• 60 to 75 Compression (Srixon Soft Feel, Bridgestone e6): The ideal balanced tier for 80–92 MPH. Combines low long-game spin with responsive iron control.',
          '• 80 to 90 Compression (TaylorMade Distance+, Titleist Velocity): Mid-firm cores designed for maximum rollout on fairways.',
          '• 90 to 102 Compression (Titleist Pro V1, TaylorMade TP5): Multi-layer tour grade balls requiring 95+ MPH swing speeds to fully activate the core.'
        ],
        callout: {
          type: 'tip',
          title: 'Cold Weather Tip',
          message: 'In temperatures below 50°F (10°C), polybutadiene rubber cores stiffen by 10–15 compression points. Switch to a lower compression ball during winter rounds.'
        }
      }
    ],
    relatedProducts: ['callaway-supersoft-golf-balls', 'titleist-pro-v1-golf-balls', 'srixon-soft-feel-golf-balls'],
  },
  {
    id: 'tall-golfer-club-fitting-guide',
    slug: 'tall-golfer-club-fitting-guide',
    title: 'Tall Golfer Club Fitting Guide: Wrist-to-Floor, Lie Angles & Extended Shafts',
    subtitle: 'Why off-the-rack golf clubs destroy spinal posture and cause heel-drag slices for players 6’2” and taller.',
    readingTimeMinutes: 8,
    publishedDate: 'September 2026',
    authorName: 'Dr. Marcus Vance, PGA Master Fitter',
    authorTitle: 'Senior Ballistics & Biomechanics Director',
    excerpt: 'Standard golf clubs are built for a 5’9” golfer. If you are 6’2” or taller, playing standard length forces an unnaturally hunched spine and causes chronic fat shots and toe-up slice pushes.',
    keyTakeaways: [
      'Total height alone is not enough; wrist-to-floor (WTF) measurement determines exact shaft length requirements.',
      'Every +0.5" in shaft length makes the effective dynamic lie angle 1 degree more upright.',
      'Tall golfers frequently suffer from heel-drag pushes when playing flat standard lie angles.',
      'Factory +1.0" sets like the Wilson Profile Platinum solve posture fatigue immediately out of the box.',
    ],
    contentSections: [
      {
        heading: 'The Biomechanical Problem: The Posture Compression Trap',
        body: [
          'When a 6’3” golfer attempts to address a standard 37-inch 7-iron, their spine must bend past 48 degrees, or their knees must excessively flex into a squat.',
          'This restricted posture prevents full thoracic rotation during the backswing, leading to an over-the-top casting move to reach the ball. The result is chronic lower back pain and frequent fat or topped strikes.'
        ]
      },
      {
        heading: 'How to Calculate Your Wrist-to-Floor Spec',
        body: [
          'Stand erect on a hard floor wearing your standard golf shoes, with your arms hanging naturally at your sides.',
          'Have a partner measure the vertical distance from the major wrist crease of your glove hand straight down to the floor.',
          '• 34" to 36" WTF: Standard Factory Length',
          '• 36" to 38" WTF: Add +0.5" to Irons and Wedges',
          '• 38" to 40" WTF: Add +1.0" and bend lie angles 2.0° Upright',
          '• 40"+ WTF: Add +1.5" custom shafts and bend lie angles 3.0° Upright'
        ],
        callout: {
          type: 'info',
          title: 'Putter Sizing for Tall Golfers',
          message: 'Never play a 33" or 34" putter if you are over 6’2”. A 35" putter allows your eyes to hang directly over the ball without curling your neck vertebrae.'
        }
      }
    ],
    relatedProducts: ['wilson-profile-platinum', 'callaway-rogue-st-max-os-irons', 'odyssey-white-hot-og-putter'],
  }
];

export function getGuideBySlug(slug: string): EditorialGuide | undefined {
  return EDITORIAL_GUIDES.find(g => g.slug === slug);
}
