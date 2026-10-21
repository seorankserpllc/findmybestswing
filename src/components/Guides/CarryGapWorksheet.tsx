import React, { useState } from 'react';

export function carryGap(longer: string, shorter: string): number | null {
  if (!longer.trim() || !shorter.trim()) return null;
  const values = [Number(longer), Number(shorter)];
  if (values.some(value => !Number.isFinite(value) || value <= 0 || value > 400)) return null;
  return Math.round((values[0] - values[1]) * 10) / 10;
}

export function CarryGapWorksheet() {
  const [carries, setCarries] = useState(['', '', '']);
  const [unit, setUnit] = useState('yards');
  const labels = ['Longer club', 'Middle club', 'Shorter club'];
  const valid = carries.map(value => carryGap(value, value) !== null);
  const maximum = Math.max(1, ...carries.map((value, index) => valid[index] ? Number(value) : 0));
  return (
    <section aria-labelledby="carry-worksheet-heading" className="max-w-4xl rounded-3xl border border-emerald-700/60 bg-slate-900 p-5 sm:p-8 space-y-5">
      <div>
        <p className="text-xs uppercase tracking-wider font-bold text-emerald-300 mb-2">Your fitting notes</p>
        <h2 id="carry-worksheet-heading" className="text-xl sm:text-2xl font-bold text-white">Do these three clubs cover different distances?</h2>
        <p className="mt-3 text-sm text-slate-300">Enter typical measured carry for three neighboring clubs, longest first. Use the same ball and conditions, include ordinary mishits, and keep carry separate from total distance. Try your longest three irons or your PW and next two wedges.</p>
      </div>
      <label className="flex flex-wrap items-center gap-3 text-sm text-slate-200">Units
        <select value={unit} onChange={event => { setUnit(event.target.value); setCarries(['', '', '']); }} className="bg-slate-950 rounded-lg border border-slate-600 p-2">
          <option value="yards">Yards</option><option value="metres">Metres</option>
        </select>
      </label>
      <p className="text-xs text-slate-400">Changing units clears the entries; it does not convert them. Enter values above 0 and no greater than 400.</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {labels.map((label, index) => (
          <label key={label} className="min-w-0 text-sm font-semibold text-slate-200">{label} carry ({unit})
            <input type="number" min="0.1" max="400" step="0.1" inputMode="decimal" value={carries[index]} onChange={event => setCarries(previous => previous.map((value, i) => i === index ? event.target.value : value))} aria-invalid={carries[index] !== '' && !valid[index]} className="mt-2 block w-full min-w-0 rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white focus:border-emerald-400" />
          </label>
        ))}
      </div>
      <div aria-live="polite" aria-atomic="true" className="space-y-4">
        {labels.map((label, index) => (
          <div key={label} className="text-sm text-slate-200">
            <div className="flex justify-between gap-3 mb-1"><span>{label}</span><span>{valid[index] ? `${Number(carries[index])} ${unit}` : 'Awaiting a valid carry'}</span></div>
            <div aria-hidden="true" className="h-3 rounded-full bg-slate-800 overflow-hidden"><div className="h-full bg-emerald-400 rounded-full" style={{ width: valid[index] ? `${Number(carries[index]) / maximum * 100}%` : '0%' }} /></div>
          </div>
        ))}
        <p className="text-sm font-semibold text-emerald-200">Adjacent gaps: {[0, 1].map(index => {
          const gap = carryGap(carries[index], carries[index + 1]);
          return gap === null ? '—' : `${gap} ${unit}${gap <= 0 ? ' (overlap or reversed order)' : ''}`;
        }).join(' / ')}</p>
      </div>
      <p className="text-sm text-slate-300">This is subtraction of your inputs, not a fitting result or a distance prediction. Bars share a zero baseline and scale to your longest entry. A positive gap alone does not prove useful separation: compare the full shot spreads, flight and landing behavior with your fitter. Overlapping results are a reason to investigate before buying an extra club.</p>
      <noscript><p className="text-sm text-slate-300">To use the worksheet without JavaScript, write down the three carry distances and subtract each shorter club from its neighbor. The article and fitting protocol remain available below.</p></noscript>
    </section>
  );
}
