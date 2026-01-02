
import { Globe, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const Navbar = ({ activeTab, handleNav, lang, toggleLang, isMenuOpen, setIsMenuOpen, scrolled }) => {
  const { t } = useTranslation();
  
  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'products', label: t('nav.products') },
    { id: 'transparency', label: t('nav.transparency') },
    { id: 'about', label: t('nav.about') },
    { id: 'news', label: t('nav.news') }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-zinc-100 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => handleNav('home')}>
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-sm">P</div>
          <span>PrimeX</span>
        </div>
        <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
          {navItems.map(item => (
            <button key={item.id} onClick={() => handleNav(item.id)} className={`hover:text-zinc-500 transition-colors ${activeTab === item.id ? 'text-black border-b border-black' : 'text-zinc-400'}`}>{item.label}</button>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-black transition-colors"><Globe size={16}/> {lang === 'en' ? 'EN' : '繁'}</button>
          <Button variant="primary" className="px-6 py-3 text-xs" onClick={() => handleNav('products')}>{t('nav.launch')}</Button>
        </div>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-8 flex flex-col gap-6 shadow-xl h-screen">
          {navItems.map(item => (<button key={item.id} onClick={() => handleNav(item.id)} className="text-2xl font-light text-left hover:pl-4 transition-all">{item.label}</button>))}
          <Button variant="primary" className="w-full mt-4 justify-center">{t('nav.launch')}</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
