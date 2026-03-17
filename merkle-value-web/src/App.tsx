import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { InvestorGateway } from './components/InvestorGateway';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export function AppContent() {
  const [appState, setAppState] = useState<'loading' | 'gateway' | 'ready'>('loading');

  const handleLoadingComplete = () => {
    setAppState('gateway');
  };

  const handleGatewayAccept = () => {
    setAppState('ready');
  };

  useEffect(() => {
    if (appState !== 'ready') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [appState]);

  return (
    <div className="flex flex-col min-h-screen bg-off-white font-sans text-slate-800 selection:bg-merkle-purple/20 scroll-smooth">
      <ScrollToTop />

      {appState === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {appState === 'gateway' && (
        <InvestorGateway onAccept={handleGatewayAccept} />
      )}

      <div className={`flex flex-col flex-1 transition-opacity duration-1000 ${appState === 'ready' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <header className="px-6 py-4 fixed top-0 w-full flex justify-between items-center z-40 bg-white/90 backdrop-blur-md border-b border-merkle-purple/10">
          <Link to="/">
            <img src="images/assets/logo_purple.svg" alt="Merkle Value" className="h-6 md:h-8" />
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-merkle-purple transition-colors">Home</Link>
            <Link to="/about#how-it-works" className="hover:text-merkle-purple transition-colors whitespace-nowrap">How It Works</Link>
            <Link to="/about" className="hover:text-merkle-purple transition-colors whitespace-nowrap">About Us</Link>
            <Link to="/about#team" className="hover:text-merkle-purple transition-colors whitespace-nowrap">Team</Link>
            <Link to="/insights" className="hover:text-merkle-purple transition-colors">Insights</Link>
            <Link to="/contact" className="hover:text-merkle-purple transition-colors whitespace-nowrap">Contact Us</Link>
          </nav>
        </header>

        <main className="flex-1 mt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
