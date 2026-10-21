import React from 'react';
import { renderToString } from 'react-dom/server';
import { App, getRouteMeta } from './App';
import { EDITORIAL_GUIDES } from './data/guides';
import { GUIDE_CONNECTIONS } from './data/guideConnections';

export const guideRoutes = ['/guides', ...EDITORIAL_GUIDES.map(guide => `/guides/${guide.slug}`)];
export const guideAuditData = EDITORIAL_GUIDES;
export { carryGap } from './components/Guides/CarryGapWorksheet';

export function validateGuideLinks() {
  for (const guide of EDITORIAL_GUIDES) {
    const connections = GUIDE_CONNECTIONS[guide.slug] ?? [];
    if (connections.length === 0) throw new Error(`No contextual links for ${guide.slug}`);
    for (const link of connections) {
      if (!guide.contentSections.some(section => section.heading === link.section)) throw new Error(`Missing link section in ${guide.slug}: ${link.section}`);
      if (link.slug === guide.slug || !EDITORIAL_GUIDES.some(target => target.slug === link.slug)) throw new Error(`Invalid guide target: ${link.slug}`);
    }
    if (!Object.values(GUIDE_CONNECTIONS).flat().some(link => link.slug === guide.slug)) throw new Error(`No contextual incoming link for ${guide.slug}`);
  }
}

export function renderGuideRoute(route: string) {
  if (!guideRoutes.includes(route)) throw new Error(`Unknown prerender route: ${route}`);
  return { html: renderToString(<React.StrictMode><App initialRoute={route} /></React.StrictMode>), meta: getRouteMeta(route) };
}
