import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const PlatformValueProp = ({ t }) => {
   const [activeTab, setActiveTab] = useState('issuer');

   const content = {
      issuer: {
         title: t.cta_roles.issuer_title,
         subtitle: t.platform.value_prop.issuer_subtitle,
         desc: t.cta_roles.issuer_desc,
         benefits: t.platform.value_prop.issuer_benefits
      },
      investor: {
         title: t.cta_roles.investor_title,
         subtitle: t.platform.value_prop.investor_subtitle,
         desc: t.cta_roles.investor_desc,
         benefits: t.platform.value_prop.investor_benefits
      },
      partner: {
         title: t.cta_roles.partner_title,
         subtitle: t.platform.value_prop.partner_subtitle,
         desc: t.cta_roles.partner_desc,
         benefits: t.platform.value_prop.partner_benefits
      }
   };

   return (
      <div className="py-32 bg-black text-white relative">
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333), linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <SectionHeading title={t.platform.value_prop.title} subtitle={t.platform.value_prop.subtitle} dark />

            <div className="grid lg:grid-cols-12 border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
               {/* Sidebar */}
               <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-800">
                  {Object.keys(content).map((key) => (
                     <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`w-full text-left p-8 text-lg font-light flex justify-between items-center transition-all duration-500
                           ${activeTab === key ? 'bg-white text-black' : 'text-zinc-500 hover:text-white hover:bg-zinc-800'}
                        `}
                     >
                        <span>{key === 'issuer' ? t.platform.value_prop.roles.issuer : key === 'investor' ? t.platform.value_prop.roles.investor : t.platform.value_prop.roles.partner}</span>
                        <ArrowRight size={20} className={`transition-transform duration-300 ${activeTab === key ? 'translate-x-2' : ''}`} />
                     </button>
                  ))}
               </div>

               {/* Content */}
               <div className="lg:col-span-8 p-12 lg:p-16 flex flex-col justify-center min-h-[500px]">
                  <FadeIn key={activeTab}>
                     <div className="mb-8 inline-block px-3 py-1 border border-zinc-700 text-xs font-bold uppercase tracking-widest text-zinc-400 rounded-full">
                        {activeTab === 'issuer' ? t.platform.value_prop.roles.issuer : activeTab === 'investor' ? t.platform.value_prop.roles.investor : t.platform.value_prop.roles.partner} {t.platform.value_prop.solutions_label}
                     </div>
                     <h3 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">{content[activeTab].title}</h3>
                     <p className="text-xl text-zinc-400 mb-10 font-light max-w-xl">{content[activeTab].subtitle}</p>

                     <div className="grid md:grid-cols-2 gap-6">
                        {content[activeTab].benefits.map((benefit, i) => (
                           <div key={i} className="flex items-start gap-4 p-6 bg-zinc-950/50 border border-zinc-800 hover:border-zinc-600 transition-colors group">
                              <div className="mt-1 text-zinc-500 group-hover:text-white transition-colors"><Check size={16} /></div>
                              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{benefit}</span>
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
