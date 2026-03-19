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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLoadingComplete = () => setAppState('gateway');
  const handleGatewayAccept = () => setAppState('ready');
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    if (appState !== 'ready') {
      document.body.style.overflow = 'hidden';
    } else if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [appState, mobileOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about#how-it-works', label: 'How It Works' },
    { to: '/about', label: 'About Us' },
    { to: '/about#team', label: 'Team' },
    { to: '/insights', label: 'Insights' },
    { to: '/contact', label: 'Contact Us' },
  ];

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

        {/* ── Header ── */}
        <header className="pl-[50px] pr-6 py-[14px] fixed top-0 w-full flex justify-between items-center z-50 bg-white/95 backdrop-blur-md border-b border-merkle-purple/10">
          <Link to="/" onClick={closeMobile}>
            <img src="images/assets/logo_purple.svg" alt="Merkle Value" className="h-8 md:h-10" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-merkle-purple transition-colors whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-merkle-purple transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-merkle-purple transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-merkle-purple transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </header>

        {/* ── Mobile nav drawer ── */}
        <div
          className={`md:hidden fixed inset-0 z-40 bg-white flex flex-col pt-[72px] transition-all duration-300 ease-in-out ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <nav className="flex flex-col divide-y divide-slate-100 px-6 pt-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobile}
                className="py-5 font-sans font-semibold text-xl text-slate-800 hover:text-merkle-purple transition-colors flex items-center justify-between"
                style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms' }}
              >
                {link.label}
                <span className="text-merkle-purple/30 text-lg">→</span>
              </Link>
            ))}
          </nav>

          {/* Bottom brand mark */}
          <div className="mt-auto px-6 pb-10 pt-6 border-t border-slate-100">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-slate-400">
              Merkle Value · Institutional Bitcoin Fund
            </p>
          </div>
        </div>

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
