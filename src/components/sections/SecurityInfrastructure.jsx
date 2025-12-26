import { Eye, FileCheck, Key, ShieldCheck } from 'lucide-react';
import React from 'react';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const SecurityInfrastructure = ({ t }) => (
   <div className="py-32 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
         <SectionHeading title={t.tech.security_title} subtitle={t.tech.security_subtitle} />

         <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
               <div className="aspect-square relative bg-white border border-zinc-200 p-12 flex items-center justify-center rounded-full overflow-hidden">
                  <div className="absolute inset-0 border-[20px] border-zinc-50 rounded-full"></div>
                  <div className="relative z-10 text-center">
                     <ShieldCheck size={64} strokeWidth={0.8} className="mx-auto mb-6 text-black" />
                     <div className="text-4xl font-light tracking-tighter">100%</div>
                     <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-2">{t.tech.security.audit_coverage}</div>
                  </div>
               </div>
            </FadeIn>

            <div className="space-y-12">
               {[
                  { icon: <FileCheck />, title: t.tech.security.features.audits.title, desc: t.tech.security.features.audits.desc },
                  { icon: <Key />, title: t.tech.security.features.key_management.title, desc: t.tech.security.features.key_management.desc },
                  { icon: <Eye />, title: t.tech.security.features.zk_privacy.title, desc: t.tech.security.features.zk_privacy.desc }
               ].map((item, i) => (
                  <FadeIn key={i} delay={i * 150}>
                     <div className="flex gap-8 group">
                        <div className="w-12 h-12 bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-black group-hover:border-black transition-all">
                           {React.cloneElement(item.icon, { strokeWidth: 1.5, size: 20 })}
                        </div>
                        <div>
                           <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                           <p className="text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                        </div>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </div>
   </div>
);

export default SecurityInfrastructure;
