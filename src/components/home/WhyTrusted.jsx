
import { Fingerprint, Scale, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const WhyTrusted = () => {
  const { t } = useTranslation();
  return (
  <div className="py-32 bg-white container mx-auto px-6 md:px-12">
    <SectionHeading title={t('trusted.title')} subtitle={t('trusted.subtitle')} align="center" />
    
    <div className="grid md:grid-cols-3 gap-12 mt-16">
      {[
        { 
          title: t('trusted.t1_title'), 
          icon: <Scale size={40} />, 
          desc: t('trusted.t1_desc'),
        },
        { 
          title: t('trusted.t2_title'), 
          icon: <ShieldCheck size={40} />, 
          desc: t('trusted.t2_desc'),
        },
        { 
          title: t('trusted.t3_title'), 
          icon: <Fingerprint size={40} />, 
          desc: t('trusted.t3_desc'),
        }
      ].map((item, i) => (
        <FadeIn key={i} delay={i * 150}>
          <div className="text-center h-full group p-6 rounded-lg hover:bg-zinc-50 transition-colors">
            <div className={`w-20 h-20 mx-auto bg-zinc-100 rounded-full flex items-center justify-center mb-8 border border-zinc-200 group-hover:border-black transition-all duration-500`}>
              <div className="text-black">{item.icon}</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-zinc-900">{item.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm px-2">
              {item.desc}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);
};

export default WhyTrusted;
