
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

const BottomCTA = ({ t }) => (
  <div className="py-32 bg-black text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
    <div className="container mx-auto px-6 relative z-10">
      <FadeIn>
        <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tighter">{t.cta_bottom.title}</h2>
        <p className="text-zinc-400 text-xl font-light mb-12 max-w-2xl mx-auto">
          {t.cta_bottom.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <Button variant="secondary" onClick={() => {}}>
             {t.cta_bottom.btn1} <ArrowRight size={16}/>
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black" onClick={() => {}}>
             {t.cta_bottom.btn2}
          </Button>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default BottomCTA;
