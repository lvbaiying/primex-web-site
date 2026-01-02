import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import PlatformPage from './pages/PlatformPage';
import ProductsPage from './pages/ProductsPage';
import TechPage from './pages/TechPage';
import TransparencyPage from './pages/TransparencyPage';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className='min-h-screen font-sans text-black bg-white selection:bg-black selection:text-white flex flex-col'>
      <Navbar
        activeTab={activeTab}
        handleNav={handleNav}
        lang={i18n.language}
        toggleLang={toggleLang}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
      />

      <main className='flex-grow'>
        {activeTab === 'home' && <HomePage onNavigate={handleNav} />}
        {activeTab === 'platform' && <PlatformPage />}
        {activeTab === 'products' && <ProductsPage />}
        {activeTab === 'transparency' && <TransparencyPage />}
        {activeTab === 'news' && <NewsPage />}
        {activeTab === 'tech' && <TechPage />}
        {activeTab === 'about' && <AboutPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
