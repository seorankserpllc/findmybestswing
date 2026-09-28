import { QuizState, BiomechanicsResult } from '../types/domain';

export function calculateBiomechanics(quiz: QuizState): BiomechanicsResult {
  // 1. Shaft Flex Calculation
  let recommendedShaftFlex = 'Regular Flex';
  let targetBallCompression = 'Soft & Easy-to-Hit (60–75 Core)';
  
  switch (quiz.swingSpeed) {
    case 'under-75':
      recommendedShaftFlex = 'Senior / Light Flex (Gives extra whip for easy height)';
      targetBallCompression = 'Ultra-Soft Ball (Under 50 Core: squishes easily to fly straight)';
      break;
    case '75-85':
      recommendedShaftFlex = 'Regular Flex (The standard flex for smooth, steady swings)';
      targetBallCompression = 'Soft Feel Ball (50–65 Core: low spin so it rolls far)';
      break;
    case '85-95':
      recommendedShaftFlex = 'Regular or Stiff (Keeps the ball from ballooning too high)';
      targetBallCompression = 'All-Around Ball (65–80 Core: balanced carry and control)';
      break;
    case '95-105':
      recommendedShaftFlex = 'Stiff Flex (Controls fast swings so shots stay straight)';
      targetBallCompression = 'Tour Performance Ball (80–90 Core: grips the green on landing)';
      break;
    case '105-plus':
      recommendedShaftFlex = 'Extra Stiff (X-Stiff: maximum control for powerful hitters)';
      targetBallCompression = 'Tour Multi-Layer Ball (90+ Core: maximum spin control)';
      break;
  }

  // 2. Driver Loft Calculation
  let recommendedDriverLoft = '10.5° (The sweet spot for height and roll)';
  if (quiz.swingSpeed === 'under-75') {
    recommendedDriverLoft = '12.0° High Launch (Gets the ball airborne right away)';
  } else if (quiz.swingSpeed === '75-85') {
    recommendedDriverLoft = '11.5° Easy Launch (Helps the ball stay in the air longer)';
  } else if (quiz.swingSpeed === '95-105') {
    recommendedDriverLoft = '9.5° to 10.5° Piercing Flight (Flies through wind)';
  } else if (quiz.swingSpeed === '105-plus') {
    recommendedDriverLoft = '9.0° Low Spin (Long, flat trajectory that rolls forever)';
  }

  if (quiz.missTendency === 'low-trajectory') {
    recommendedDriverLoft += ' (Add loft to help you hit it higher)';
  }

  // 3. Stature & Lie Angle (Crucial for Tall Golfers!)
  let shaftLengthAdjustment = 'Standard Length (Fits most golfers 5’7” to 6’1”)';
  let lieAngleAdjustment = 'Standard Lie (Club sits flat on the grass at address)';

  switch (quiz.height) {
    case 'petite':
      shaftLengthAdjustment = 'Shorter (-0.5”) (So you don’t choke down on the grip)';
      lieAngleAdjustment = '1° Flat (Keeps your shots from accidentally hooking left)';
      break;
    case 'standard':
      shaftLengthAdjustment = 'Standard Length (Fits golfers 5’7” to 6’1”)';
      lieAngleAdjustment = 'Standard Lie (Club sole sits naturally flat)';
      break;
    case 'tall':
      shaftLengthAdjustment = 'Extended (+0.5” to +1.0”) (So you don’t have to hunch over)';
      lieAngleAdjustment = '2° Upright (Bent slightly up so the club doesn’t dig into the grass)';
      break;
    case 'extra-tall':
      shaftLengthAdjustment = 'Custom Long (+1.0” to +1.5”) (Protects your lower back)';
      lieAngleAdjustment = '3° Upright (Essential for tall players to hit clean shots)';
      break;
  }

  // 4. Ball Cover & Green Reaction
  let recommendedBallCover = '2-Piece Durable Cover (Flies straight and cuts down on slices)';
  if (quiz.greenPriority === 'greenside-spin') {
    recommendedBallCover = 'Soft Urethane Cover (Grabs the green and stops quickly)';
  } else if (quiz.greenPriority === 'balanced') {
    recommendedBallCover = 'Balanced 2-to-3 Piece (Good distance off the tee, soft putts)';
  }

  // 5. Club Head Style
  let primaryHeadStyle = 'Forgiving Cavity Back';
  if (quiz.handicap === 'high-20-plus') {
    primaryHeadStyle = 'Super Forgiving (Wide bottom sole so you don’t dig dirt on fat shots)';
  } else if (quiz.handicap === 'mid-10-19') {
    primaryHeadStyle = 'Game Improvement (Great distance with a clean look behind the ball)';
  } else {
    primaryHeadStyle = 'Player Irons (Slim look that lets you shape shots left or right)';
  }

  const analysisSummary = `For your swing and height, you'll hit your best shots with ${recommendedShaftFlex}, ${shaftLengthAdjustment}, and a ${targetBallCompression}.`;

  return {
    recommendedShaftFlex,
    recommendedDriverLoft,
    lieAngleAdjustment,
    shaftLengthAdjustment,
    targetBallCompression,
    recommendedBallCover,
    primaryHeadStyle,
    analysisSummary,
  };
}
