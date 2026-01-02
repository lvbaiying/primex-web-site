
import { Layout, RefreshCw, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const TechArch = () => {
  const { t } = useTranslation();
  return (
  <div className="py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">
      <FadeIn>
        <div className="relative p-12 border border-zinc-100 bg-zinc-50 rounded-full aspect-square flex items-center justify-center max-w-md mx-auto">
            <div className="absolute inset-0 border border-dashed border-zinc-200 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>
            <div className="absolute inset-24 border border-zinc-300 rounded-full"></div>
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center text-white font-bold tracking-widest z-10 shadow-2xl">
              PrimeX
            </div>
            {[0, 72, 144, 216, 288].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const x = 50 + 40 * Math.cos(rad);
              const y = 50 + 40 * Math.sin(rad);
              return (
                <div key={i} className="absolute w-16 h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm"
                    style={{ top: `${y}%`, left: `${x}%`, transform: 'translate(-50%, -50%)' }}>
                  {['ETH', 'POLY', 'BNB', 'ARB', 'OP'][i]}
                </div>
              )
            })}
        </div>
      </FadeIn>

      <div>
        <SectionHeading title={t('tech.title')} subtitle={t('tech.subtitle')} />
        <div className="space-y-12">
          {[
            { title: t('tech.f1_title'), desc: t('tech.f1_desc'), icon: <RefreshCw size={24} strokeWidth={1} /> },
            { title: t('tech.f2_title'), desc: t('tech.f2_desc'), icon: <Zap size={24} strokeWidth={1} /> },
            { title: t('tech.f3_title'), desc: t('tech.f3_desc'), icon: <Layout size={24} strokeWidth={1} /> }
          ].map((item, i) => (
            <FadeIn key={i} delay={i*150}>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 border border-zinc-200 flex items-center justify-center rounded-full shrink-0 text-zinc-400 group-hover:text-black group-hover:border-black transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                  <p className="text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default TechArch;
