
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AssetTicker from '../shared/AssetTicker';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';
import { GridBackground, WorldMapBackground } from '../visual/Backgrounds';

const Hero = ({ onNavigate }) => {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen flex flex-col pt-32 pb-20 bg-white overflow-hidden">
      <GridBackground />
      <WorldMapBackground />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn delay={100}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 border-b border-black mb-8 pb-3">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-black">{t('hero.tag')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black mb-10 leading-[1.05] whitespace-pre-line">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-zinc-500 font-light max-w-lg mb-12 leading-relaxed">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => onNavigate('products')}>
                {t('hero.cta_primary')} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" onClick={() => onNavigate('about')}>
                {t('hero.cta_secondary')}
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300} className="hidden lg:block">
           <AssetTicker />
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
