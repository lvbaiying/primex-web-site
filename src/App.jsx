import { useEffect, useState } from 'react';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { translations } from './data/translations';
import AboutPage from './pages/AboutPage';
import AssetsPage from './pages/AssetsPage';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import TechPage from './pages/TechPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [lang, setLang] = useState('zh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen font-sans text-black bg-white selection:bg-black selection:text-white flex flex-col">
      <Navbar
        activeTab={activeTab}
        handleNav={handleNav}
        lang={lang}
        toggleLang={toggleLang}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        t={t}
      />

      <main className="flex-grow">
        {activeTab === 'home' && <HomePage onNavigate={handleNav} t={t} />}
        {activeTab === 'platform' && <PlatformPage t={t} />}
        {activeTab === 'assets' && <AssetsPage t={t} />}
        {activeTab === 'tech' && <TechPage t={t} />}
        {activeTab === 'about' && <AboutPage t={t} />}
      </main>

      <Footer t={t} />
    </div>
  );
};

export default App;