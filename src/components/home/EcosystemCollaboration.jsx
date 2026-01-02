
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const EcosystemCollaboration = () => {
  const { t } = useTranslation();
  const partners = [
    { cat: t('ecosystem.custody'), desc: t('ecosystem.custody_desc'), logos: ["Fireblocks", "Anchorage", "BitGo"] },
    { cat: t('ecosystem.fund_admin'), desc: t('ecosystem.fund_admin_desc'), logos: ["Apex", "Trident", "Gen II"] },
    { cat: t('ecosystem.identity'), desc: t('ecosystem.identity_desc'), logos: ["Sumsub", "Onfido", "Fractal"] },
    { cat: t('ecosystem.data'), desc: t('ecosystem.data_desc'), logos: ["Chainlink", "Pyth", "DIA"] },
    { cat: t('ecosystem.liquidity'), desc: t('ecosystem.liquidity_desc'), logos: ["Wintermute", "GSR", "Keyrock"] }
  ];

  return (
    <div className="py-32 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title={t('ecosystem.title')} subtitle={t('ecosystem.subtitle')} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {partners.map((p, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-white p-6 border border-zinc-200 rounded-lg hover:border-black hover:shadow-lg transition-all h-full flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">{p.cat}</span>
                  <div className="h-px w-8 bg-black mb-4"></div>
                  <p className="text-xs text-zinc-500 mb-6 h-8">{p.desc}</p>
                </div>
                <div className="mt-auto space-y-3 border-t border-zinc-100 pt-4">
                  {p.logos.map((logo, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-serif font-bold text-zinc-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div> {logo}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemCollaboration;
