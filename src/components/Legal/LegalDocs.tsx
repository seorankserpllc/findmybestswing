import React from 'react';
import { ArrowLeft, ShieldCheck, Scale, FileText } from 'lucide-react';

interface LegalDocsProps {
  documentType: 'disclosure' | 'privacy' | 'terms';
  onBack: () => void;
}

export const LegalDocs: React.FC<LegalDocsProps> = ({ documentType, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Platform</span>
        </button>
      </div>

      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        
        {/* Amazon & FTC Affiliate Disclosure */}
        {documentType === 'disclosure' && (
          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Amazon Associates & FTC Endorsement Disclosure
              </h1>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-700/50 text-emerald-200 font-semibold">
              "As an Amazon Associate I earn from qualifying purchases."
            </div>

            <p>
              This website (<span className="text-white font-semibold">FindMyBestSwing.com</span>) is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">FTC 16 CFR § 255.5 Compliance Statement</h2>
            <p>
              In accordance with Federal Trade Commission (FTC) guidelines concerning the use of endorsements and testimonials in advertising, please assume that any outbound product links leading to Amazon.com are affiliate referral links. When you click these links and complete a purchase, our testing laboratory may receive a small commission at zero additional cost to you.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">Independent Laboratory Integrity</h2>
            <p>
              Our editorial testing staff operates with complete independence. Equipment rankings, 5-Factor Scorecards, and TrackMan ballistics benchmarks are determined purely by launch monitor data, radar dispersion, and physical metallurgy analysis. We do not accept sponsored placements, free merchandise in exchange for positive reviews, or manufacturer editorial control.
            </p>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
              Last updated: September 28, 2026 • Operating Entity: SEO RANK SERP LLC
            </div>
          </div>
        )}

        {/* Privacy Policy (GDPR / CCPA / CPRA) */}
        {documentType === 'privacy' && (
          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <FileText className="w-6 h-6 text-emerald-400" />
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Privacy Policy (GDPR & CCPA Compliant)
              </h1>
            </div>

            <p>
              This Privacy Policy explains how <span className="text-white font-semibold">SEO RANK SERP LLC</span> ("we", "us", or "our") collects, uses, and discloses information when you use our golf equipment selector and review platform.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">1. Information We Collect</h2>
            <p>
              • <strong>Anonymous Technical Telemetry:</strong> Browser user agent, device screen dimensions, country of origin, and referral sources.<br/>
              • <strong>Quiz State & Preferences:</strong> Swing speed, handicap tier, and stature selections stored locally in your browser's <code className="text-emerald-400 font-mono text-xs">localStorage</code> to maintain state without tracking user identity.<br/>
              • <strong>Voluntary Inquiries:</strong> Name and email address when you voluntarily submit a message to our Technical Contact Desk.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">2. Cookie Usage & Affiliate Attribution</h2>
            <p>
              When clicking external links to Amazon.com, an affiliate tracking cookie with a standard 24-hour expiration window is placed by Amazon to credit qualifying purchases. We do not store or inspect any financial, payment, or credit card information.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">3. California Privacy Rights (CCPA / CPRA)</h2>
            <p>
              Under the California Consumer Privacy Act, California residents have the right to request disclosure of personal information collected, request deletion, and opt out of the sale or sharing of personal data. We do not sell user personal data to third parties.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">4. European Economic Area (GDPR)</h2>
            <p>
              If you reside in the EEA or UK, you have rights regarding access, rectification, portability, and erasure of your personal data. You may exercise these rights by submitting an inquiry to our Senior Editorial Desk.
            </p>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
              Operating Office: SEO RANK SERP LLC, 8 The Green, Dover, Delaware 19901, USA
            </div>
          </div>
        )}

        {/* Terms of Service */}
        {documentType === 'terms' && (
          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <Scale className="w-6 h-6 text-emerald-400" />
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Terms of Service
              </h1>
            </div>

            <p>
              By accessing or using the FindMyBestSwing website (mybestswing.com), you agree to be bound by these Terms of Service and all applicable federal and state laws.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">1. Educational & Sporting Equipment Guidance</h2>
            <p>
              All club recommendations, shaft flex matrices, lie angle calculations, and ball compression charts are provided strictly for educational and recreational sports guidance. Individual swing dynamics, wrist cock mechanics, and physical limitations vary; always consult with a certified PGA professional fitter before making expensive custom modifications.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">2. Intellectual Property</h2>
            <p>
              All original content, 5-factor scorecard graphics, blueprint architectures, and technical editorial guides are the proprietary intellectual property of SEO RANK SERP LLC. Unauthorized automated scraping or republication is strictly prohibited.
            </p>

            <h2 className="text-lg font-bold text-white pt-2">3. Limitation of Liability</h2>
            <p>
              In no event shall SEO RANK SERP LLC or its contributors be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this platform or equipment purchased through third-party retailers.
            </p>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
              Governing Law: State of Delaware, United States
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
