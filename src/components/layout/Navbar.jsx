import { Globe, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = ({ activeTab, handleNav, lang, toggleLang, isMenuOpen, setIsMenuOpen, scrolled, t }) => {
  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'platform', label: t.nav.platform },
    { id: 'assets', label: t.nav.assets },
    { id: 'tech', label: t.nav.tech },
    { id: 'about', label: t.nav.about },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-zinc-100' : 'bg-white py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter cursor-pointer z-50" onClick={() => handleNav('home')}>
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-sm shadow-xl">P</div>
            <span className="hidden md:block">PrimeX</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-xs uppercase tracking-[0.15em] font-bold relative group ${activeTab === item.id ? 'text-black' : 'text-zinc-400 hover:text-black'} transition-colors`}
              >
                {item.label}
                {activeTab === item.id && <span className="absolute -bottom-2 left-0 w-full h-px bg-black"></span>}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-8">
            <button onClick={toggleLang} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors">
              <Globe size={14} /> {lang === 'en' ? 'EN' : '繁'}
            </button>
            <Button variant="primary" className="px-6 py-2.5 text-xs" onClick={() => handleNav('assets')}>
              {t.nav.launch}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden z-50 flex items-center gap-4">
            <span onClick={toggleLang} className="text-xs font-bold uppercase">{lang === 'en' ? 'EN' : '繁'}</span>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-3xl font-light tracking-tight"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
