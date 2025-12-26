import { Clock, Eye, Settings } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const PlatformProblems = ({ t }) => (
   <div className="py-32 border-y border-zinc-100 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
         <SectionHeading title={t.platform.problems_title} subtitle={t.platform.problems_subtitle} />

         <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
            {[
               { icon: <Clock size={32} strokeWidth={1} />, title: t.platform.eff_title, desc: t.platform.eff_desc },
               { icon: <Eye size={32} strokeWidth={1} />, title: t.platform.trans_title, desc: t.platform.trans_desc },
               { icon: <Settings size={32} strokeWidth={1} />, title: t.platform.prog_title, desc: t.platform.prog_desc }
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 150}>
                  <div className="flex flex-col gap-6 group">
                     <div className="w-16 h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        {item.icon}
                     </div>
                     <div>
                        <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs border-l border-zinc-300 pl-4">
                           {item.desc}
                        </p>
                     </div>
                  </div>
               </FadeIn>
            ))}
         </div>
      </div>
   </div>
);

export default PlatformProblems;
