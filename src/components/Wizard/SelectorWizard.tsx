import React, { useState } from 'react';
import { QuizState } from '../../types/domain';
import { calculateBiomechanics } from '../../utils/physicsCalculator';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Gauge, Ruler, Target, Zap, ShieldCheck } from 'lucide-react';

interface SelectorWizardProps {
  onComplete: (quiz: QuizState) => void;
}

export const SelectorWizard: React.FC<SelectorWizardProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [quiz, setQuiz] = useState<QuizState>({
    swingSpeed: '85-95',
    handicap: 'high-20-plus',
    height: 'standard',
    missTendency: 'slice',
    greenPriority: 'distance-roll',
    experienceYears: 2,
  });

  const preview = calculateBiomechanics(quiz);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(quiz);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      
      {/* Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fairway-950/80 border border-fairway-600/40 text-fairway-300 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Quick 30-Second Golf Quiz</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Find Your Perfect <span className="text-fairway-400">Club & Ball Match</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Answer 5 simple questions. We do the math to pick the clubs and balls that fly straightest for you.
        </p>

        {/* Step Indicator */}
        <div className="flex justify-center items-center gap-2 mt-5">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                step === currentStep
                  ? 'w-10 bg-fairway-400'
                  : step < currentStep
                  ? 'w-6 bg-fairway-700'
                  : 'w-6 bg-slate-800'
              }`}
            />
          ))}
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          Question {currentStep} of 5
        </div>
      </div>

      {/* Main Quiz Box */}
      <div className="bg-[#0a2318] border border-fairway-800/80 rounded-3xl p-6 sm:p-9 shadow-2xl relative">
        
        {/* Step 1: Distance / Swing Speed */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-fairway-950 border border-fairway-700/60 flex items-center justify-center text-fairway-400">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">How far does your typical driver shot go?</h2>
                <p className="text-xs text-slate-300">This tells us how stiff your club shafts should be.</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'under-75', label: 'Under 190 yards', desc: 'Smooth, easy swing. Best with a lightweight Senior / Light flex shaft.' },
                { id: '75-85', label: '190 to 220 yards', desc: 'Average smooth swing. Best with a standard Regular flex shaft.' },
                { id: '85-95', label: '220 to 250 yards', desc: 'Solid athletic swing. Best with a firm Regular or Stiff shaft.' },
                { id: '95-105', label: '250 to 275 yards', desc: 'Fast, powerful swing. Best with a Stiff flex shaft to keep it straight.' },
                { id: '105-plus', label: '275+ yards', desc: 'Tour-level high speed. Best with an Extra Stiff (X-Stiff) shaft.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setQuiz({ ...quiz, swingSpeed: opt.id as any })}
                  className={`w-full p-4 rounded-2xl border text-left transition-all ${
                    quiz.swingSpeed === opt.id
                      ? 'bg-fairway-950/90 border-fairway-400 shadow-md'
                      : 'bg-slate-950/60 border-fairway-900/60 hover:border-fairway-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{opt.label}</span>
                    {quiz.swingSpeed === opt.id && <CheckCircle2 className="w-5 h-5 text-fairway-400" />}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Score / Handicap */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-fairway-950 border border-fairway-700/60 flex items-center justify-center text-fairway-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">What do you usually shoot for 18 holes?</h2>
                <p className="text-xs text-slate-300">Helps us pick how forgiving your irons should be.</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'high-20-plus', label: 'Over 100 (or just starting out)', desc: 'Needs big, easy-to-hit cavity back irons with wide bottoms.' },
                { id: 'mid-10-19', label: '85 to 99 (Weekend regular)', desc: 'Balanced irons with great distance and a clean look.' },
                { id: 'low-0-9', label: 'Under 85 (Single-digit handicap)', desc: 'Slim player irons that let you shape shots left or right.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setQuiz({ ...quiz, handicap: opt.id as any })}
                  className={`w-full p-4 rounded-2xl border text-left transition-all ${
                    quiz.handicap === opt.id
                      ? 'bg-fairway-950/90 border-fairway-400 shadow-md'
                      : 'bg-slate-950/60 border-fairway-900/60 hover:border-fairway-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{opt.label}</span>
                    {quiz.handicap === opt.id && <CheckCircle2 className="w-5 h-5 text-fairway-400" />}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Height */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-fairway-950 border border-fairway-700/60 flex items-center justify-center text-fairway-400">
                <Ruler className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">How tall are you?</h2>
                <p className="text-xs text-slate-300">Determines if you need longer shafts so you don't hunch your back.</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'petite', label: 'Under 5’7” (Shorter Stature)', desc: 'Needs shorter shafts (-0.5”) so you don’t have to choke down on the grip.' },
                { id: 'standard', label: '5’7” to 6’1” (Standard Height)', desc: 'Standard off-the-rack club length and factory angle.' },
                { id: 'tall', label: '6’2” to 6’4” (Tall Golfer)', desc: 'Needs +1.0” longer shafts and upright club angle to protect your back.' },
                { id: 'extra-tall', label: '6’5” and Over (Extra Tall)', desc: 'Needs custom +1.5” extra-long shafts so you can stand comfortably.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setQuiz({ ...quiz, height: opt.id as any })}
                  className={`w-full p-4 rounded-2xl border text-left transition-all ${
                    quiz.height === opt.id
                      ? 'bg-fairway-950/90 border-fairway-400 shadow-md'
                      : 'bg-slate-950/60 border-fairway-900/60 hover:border-fairway-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{opt.label}</span>
                    {quiz.height === opt.id && <CheckCircle2 className="w-5 h-5 text-fairway-400" />}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Miss Tendency */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-fairway-950 border border-fairway-700/60 flex items-center justify-center text-fairway-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">What is your most common bad shot?</h2>
                <p className="text-xs text-slate-300">Helps us pick club weighting that fights your mistake.</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'slice', label: 'Slice (Curves hard to the right)', desc: 'Needs "Draw-biased" clubs and a low-spin soft ball to straighten it out.' },
                { id: 'hook', label: 'Hook (Ducks hard to the left)', desc: 'Needs neutral-weighted clubs that keep the face square.' },
                { id: 'low-trajectory', label: 'Too Low (Hard to get in the air)', desc: 'Needs higher loft (like a 12° driver) to help the ball fly high.' },
                { id: 'inconsistent-strike', label: 'Hitting dirt (fat) or the top of the ball (thin)', desc: 'Needs wide-bottom irons that glide through grass without digging.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setQuiz({ ...quiz, missTendency: opt.id as any })}
                  className={`w-full p-4 rounded-2xl border text-left transition-all ${
                    quiz.missTendency === opt.id
                      ? 'bg-fairway-950/90 border-fairway-400 shadow-md'
                      : 'bg-slate-950/60 border-fairway-900/60 hover:border-fairway-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{opt.label}</span>
                    {quiz.missTendency === opt.id && <CheckCircle2 className="w-5 h-5 text-fairway-400" />}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Ball Priority */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-fairway-950 border border-fairway-700/60 flex items-center justify-center text-fairway-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">What do you want most from your golf ball?</h2>
                <p className="text-xs text-slate-300">Picks the right golf ball core softness for your game.</p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'distance-roll', label: 'Straight Flight & Maximum Roll (Most Popular)', desc: 'Soft ball that cuts down on wild slices and rolls far on fairways.' },
                { id: 'greenside-spin', label: 'Lots of Backspin Around Greens', desc: 'Soft urethane cover that grabs the green and stops quickly on chips.' },
                { id: 'balanced', label: 'A Good Mix of Both', desc: 'Durable ball that feels soft when putting and still gives good distance.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setQuiz({ ...quiz, greenPriority: opt.id as any })}
                  className={`w-full p-4 rounded-2xl border text-left transition-all ${
                    quiz.greenPriority === opt.id
                      ? 'bg-fairway-950/90 border-fairway-400 shadow-md'
                      : 'bg-slate-950/60 border-fairway-900/60 hover:border-fairway-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{opt.label}</span>
                    {quiz.greenPriority === opt.id && <CheckCircle2 className="w-5 h-5 text-fairway-400" />}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Smart Match Preview & Navigation */}
        <div className="mt-8 pt-6 border-t border-fairway-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-fairway-400 font-bold">
              YOUR LIVE RECOMMENDATION
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-950 px-2.5 py-1 rounded-md text-slate-200 border border-fairway-900">
                Shaft: <strong className="text-fairway-400">{preview.recommendedShaftFlex.split('(')[0]}</strong>
              </span>
              <span className="bg-slate-950 px-2.5 py-1 rounded-md text-slate-200 border border-fairway-900">
                Size: <strong className="text-fairway-400">{preview.shaftLengthAdjustment.split('(')[0]}</strong>
              </span>
              <span className="bg-slate-950 px-2.5 py-1 rounded-md text-slate-200 border border-fairway-900">
                Ball: <strong className="text-amber-400">{preview.targetBallCompression.split('(')[0]}</strong>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2.5 rounded-xl border border-fairway-800 text-slate-300 hover:text-white text-xs font-bold"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition-all shadow-md shadow-emerald-950/60 flex-1 sm:flex-none"
            >
              <span className="text-white">{currentStep === 5 ? 'Show My Results!' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
