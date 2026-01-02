
import { Briefcase, Check, Layout, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PlatformProblems from '../components/platform/PlatformProblems';
import PlatformValueProp from '../components/platform/PlatformValueProp';
import FadeIn from '../components/ui/FadeIn';
import SectionHeading from '../components/ui/SectionHeading';
import AbstractInterface from '../components/visual/AbstractInterface';

const PlatformPage = () => {
  const { t } = useTranslation();
  return (
  <div className="pt-32 pb-20 bg-white">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16 mb-24">
         <FadeIn>
            <h1 className="text-6xl font-light tracking-tighter mb-8 whitespace-pre-line">{t('platform.hero_title')}</h1>
            <p className="text-xl text-zinc-500 leading-relaxed mb-8">{t('platform.hero_desc')}</p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3"><Check className="text-black"/> <span>SPV & Fund Structures</span></li>
               <li className="flex items-center gap-3"><Check className="text-black"/> <span>Multi-chain Deployment</span></li>
               <li className="flex items-center gap-3"><Check className="text-black"/> <span>Bank Custody Integration</span></li>
            </ul>
         </FadeIn>
         <FadeIn delay={200}><AbstractInterface /></FadeIn>
      </div>
    </div>
    <PlatformProblems />
    <div className="container mx-auto px-6 md:px-12 py-24">
      <SectionHeading title={t('platform.modules_title')} subtitle={t('platform.modules_subtitle')} />
      <div className="grid md:grid-cols-3 gap-8">
         {[
           { title: "Launchpad", sub: "Primary Issuance", desc: "Configurable portal for whitelist, subscription docs, and stablecoin deposits.", icon: <Layout size={32}/> },
           { title: "Marketplace", sub: "Secondary Trading", desc: "Bulletin board for OTC RFQ and atomic settlement.", icon: <RefreshCw size={32}/> },
           { title: "Dashboard", sub: "Asset Management", desc: "Unified view for NAV updates, dividends, and audit reports.", icon: <Briefcase size={32}/> }
         ].map((m, i) => (
           <FadeIn key={i} delay={i*150}>
              <div className="h-full bg-zinc-50 p-8 border border-zinc-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                 <div className="mb-6 p-4 bg-white border border-zinc-100 rounded-lg w-fit">{m.icon}</div>
                 <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">{m.sub}</div>
                 <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                 <p className="text-zinc-600 leading-relaxed">{m.desc}</p>
              </div>
           </FadeIn>
         ))}
      </div>
    </div>
    <PlatformValueProp />
  </div>
);
};

export default PlatformPage;
