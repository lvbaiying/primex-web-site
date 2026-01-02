
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const ComplianceSection = () => {
  const { t } = useTranslation();
  return (
  <div className="py-32 bg-zinc-50 border-y border-zinc-200">
    <div className="container mx-auto px-6 md:px-12">
      <SectionHeading 
        title={t('compliance.title')} 
        subtitle={t('compliance.subtitle')}
        align="center"
      />

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {[
          { name: t('compliance.p1_name'), type: t('compliance.p1_type'), features: [t('compliance.p1_f1'), t('compliance.p1_f2'), t('compliance.p1_f3')] },
          { name: t('compliance.p2_name'), type: t('compliance.p2_type'), features: [t('compliance.p2_f1'), t('compliance.p2_f2'), t('compliance.p2_f3')] },
          { name: t('compliance.p3_name'), type: t('compliance.p3_type'), features: [t('compliance.p3_f1'), t('compliance.p3_f2'), t('compliance.p3_f3')] },
        ].map((p, i) => (
          <FadeIn key={i} delay={i * 150}>
            <div className="bg-white p-12 border border-zinc-200 text-center hover:shadow-2xl hover:border-black transition-all duration-500 group relative top-0 hover:-top-2">
              <h3 className="text-4xl font-bold font-serif mb-4 text-black group-hover:tracking-widest transition-all duration-500">{p.name}</h3>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-10 bg-zinc-50 inline-block px-3 py-1">{p.type}</div>
              <ul className="space-y-4 text-left border-t border-zinc-100 pt-8 mx-auto max-w-[200px]">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-zinc-600">
                    <Check size={14} className="text-black shrink-0"/> {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);
};

export default ComplianceSection;
