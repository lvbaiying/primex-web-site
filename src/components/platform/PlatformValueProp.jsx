
import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const PlatformValueProp = () => {
   const [activeTab, setActiveTab] = useState('issuer');
   const { t } = useTranslation();

   const content = {
      issuer: {
         title: t('cta_roles.issuer_title'),
         subtitle: "One-stop shop for asset digitization",
         desc: t('cta_roles.issuer_desc'),
         benefits: ["Reg D/S Automation", "Global Reach", "Controlled Liquidity"]
      },
      investor: {
         title: t('cta_roles.investor_title'),
         subtitle: "Secure allocation to private markets",
         desc: t('cta_roles.investor_desc'),
         benefits: ["Unified KYC Passport", "Stablecoin Settlement", "Real-time NAV"]
      },
      partner: {
         title: t('cta_roles.partner_title'),
         subtitle: "Build on the RWA ecosystem",
         desc: t('cta_roles.partner_desc'),
         benefits: ["Standardized SDK", "Revenue Sharing", "White-label Flows"]
      }
   };

   return (
      <div className="py-32 bg-black text-white relative">
         <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%">
               <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
         </div>
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <SectionHeading title="Tailored Value Propositions" subtitle="Solutions for every stakeholder." dark />
            <div className="flex flex-col lg:flex-row gap-0 border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50 backdrop-blur-md">
               <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-zinc-800 bg-zinc-900/80">
                  {Object.keys(content).map((key) => (
                     <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`w-full text-left p-8 text-lg font-light flex justify-between items-center transition-all duration-300
                           ${activeTab === key ? 'bg-zinc-800 text-white border-l-4 border-white' : 'text-zinc-500 hover:text-white hover:bg-zinc-800/50 border-l-4 border-transparent'}
                        `}
                     >
                        <span>{key === 'issuer' ? 'Asset Issuers' : key === 'investor' ? 'Investors' : 'Partners'}</span>
                        {activeTab === key && <ArrowRight size={20}/>}
                     </button>
                  ))}
               </div>
               <div className="lg:w-2/3 p-12 flex flex-col justify-center min-h-[400px]">
                  <FadeIn key={activeTab}>
                     <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 border border-zinc-700 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-400">
                        {activeTab} Solutions
                     </div>
                     <h3 className="text-3xl md:text-4xl font-light mb-4">{content[activeTab].title}</h3>
                     <p className="text-xl text-zinc-400 mb-8 font-light">{content[activeTab].subtitle}</p>
                     <p className="text-zinc-500 leading-relaxed mb-8 max-w-2xl">{content[activeTab].desc}</p>
                     <div className="grid md:grid-cols-2 gap-4">
                        {content[activeTab].benefits.map((benefit, i) => (
                           <div key={i} className="flex items-center gap-3 p-4 bg-zinc-950 rounded border border-zinc-800">
                              <Check size={18} className="text-white"/>
                              <span className="text-sm text-zinc-300">{benefit}</span>
                           </div>
                        ))}
                     </div>
                  </FadeIn>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PlatformValueProp;
