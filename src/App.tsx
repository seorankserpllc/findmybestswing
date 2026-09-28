import React, { useState, useEffect } from 'react';
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

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || '#/');
  
  // Stored quiz state
  const [quizState, setQuizState] = useState<QuizState>(() => {
    const saved = localStorage.getItem('golf_quiz_state');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // default
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

  // Listen to hashchange events
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentRoute(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: string) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const handleQuizComplete = (quiz: QuizState) => {
    setQuizState(quiz);
    localStorage.setItem('golf_quiz_state', JSON.stringify(quiz));
    navigateTo('#/results');
  };

  // Route Router Logic
  const renderCurrentView = () => {
    const route = currentRoute;

    // 1. Home
    if (route === '#/' || route === '') {
      return <HomePage onNavigate={navigateTo} />;
    }

    // 2. Wizard
    if (route === '#/wizard') {
      return <SelectorWizard onComplete={handleQuizComplete} />;
    }

    // 3. Results
    if (route.startsWith('#/results')) {
      return (
        <ResultsView
          quiz={quizState}
          onRestart={() => navigateTo('#/wizard')}
          onNavigate={navigateTo}
        />
      );
    }

    // 4. Product Review
    if (route.startsWith('#/product/')) {
      const slug = route.replace('#/product/', '').split('?')[0];
      const product = getProductBySlug(slug);
      if (product) {
        return (
          <ProductReviewPage
            product={product}
            onBack={() => navigateTo('#/catalog')}
            onNavigate={navigateTo}
          />
        );
      }
      return <CatalogView onNavigate={navigateTo} />;
    }

    // 5. Catalog
    if (route.startsWith('#/catalog')) {
      const params = new URLSearchParams(route.split('?')[1] || '');
      const cat = params.get('cat') || 'all';
      return <CatalogView key={cat} initialCategory={cat} onNavigate={navigateTo} />;
    }

    // 6. Blueprints Studio
    if (route.startsWith('#/blueprint/')) {
      const slug = route.replace('#/blueprint/', '').split('?')[0];
      return <BlueprintView key={slug} initialSlug={slug} onNavigate={navigateTo} />;
    }
    if (route === '#/blueprints') {
      return <BlueprintView onNavigate={navigateTo} />;
    }

    // 7. Editorial Guides Hub & Detail
    if (route.startsWith('#/guide/')) {
      const slug = route.replace('#/guide/', '').split('?')[0];
      const guide = getGuideBySlug(slug);
      if (guide) {
        return (
          <GuideDetail
            guide={guide}
            onBack={() => navigateTo('#/guides')}
            onNavigate={navigateTo}
          />
        );
      }
      return <GuidesHub onNavigate={navigateTo} />;
    }
    if (route === '#/guides') {
      return <GuidesHub onNavigate={navigateTo} />;
    }

    // 8. Contact Desk
    if (route === '#/contact') {
      return <ContactDesk />;
    }

    // 9. Legal Docs
    if (route === '#/legal/disclosure') {
      return <LegalDocs documentType="disclosure" onBack={() => navigateTo('#/')} />;
    }
    if (route === '#/legal/privacy') {
      return <LegalDocs documentType="privacy" onBack={() => navigateTo('#/')} />;
    }
    if (route === '#/legal/terms') {
      return <LegalDocs documentType="terms" onBack={() => navigateTo('#/')} />;
    }

    // Default Fallback to Home
    return <HomePage onNavigate={navigateTo} />;
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
