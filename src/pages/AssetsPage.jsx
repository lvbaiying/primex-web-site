import { Building2, CircleDollarSign, TrendingUp } from 'lucide-react';
import React from 'react';
import AssetPipelineTable from '../components/sections/AssetPipelineTable';
import ModernWorkflow from '../components/sections/ModernWorkflow';
import FadeIn from '../components/ui/FadeIn';
import SectionHeading from '../components/ui/SectionHeading';

const AssetsPage = ({ t }) => {
   const categories = [
      { title: t.assets.categories.private_credit.title, yield: t.assets.categories.private_credit.yield, risk: t.assets.categories.private_credit.risk, icon: <CircleDollarSign size={64} strokeWidth={0.75} /> },
      { title: t.assets.categories.real_estate.title, yield: t.assets.categories.real_estate.yield, risk: t.assets.categories.real_estate.risk, icon: <Building2 size={64} strokeWidth={0.75} /> },
      { title: t.assets.categories.pre_ipo.title, yield: t.assets.categories.pre_ipo.yield, risk: t.assets.categories.pre_ipo.risk, icon: <TrendingUp size={64} strokeWidth={0.75} /> }
   ];

   return (
      <div className="pt-32 bg-white min-h-screen">
         <div className="container mx-auto px-6 md:px-12">
            <SectionHeading title={t.assets.title} subtitle={t.assets.subtitle} />

            <div className="grid md:grid-cols-3 gap-8 mb-24">
               {categories.map((cat, i) => (
                  <FadeIn key={i} delay={i * 100}>
                     <div className="bg-white p-10 border border-zinc-200 hover:border-black hover:shadow-2xl transition-all duration-500 group h-full flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12">
                           {cat.icon}
                        </div>
                        <div>
                           <div className="mb-8 text-black opacity-80 group-hover:opacity-100 transition-opacity">
                              {React.cloneElement(cat.icon, { size: 40, strokeWidth: 1 })}
                           </div>
                           <h3 className="text-2xl font-light mb-8">{cat.title}</h3>
                           <div className="flex gap-12 border-t border-zinc-100 pt-8">
                              <div>
                                 <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{t.assets.labels.target_yield}</div>
                                 <div className="text-lg font-mono">{cat.yield}</div>
                              </div>
                              <div>
                                 <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">{t.assets.labels.risk}</div>
                                 <div className="text-lg font-mono">{cat.risk}</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>

         {/* Listing Criteria */}
         <div className="py-32 bg-zinc-50 border-y border-zinc-200">
            <div className="container mx-auto px-6 md:px-12">
               <div className="grid lg:grid-cols-2 gap-20">
                  <div>
                     <SectionHeading title={t.assets.criteria_title} subtitle={t.assets.criteria.subtitle} />
                     <p className="text-zinc-500 leading-relaxed mb-8">
                        {t.assets.criteria.description}
                     </p>
                  </div>
                  <div className="grid gap-6">
                     {[
                        { label: t.assets.criteria.hard_criteria.label, items: t.assets.criteria.hard_criteria.items },
                        { label: t.assets.criteria.optional.label, items: t.assets.criteria.optional.items }
                     ].map((grp, i) => (
                        <div key={i} className="bg-white p-8 border border-zinc-200">
                           <h4 className="text-sm font-bold uppercase tracking-widest mb-6">{grp.label}</h4>
                           <ul className="space-y-4">
                              {grp.items.map((item, idx) => (
                                 <li key={idx} className="flex items-center gap-4 text-zinc-600">
                                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-black' : 'bg-zinc-300'}`}></div>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <AssetPipelineTable t={t} />
         <ModernWorkflow t={t} />
      </div>
   );
};

export default AssetsPage;
