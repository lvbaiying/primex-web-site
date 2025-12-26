import { ArrowRight, Layers, ShieldCheck, TrendingUp } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const HomeOverview = ({ t }) => {
  return (
  <div className="py-32 bg-white container mx-auto px-6 md:px-12">
    <SectionHeading title={t.capabilities.title} subtitle={t.capabilities.subtitle} />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-black">
      {[
        { icon: <Layers size={48} strokeWidth={1} />, title: t.capabilities.c1_title, desc: t.capabilities.c1_desc },
        { icon: <TrendingUp size={48} strokeWidth={1} />, title: t.capabilities.c2_title, desc: t.capabilities.c2_desc },
        { icon: <ShieldCheck size={48} strokeWidth={1} />, title: t.capabilities.c3_title, desc: t.capabilities.c3_desc }
      ].map((item, i) => (
        <FadeIn key={i} delay={i * 100}>
          <div className="group p-12 md:p-16 border-b border-zinc-100 md:border-r md:border-black/10 hover:bg-black hover:text-white transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden">
            {/* Hover Effect Background */}
            <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-10 transition-opacity duration-500 scale-150 transform translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {item.icon}
            </div>

            <div>
              <div className="mb-12 text-black group-hover:text-white transition-colors duration-500">{item.icon}</div>
              <h3 className="text-3xl font-light mb-6 tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 text-lg leading-relaxed group-hover:text-zinc-400 font-light">{item.desc}</p>
            </div>
            <div className="mt-16 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-xs font-bold uppercase tracking-widest">{t.common.learn_more}</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
  );
};

export default HomeOverview;
