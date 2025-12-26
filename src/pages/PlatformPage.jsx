import { Briefcase, Check, Layout, RefreshCw } from 'lucide-react';
import PlatformProblems from '../components/sections/PlatformProblems';
import PlatformValueProp from '../components/sections/PlatformValueProp';
import AbstractInterface from '../components/ui/AbstractInterface';
import FadeIn from '../components/ui/FadeIn';
import SectionHeading from '../components/ui/SectionHeading';

const PlatformPage = ({ t }) => {
  return (
    <div className="pt-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
          <FadeIn>
            <h1 className="text-6xl lg:text-8xl font-light tracking-tighter mb-10 whitespace-pre-line leading-[1]">{t.platform.hero_title}</h1>
            <p className="text-xl text-zinc-500 leading-relaxed mb-10 font-light">
              {t.platform.hero_desc}
            </p>
            <div className="space-y-4">
              {[t.platform.features.spv_fund, t.platform.features.multi_chain, t.platform.features.bank_custody].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-t border-zinc-100">
                  <Check size={18} className="text-black" />
                  <span className="text-sm tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <AbstractInterface t={t} />
          </FadeIn>
        </div>
      </div>

      <PlatformProblems t={t} />

      <div className="container mx-auto px-6 md:px-12 py-32">
        <SectionHeading title={t.platform.modules_title} subtitle={t.platform.modules_subtitle} />

        <div className="grid md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
          {[
            { title: t.platform.modules.launchpad.title, sub: t.platform.modules.launchpad.sub, desc: t.platform.modules.launchpad.desc, icon: <Layout size={32} strokeWidth={1} /> },
            { title: t.platform.modules.marketplace.title, sub: t.platform.modules.marketplace.sub, desc: t.platform.modules.marketplace.desc, icon: <RefreshCw size={32} strokeWidth={1} /> },
            { title: t.platform.modules.dashboard.title, sub: t.platform.modules.dashboard.sub, desc: t.platform.modules.dashboard.desc, icon: <Briefcase size={32} strokeWidth={1} /> }
          ].map((m, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="h-full bg-white p-12 hover:bg-zinc-50 transition-all duration-500 group flex flex-col justify-between">
                <div>
                  <div className="mb-10 text-zinc-400 group-hover:text-black transition-colors">{m.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 group-hover:text-black transition-colors">{m.sub}</div>
                  <h3 className="text-2xl font-medium mb-6">{m.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm font-light">{m.desc}</p>
                </div>
                <div className="mt-12 w-8 h-px bg-zinc-200 group-hover:w-full group-hover:bg-black transition-all duration-700"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <PlatformValueProp t={t} />
    </div>
  );
};

export default PlatformPage;
