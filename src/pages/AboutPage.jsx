import { Award, Mail } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';
import SectionHeading from '../components/ui/SectionHeading';

const AboutPage = ({ t }) => {
   return (
      <div className="pt-32 pb-20 bg-white min-h-screen">
         <div className="container mx-auto px-6 md:px-12">
            <FadeIn>
               <div className="max-w-4xl mx-auto text-center mb-32">
                  <div className="inline-block mb-6"><Award size={48} strokeWidth={1} /></div>
                  <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8">{t.about.mission_title}</h1>
                  <p className="text-2xl md:text-3xl font-serif italic text-zinc-500 leading-relaxed">
                     "{t.about.mission_desc}"
                  </p>
               </div>
            </FadeIn>

            <div className="mb-32 py-12 border-y border-zinc-100">
               <SectionHeading title={t.about.team_title} subtitle={t.about.team_subtitle} />
               <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                     <p className="text-lg text-zinc-600 leading-relaxed mb-8 font-light">
                        {t.about.team_desc}
                     </p>
                     <div className="flex flex-wrap gap-3">
                        {t.about.team_tags.map((tag, i) => (
                           <span key={i} className="px-4 py-2 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-wider bg-zinc-50">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
                     {[
                        { val: "15+", label: t.about.stats.years_exp },
                        { val: "$500M+", label: t.about.stats.pipeline },
                        { val: "20+", label: t.about.stats.partners },
                        { val: "100%", label: t.about.stats.compliance }
                     ].map((stat, i) => (
                        <div key={i} className="bg-white p-8 text-center hover:bg-zinc-50 transition-colors">
                           <div className="text-4xl font-light mb-2">{stat.val}</div>
                           <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Roadmap */}
            <div className="mb-32">
               <SectionHeading title={t.about.roadmap_title} subtitle={t.about.roadmap_subtitle} />
               <div className="space-y-0">
                  {[
                     t.about.roadmap.phase1,
                     t.about.roadmap.phase2,
                     t.about.roadmap.phase3,
                     t.about.roadmap.phase4
                  ].map((item, i) => (
                     <FadeIn key={i} delay={i * 100}>
                        <div className="group flex flex-col md:flex-row border-t border-zinc-100 py-10 hover:bg-zinc-50 transition-colors px-4 -mx-4">
                           <div className="md:w-1/4 mb-4 md:mb-0">
                              <div className="text-4xl font-light text-zinc-300 group-hover:text-black transition-colors">{item.phase}</div>
                           </div>
                           <div className="md:w-1/4 mb-4 md:mb-0">
                              <div className="text-lg font-bold">{item.time}</div>
                           </div>
                           <div className="md:w-1/2">
                              <div className="flex flex-wrap gap-8">
                                 {item.caps.map((cap, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-zinc-500">
                                       <div className="w-1.5 h-1.5 bg-zinc-300 group-hover:bg-black transition-colors"></div>
                                       <span className="font-light">{cap}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </FadeIn>
                  ))}
               </div>
            </div>

            <div className="bg-black text-white p-16 md:p-32 text-center" id="contact">
               <Mail size={48} strokeWidth={1} className="mx-auto mb-8" />
               <h2 className="text-4xl md:text-6xl font-light mb-8">{t.about.contact_title}</h2>
               <p className="text-zinc-400 mb-12 text-lg font-light max-w-xl mx-auto">{t.about.contact_desc}</p>
               <div className="flex flex-col md:flex-row justify-center gap-12 text-left max-w-2xl mx-auto">
                  <div className="flex-1 border-l border-zinc-800 pl-8">
                     <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{t.about.contact.headquarters}</div>
                     <div className="text-lg">{t.about.contact.headquarters_address}</div>
                  </div>
                  <div className="flex-1 border-l border-zinc-800 pl-8">
                     <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">{t.about.contact.email}</div>
                     <div className="text-lg">{t.about.contact.email_address}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutPage;
