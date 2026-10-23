import React, { useState } from 'react';

export function ballReplacementCost(dozenPrice: string, ballsPerRound: string, rounds: string): number | null {
  const inputs = [dozenPrice, ballsPerRound, rounds];
  if (inputs.some(value => !value.trim())) return null;
  const [price, balls, count] = inputs.map(Number);
  if (![price, balls, count].every(Number.isFinite) || price < 0.01 || price > 1000 || balls < 0 || balls > 36 || count < 1 || count > 365 || !Number.isInteger(count)) return null;
  return price / 12 * balls * count;
}

export function BallCostWorksheet() {
  const [values, setValues] = useState(['', '', '', '']);
  const fields = [
    { label: 'Supersoft delivered dozen price (USD)', min: 0.01, max: 1000, step: '0.01' },
    { label: 'Pro V1 delivered dozen price (USD)', min: 0.01, max: 1000, step: '0.01' },
    { label: 'Balls lost or retired per round (average)', min: 0, max: 36, step: 'any' },
    { label: 'Rounds to budget for', min: 1, max: 365, step: '1' },
  ];
  const costs = values.slice(0, 2).map(price => ballReplacementCost(price, values[2], values[3]));
  const maximum = Math.max(...costs.map(cost => cost ?? 0)) || 1;
  const money = (value: number) => `$${value.toFixed(2)}`;
  const valid = values.map((value, i) => value.trim() !== '' && Number.isFinite(Number(value)) && Number(value) >= fields[i].min && Number(value) <= fields[i].max && (i !== 3 || Number.isInteger(Number(value))));

  return (
    <section aria-labelledby="ball-cost-heading" className="max-w-4xl rounded-3xl border border-emerald-700/60 bg-slate-900 p-5 sm:p-8 space-y-5">
      <h2 id="ball-cost-heading" className="text-xl sm:text-2xl font-bold text-white">What does the premium cost over your next rounds?</h2>
      <p className="text-sm text-slate-300">Enter current delivered prices for one dozen of each ball, including tax and shipping. Use your own average replacement rate for both to isolate the price difference. These are your inputs, not live offers or measured product results.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <label key={field.label} className="min-w-0 text-sm font-semibold text-slate-200">{field.label}
            <input type="number" inputMode="decimal" min={field.min} max={field.max} step={field.step} value={values[index]} onChange={event => setValues(previous => previous.map((value, i) => i === index ? event.target.value : value))} aria-invalid={values[index] !== '' && !valid[index]} aria-describedby="ball-cost-limits" className="mt-2 block w-full min-w-0 rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white focus:border-emerald-400" />
          </label>
        ))}
      </div>
      <p id="ball-cost-limits" className="text-xs text-slate-400">Use prices from $0.01 through $1,000, 0–36 balls per round (fractions allowed), and 1–365 whole rounds.</p>
      <div aria-live="polite" aria-atomic="true" className="space-y-3">
        {['Supersoft', 'Pro V1'].map((name, index) => (
          <div key={name} className="text-sm text-slate-200">
            <p className="flex flex-wrap justify-between gap-2 mb-1"><span>{name} replacement allowance</span><strong>{costs[index] === null ? 'Enter valid inputs' : money(costs[index])}</strong></p>
            <div aria-hidden="true" className="h-3 rounded-full bg-slate-800 overflow-hidden"><div className="h-full rounded-full bg-emerald-400" style={{ width: `${(costs[index] ?? 0) / maximum * 100}%` }} /></div>
          </div>
        ))}
        <p className="font-semibold text-emerald-200">{costs[0] !== null && costs[1] !== null ? `Pro V1 minus Supersoft: ${money(costs[1] - costs[0])} over ${Number(values[3])} rounds.` : 'Complete all four fields to compare the replacement allowance.'}</p>
      </div>
      <p className="text-sm text-slate-300">Method: delivered dozen price ÷ 12 × balls replaced per round × rounds. This is a proportional allowance, not a checkout total: whole-box purchases and balls already owned change cash spending. Zero losses means zero replacement allowance, not a free first box. Bars share a zero baseline and scale to the larger allowance. The calculation cannot predict strokes saved or prove either ball is better.</p>
      <noscript><p className="text-sm text-slate-300">Without JavaScript, calculate both allowances using the formula above and subtract Supersoft from Pro V1. Decide whether a useful result in your playing comparison justifies that difference.</p></noscript>
    </section>
  );
}
