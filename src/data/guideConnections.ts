// Curated next decisions, placed in the section where the reader needs them.
export interface GuideConnection {
  section: string;
  slug: string;
  before: string;
  label: string;
  after: string;
}

export const GUIDE_CONNECTIONS: Record<string, GuideConnection[]> = {
  'best-irons-for-20-handicap': [
    { section: 'Fit the whole build, including the ends of the set', slug: 'tall-golfer-club-fitting-guide', before: 'If standard length is in doubt, use our ', label: 'height and wrist-to-floor fitting guide', after: ' to prepare for the length-and-lie discussion.' },
    { section: 'Fit the whole build, including the ends of the set', slug: 'what-wedges-should-a-beginner-carry', before: 'Once the iron set is settled, ', label: 'plan the wedges around its actual PW loft', after: ' instead of buying a familiar three-wedge bundle.' },
  ],
  'what-wedges-should-a-beginner-carry': [
    { section: 'First, inventory the wedges already in your bag', slug: 'best-irons-for-20-handicap', before: 'Replacing your irons too? ', label: 'Compare the iron set and its included wedges first', after: ' so the two purchases cover different jobs.' },
    { section: 'A practical comparison before you buy', slug: 'golf-ball-compression-chart-velocity-guide', before: 'Keep your test ball consistent; our ', label: 'golf-ball buying guide', after: ' explains a green-to-tee comparison before buying several dozen.' },
  ],
  'driver-shaft-flex-swing-speed-matrix': [
    { section: 'Buying online without a full fitting', slug: 'tall-golfer-club-fitting-guide', before: 'If club length is also uncertain, read ', label: 'how height and wrist-to-floor measurements inform fitting', after: ' before choosing a stock build.' },
    { section: 'How to choose between two shafts in 20 useful swings', slug: 'best-irons-for-20-handicap', before: 'For the separate iron decision, use our ', label: 'iron-set comparison and fitting protocol', after: '; a driver shaft result is not an iron prescription.' },
  ],
  'tall-golfer-club-fitting-guide': [
    { section: 'Fit the bag by club type', slug: 'driver-shaft-flex-swing-speed-matrix', before: 'For the driver, use ', label: 'swing speed and tempo to shortlist shafts for a test', after: ' rather than carrying an iron-shaft label across the bag.' },
    { section: 'Fit the bag by club type', slug: 'choose-putter-length', before: 'Give the putter its own check with our ', label: '33-, 34- and 35-inch putter-length comparison', after: '.' },
    { section: 'Standard, tall package set, custom order or retrofit?', slug: 'best-irons-for-20-handicap', before: 'Before paying for a full iron set, ', label: 'compare head choices and the clubs you will actually carry', after: ' alongside the fitted dimensions.' },
  ],
  'choose-putter-length': [
    { section: 'Use 33, 34 and 35 inches as trial choices', slug: 'tall-golfer-club-fitting-guide', before: 'If you are reviewing the whole bag, our ', label: 'club-fitting guide for tall golfers', after: ' separates length from lie and treats each club category individually.' },
    { section: 'Run a short-putt and distance-control comparison', slug: 'golf-ball-compression-chart-velocity-guide', before: 'Keep the ball consistent during the trial. Use the ', label: 'ball comparison protocol', after: ' when deciding whether to change that part of your setup.' },
  ],
  'golf-ball-compression-chart-velocity-guide': [
    { section: 'A practical comparison before buying several dozen', slug: 'choose-putter-length', before: 'If distance control remains uncomfortable, ', label: 'check putter length with a separate trial', after: ' instead of changing ball and putter together.' },
    { section: 'Match the exact online box to the ball you tried', slug: 'choose-portable-golf-ball-washer', before: 'For the cleaning routine between allowed shots, ', label: 'compare a towel with a portable ball washer', after: ' before adding another accessory.' },
  ],
  'when-to-replace-golf-grips': [
    { section: 'Size the installed grip, not just its label', slug: 'how-should-a-golf-glove-fit', before: 'Check the other part of your hand-to-club setup with our ', label: 'golf-glove fit and try-on guide', after: '.' },
    { section: 'One replacement, a full set or a premium change?', slug: 'best-irons-for-20-handicap', before: 'If replacement irons are also on the list, ', label: 'compare repair versus replacing the set', after: ' before paying to regrip clubs you may stop using.' },
  ],
  'how-should-a-golf-glove-fit': [
    { section: 'A practical try-on protocol before you commit', slug: 'when-to-replace-golf-grips', before: 'If the club still feels insecure, ', label: 'inspect and clean the grip before replacing it', after: ' rather than assuming a tighter glove will solve the problem.' },
    { section: 'Regular or cadet: fix the right problem', slug: 'sklz-tempo-grip-trainer-buying-guide', before: 'Considering a molded training grip as well? ', label: 'Check the trainer’s hand fit and intended grip pattern', after: ' as a separate purchase decision.' },
  ],
  'sklz-tempo-grip-trainer-buying-guide': [
    { section: 'Start with hand fit and the grip you actually want', slug: 'how-should-a-golf-glove-fit', before: 'Use our ', label: 'glove-fit checks', after: ' if loose material or restricted hand movement is confusing the grip trial.' },
    { section: 'A trainer, a grip attachment or a lesson?', slug: 'when-to-replace-golf-grips', before: 'Before buying a training aid for a slipping club, ', label: 'check whether your existing grips need attention', after: '.' },
  ],
  'choose-portable-golf-ball-washer': [
    { section: 'A practical keep-or-return trial', slug: 'golf-ball-compression-chart-velocity-guide', before: 'If you are changing the ball itself, ', label: 'compare ball models with a separate playing test', after: ' before stocking up.' },
    { section: 'Check fit with your loaded bag or actual cart', slug: 'choose-golf-bag-storage-organizer', before: 'For storage at home, ', label: 'measure your loaded bag and organizer space', after: ' with the accessories you actually keep attached.' },
  ],
  'choose-golf-bag-storage-organizer': [
    { section: 'Storage location matters more than a rust-proof promise', slug: 'are-golf-iron-covers-worth-it', before: 'If covers are part of your storage routine, ', label: 'consider fit and drying before covering irons', after: '.' },
    { section: 'Buy for the storage problem you actually have', slug: 'choose-replacement-golf-shoe-spikes', before: 'When sorting shoes into the organizer, ', label: 'inspect spike wear and replacement compatibility', after: ' before buying a replacement pack.' },
  ],
  'are-golf-iron-covers-worth-it': [
    { section: 'After a wet round, care comes before covering', slug: 'choose-golf-bag-storage-organizer', before: 'Review ', label: 'bag storage location and clearance', after: ' alongside the drying routine.' },
    { section: 'What the selected set includes—and what its labels mean', slug: 'best-irons-for-20-handicap', before: 'Buying irons at the same time? ', label: 'Settle the iron-set composition first', after: ' so cover labels match the clubs you will carry.' },
  ],
  'choose-replacement-golf-shoe-spikes': [
    { section: 'Inspect the whole shoe before choosing a repair', slug: 'choose-golf-bag-storage-organizer', before: 'For your after-round setup, ', label: 'plan space for your bag and shoes', after: ' around the actual storage location.' },
    { section: 'Compare the finished repair cost', slug: 'when-to-replace-golf-grips', before: 'If several pieces of equipment need attention, use our ', label: 'grip cleaning and replacement checks', after: ' to prioritize another common maintenance expense.' },
  ],
};
