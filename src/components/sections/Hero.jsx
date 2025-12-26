import { ArrowRight } from 'lucide-react';
import AbstractInterface from '../ui/AbstractInterface';
import { GridBackground, WorldMapBackground } from '../ui/Backgrounds';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

const Hero = ({ onNavigate, t }) => {
  return (
    <div className="relative min-h-screen bg-white flex items-center pt-32 pb-20 overflow-hidden">
      <GridBackground />
      <WorldMapBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn delay={100}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 border-b border-black mb-8 pb-3">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase">{t.hero.tag}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-black mb-10 leading-[1.05] whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-xl text-zinc-500 font-light max-w-lg mb-12 leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => onNavigate('platform')}>
                {t.hero.cta_primary} <ArrowRight size={16} />
              </Button>
              <Button variant="outline" onClick={() => onNavigate('contact')}>
                {t.hero.cta_secondary}
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300} className="hidden lg:block relative z-20">
          <AbstractInterface t={t} />
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
