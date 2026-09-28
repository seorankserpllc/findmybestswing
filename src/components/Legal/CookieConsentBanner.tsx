import React, { useState, useEffect } from 'react';
import { Shield, Check, X, Settings } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [affiliateConsent, setAffiliateConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('golf_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'golf_cookie_consent',
      JSON.stringify({ essential: true, analytics: true, affiliate: true, timestamp: Date.now() })
    );
    setVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'golf_cookie_consent',
      JSON.stringify({
        essential: true,
        analytics: analyticsConsent,
        affiliate: affiliateConsent,
        timestamp: Date.now(),
      })
    );
    setVisible(false);
    setPreferencesOpen(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-slate-950/95 backdrop-blur-lg border-t border-emerald-900/40 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-start gap-3 max-w-3xl">
          <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
            <Shield className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Privacy & Cookie Preferences</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We use essential session storage to remember your equipment quiz results, and standard Amazon affiliate attribution cookies to support our independent editorial work. We do not sell your personal data.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={() => setPreferencesOpen(!preferencesOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white text-xs font-semibold transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Customize</span>
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 md:flex-none px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition-colors shadow-lg shadow-emerald-950/60"
          >
            Accept All Cookies
          </button>
        </div>

      </div>

      {/* Customize Drawer */}
      {preferencesOpen && (
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-2">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Essential Cookies</span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">REQUIRED</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Saves quiz selections and biomechanical calculation states in browser storage.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Analytics Telemetry</span>
              <input
                type="checkbox"
                checked={analyticsConsent}
                onChange={(e) => setAnalyticsConsent(e.target.checked)}
                className="rounded accent-emerald-500"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Measures anonymous page loads and performance benchmarks.</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Amazon Attribution</span>
                <input
                  type="checkbox"
                  checked={affiliateConsent}
                  onChange={(e) => setAffiliateConsent(e.target.checked)}
                  className="rounded accent-emerald-500"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Enables 24-hr Amazon referral cookie to support test lab equipment purchases.</p>
            </div>
            <button
              onClick={handleSaveCustom}
              className="mt-2 py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
            >
              Save Custom Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
