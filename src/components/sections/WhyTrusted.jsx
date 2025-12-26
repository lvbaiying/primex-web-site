import { Fingerprint, Scale, ShieldCheck } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const WhyTrusted = ({ t }) => (
  <div className="py-32 bg-zinc-50 border-y border-zinc-200">
    <div className="container mx-auto px-6 md:px-12">
      <SectionHeading title={t.trusted.title} subtitle={t.trusted.subtitle} align="center" />

      <div className="grid md:grid-cols-3 gap-12 mt-20">
        {[
          { title: t.trusted.t1_title, icon: <Scale size={40} strokeWidth={1} />, desc: t.trusted.t1_desc },
          { title: t.trusted.t2_title, icon: <ShieldCheck size={40} strokeWidth={1} />, desc: t.trusted.t2_desc },
          { title: t.trusted.t3_title, icon: <Fingerprint size={40} strokeWidth={1} />, desc: t.trusted.t3_desc }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 150}>
            <div className="group h-full bg-white p-10 border border-zinc-200 hover:border-black hover:shadow-2xl transition-all duration-500 relative top-0 hover:-top-2">
              <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4 text-black">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm font-light">
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);

export default WhyTrusted;
