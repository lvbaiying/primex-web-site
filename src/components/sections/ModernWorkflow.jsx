import { Code2, FileText, RefreshCw, Users, Zap } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const ModernWorkflow = ({ t }) => {
  const steps = [
    { id: "01", title: t.assets.workflow.steps.onboarding.title, role: t.assets.workflow.steps.onboarding.role, desc: t.assets.workflow.steps.onboarding.desc, icon: <FileText size={18} strokeWidth={1.5} /> },
    { id: "02", title: t.assets.workflow.steps.tokenization.title, role: t.assets.workflow.steps.tokenization.role, desc: t.assets.workflow.steps.tokenization.desc, icon: <Code2 size={18} strokeWidth={1.5} /> },
    { id: "03", title: t.assets.workflow.steps.subscription.title, role: t.assets.workflow.steps.subscription.role, desc: t.assets.workflow.steps.subscription.desc, icon: <Users size={18} strokeWidth={1.5} /> },
    { id: "04", title: t.assets.workflow.steps.settlement.title, role: t.assets.workflow.steps.settlement.role, desc: t.assets.workflow.steps.settlement.desc, icon: <Zap size={18} strokeWidth={1.5} /> },
    { id: "05", title: t.assets.workflow.steps.servicing.title, role: t.assets.workflow.steps.servicing.role, desc: t.assets.workflow.steps.servicing.desc, icon: <RefreshCw size={18} strokeWidth={1.5} /> }
  ];

  return (
    <div className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title={t.assets.workflow_title} subtitle={t.assets.workflow.subtitle} dark />

        <div className="relative mt-20">
          <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 hidden md:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group flex flex-col md:items-center relative p-6 md:p-0 bg-zinc-900 md:bg-transparent border border-zinc-800 md:border-none rounded-lg hover:bg-zinc-800/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-xs font-bold mb-6 group-hover:border-white group-hover:text-white transition-all shadow-xl z-20">
                    {step.id}
                  </div>

                  <div className="md:text-center">
                    <div className="flex items-center gap-2 md:justify-center mb-3 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                      {step.icon} <span>{step.role}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1 text-white group-hover:text-zinc-300 transition-colors">{step.title}</h4>
                    <p className="text-zinc-500 text-xs">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernWorkflow;
