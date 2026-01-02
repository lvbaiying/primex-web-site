
import { FileText, ShieldCheck, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const TransparencySection = () => {
  const { t } = useTranslation();
  return (
  <div className="py-32 bg-zinc-50 border-t border-zinc-200">
    <div className="container mx-auto px-6 md:px-12">
      <SectionHeading title={t('transparency_home.title')} subtitle={t('transparency_home.subtitle')} align="center" />
      
      <div className="grid md:grid-cols-3 gap-12 mt-20">
        {[
          { icon: <FileText size={32} strokeWidth={1}/>, title: t('transparency_home.t1_title'), desc: t('transparency_home.t1_desc') },
          { icon: <ShieldCheck size={32} strokeWidth={1}/>, title: t('transparency_home.t2_title'), desc: t('transparency_home.t2_desc') },
          { icon: <Users size={32} strokeWidth={1}/>, title: t('transparency_home.t3_title'), desc: t('transparency_home.t3_desc') }
        ].map((item, i) => (
          <FadeIn key={i} delay={i*100}>
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-24 h-24 bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light mb-6">{item.desc}</p>
              <div className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                View Details
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);
};

export default TransparencySection;
