import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CookieConsentBanner } from './components/Legal/CookieConsentBanner';
import { HomePage } from './components/Home/HomePage';
import { SelectorWizard } from './components/Wizard/SelectorWizard';
import { ResultsView } from './components/Results/ResultsView';
import { CatalogView } from './components/Catalog/CatalogView';
import { ProductReviewPage } from './components/ProductDetail/ProductReviewPage';
import { BlueprintView } from './components/BlueprintStudio/BlueprintView';
import { GuidesHub } from './components/Guides/GuidesHub';
import { GuideDetail } from './components/Guides/GuideDetail';
import { ContactDesk } from './components/Contact/ContactDesk';
import { LegalDocs } from './components/Legal/LegalDocs';
import { QuizState } from './types/domain';
import { getProductBySlug } from './data/products';
import { getGuideBySlug } from './data/guides';
import { getBlueprintBySlug } from './data/blueprints';

const SITE_URL = 'https://mybestswing.com';
const DEFAULT_TITLE = 'FindMyBestSwing | Smart Golf Gear Matcher & Club Finder';
const DEFAULT_DESCRIPTION = 'Find golf clubs and golf balls matched to your swing, height, miss, needs, and budget.';

interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
}

function normalizeRoute(route: string): string {
  const withoutHash = route.replace(/^#/, '');
  const parsed = new URL(withoutHash || '/', SITE_URL);
  let pathname = parsed.pathname.replace(/\/+$/, '') || '/';

  if (pathname.startsWith('/product/')) pathname = pathname.replace('/product/', '/products/');
  if (pathname.startsWith('/guide/')) pathname = pathname.replace('/guide/', '/guides/');
  if (pathname.startsWith('/blueprint/')) pathname = pathname.replace('/blueprint/', '/blueprints/');

  return `${pathname}${parsed.search}`;
}

function readBrowserRoute(): string {
  const legacyRoute = window.location.hash.startsWith('#' + '/')
    ? window.location.hash.slice(1)
    : `${window.location.pathname}${window.location.search}`;
  const normalized = normalizeRoute(legacyRoute);

  if (`${window.location.pathname}${window.location.search}` !== normalized || window.location.hash) {
    window.history.replaceState({}, '', normalized);
  }

  return normalized;
}

function getRouteMeta(route: string): RouteMeta {
  const url = new URL(route, SITE_URL);
  const path = url.pathname;

  if (path.startsWith('/products/')) {
    const product = getProductBySlug(path.replace('/products/', ''));
    if (product) {
      return {
        title: `${product.brand} ${product.model} Review & Buying Guide | FindMyBestSwing`,
        description: product.summary,
        canonicalPath: path,
        type: 'article',
      };
    }
  }

  if (path.startsWith('/guides/')) {
    const guide = getGuideBySlug(path.replace('/guides/', ''));
    if (guide) {
      return {
        title: `${guide.title} | FindMyBestSwing`,
        description: guide.excerpt,
        canonicalPath: path,
        type: 'article',
      };
    }
  }

  if (path.startsWith('/blueprints/')) {
    const blueprint = getBlueprintBySlug(path.replace('/blueprints/', ''));
    if (blueprint) {
      return {
        title: `${blueprint.title} | FindMyBestSwing`,
        description: blueprint.overview,
        canonicalPath: path,
      };
    }
  }

  const staticMeta: Record<string, RouteMeta> = {
    '/': {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      canonicalPath: '/',
    },
    '/catalog': {
      title: 'Golf Club & Ball Reviews | FindMyBestSwing',
      description: 'Compare golf clubs, complete sets, wedges, putters, and golf balls by golfer fit, trade-offs, and price tier.',
      canonicalPath: '/catalog',
    },
    '/blueprints': {
      title: 'Custom Golf Bag Blueprints | FindMyBestSwing',
      description: 'Compare complete golf bag setups built around swing speed, height, handicap, and forgiveness needs.',
      canonicalPath: '/blueprints',
    },
    '/guides': {
      title: 'Golf Equipment Buying Guides | FindMyBestSwing',
      description: 'Decision-first golf equipment guides with clear trade-offs, fitting checks, and situation-based recommendations.',
      canonicalPath: '/guides',
    },
    '/contact': {
      title: 'Contact FindMyBestSwing',
      description: 'Ask a golf equipment fitting or buying question.',
      canonicalPath: '/contact',
    },
    '/legal/disclosure': {
      title: 'Affiliate Disclosure | FindMyBestSwing',
      description: 'FindMyBestSwing affiliate disclosure and editorial commerce policy.',
      canonicalPath: '/legal/disclosure',
    },
    '/legal/privacy': {
      title: 'Privacy Policy | FindMyBestSwing',
      description: 'FindMyBestSwing privacy policy.',
      canonicalPath: '/legal/privacy',
    },
    '/legal/terms': {
      title: 'Terms of Service | FindMyBestSwing',
      description: 'FindMyBestSwing terms of service.',
      canonicalPath: '/legal/terms',
    },
    '/wizard': {
      title: 'Golf Club Finder | FindMyBestSwing',
      description: 'Answer five questions to match golf equipment to your swing and fit.',
      canonicalPath: '/wizard',
      noIndex: true,
    },
    '/results': {
      title: 'Your Golf Gear Match | FindMyBestSwing',
      description: 'Your personalized golf club and ball recommendations.',
      canonicalPath: '/results',
      noIndex: true,
    },
  };

  return staticMeta[path] || {
    title: 'Page Not Found | FindMyBestSwing',
    description: 'The requested page could not be found.',
    canonicalPath: path,
    noIndex: true,
  };
}

function setNamedMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
}

function setPropertyMeta(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(readBrowserRoute);

  const [quizState, setQuizState] = useState<QuizState>(() => {
    const saved = localStorage.getItem('golf_quiz_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Use the default quiz state below.
      }
    }
    return {
      swingSpeed: '85-95',
      handicap: 'high-20-plus',
      height: 'standard',
      missTendency: 'slice',
      greenPriority: 'distance-roll',
      experienceYears: 2,
    };
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(readBrowserRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = getRouteMeta(currentRoute);
    const canonicalUrl = new URL(meta.canonicalPath, SITE_URL).toString();

    document.title = meta.title;
    setNamedMeta('description', meta.description);
    setNamedMeta('robots', meta.noIndex ? 'noindex, nofollow' : 'index, follow');
    setNamedMeta('twitter:card', 'summary');
    setNamedMeta('twitter:title', meta.title);
    setNamedMeta('twitter:description', meta.description);
    setPropertyMeta('og:type', meta.type || 'website');
    setPropertyMeta('og:site_name', 'FindMyBestSwing');
    setPropertyMeta('og:title', meta.title);
    setPropertyMeta('og:description', meta.description);
    setPropertyMeta('og:url', canonicalUrl);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [currentRoute]);

  const navigateTo = (route: string) => {
    const normalized = normalizeRoute(route);
    if (`${window.location.pathname}${window.location.search}` !== normalized) {
      window.history.pushState({}, '', normalized);
    }
    setCurrentRoute(normalized);
    window.scrollTo(0, 0);
  };

  const handleQuizComplete = (quiz: QuizState) => {
    setQuizState(quiz);
    localStorage.setItem('golf_quiz_state', JSON.stringify(quiz));
    navigateTo('/results');
  };

  const renderCurrentView = () => {
    const url = new URL(currentRoute, SITE_URL);
    const route = url.pathname;

    if (route === '/') {
      return <HomePage onNavigate={navigateTo} />;
    }

    if (route === '/wizard') {
      return <SelectorWizard onComplete={handleQuizComplete} />;
    }

    if (route === '/results') {
      return (
        <ResultsView
          quiz={quizState}
          onRestart={() => navigateTo('/wizard')}
          onNavigate={navigateTo}
        />
      );
    }

    if (route.startsWith('/products/')) {
      const product = getProductBySlug(route.replace('/products/', ''));
      if (product) {
        return (
          <ProductReviewPage
            product={product}
            onBack={() => navigateTo('/catalog')}
            onNavigate={navigateTo}
          />
        );
      }
    }

    if (route === '/catalog') {
      const cat = url.searchParams.get('cat') || 'all';
      return <CatalogView key={cat} initialCategory={cat} onNavigate={navigateTo} />;
    }

    if (route.startsWith('/blueprints/')) {
      const slug = route.replace('/blueprints/', '');
      return <BlueprintView key={slug} initialSlug={slug} onNavigate={navigateTo} />;
    }

    if (route === '/blueprints') {
      return <BlueprintView onNavigate={navigateTo} />;
    }

    if (route.startsWith('/guides/')) {
      const guide = getGuideBySlug(route.replace('/guides/', ''));
      if (guide) {
        return (
          <GuideDetail
            guide={guide}
            onBack={() => navigateTo('/guides')}
            onNavigate={navigateTo}
          />
        );
      }
    }

    if (route === '/guides') {
      return <GuidesHub onNavigate={navigateTo} />;
    }

    if (route === '/contact') {
      return <ContactDesk />;
    }

    if (route === '/legal/disclosure') {
      return <LegalDocs documentType="disclosure" onBack={() => navigateTo('/')} />;
    }
    if (route === '/legal/privacy') {
      return <LegalDocs documentType="privacy" onBack={() => navigateTo('/')} />;
    }
    if (route === '/legal/terms') {
      return <LegalDocs documentType="terms" onBack={() => navigateTo('/')} />;
    }

    return (
      <section className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
        <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">404</p>
        <h1 className="text-3xl font-extrabold text-white">Page not found</h1>
        <p className="text-slate-300">The page may have moved or the address may be incorrect.</p>
        <a href="/" className="inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white">Return home</a>
      </section>
    );
  };

  return (
    <div className="min-h-screen w-full max-w-full min-w-0 overflow-x-clip flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-emerald-600 selection:text-white">
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />
      <main className="flex-1 min-w-0 w-full">
        {renderCurrentView()}
      </main>
      <Footer onNavigate={navigateTo} />
      <CookieConsentBanner />
    </div>
  );
}

export default App;
