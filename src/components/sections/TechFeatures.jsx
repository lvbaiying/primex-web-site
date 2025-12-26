import { Eye, FileCheck, GitBranch, Grid, Lock, Shield } from 'lucide-react';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const TechFeatures = ({ t }) => {
  const features = [
    { cat: t.tech.features.immutable_ledger.cat, icon: <Grid size={32} strokeWidth={1} />, title: t.tech.features.immutable_ledger.title, desc: t.tech.features.immutable_ledger.desc },
    { cat: t.tech.features.interoperability.cat, icon: <GitBranch size={32} strokeWidth={1} />, title: t.tech.features.interoperability.title, desc: t.tech.features.interoperability.desc },
    { cat: t.tech.features.zk_proofs.cat, icon: <Eye size={32} strokeWidth={1} />, title: t.tech.features.zk_proofs.title, desc: t.tech.features.zk_proofs.desc },
    { cat: t.tech.features.confidential_vaults.cat, icon: <Lock size={32} strokeWidth={1} />, title: t.tech.features.confidential_vaults.title, desc: t.tech.features.confidential_vaults.desc },
    { cat: t.tech.features.mpc_wallets.cat, icon: <Shield size={32} strokeWidth={1} />, title: t.tech.features.mpc_wallets.title, desc: t.tech.features.mpc_wallets.desc },
    { cat: t.tech.features.auto_compliance.cat, icon: <FileCheck size={32} strokeWidth={1} />, title: t.tech.features.auto_compliance.title, desc: t.tech.features.auto_compliance.desc }
  ];

  return (
    <div className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title={t.tech.features_title} subtitle={t.tech.features_subtitle} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group">
                <div className="flex items-center justify-between mb-6 border-b border-zinc-100 pb-6 group-hover:border-black transition-colors duration-500">
                  <div className="text-zinc-400 group-hover:text-black transition-colors">{f.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-200 px-2 py-1 rounded">{f.cat}</span>
                </div>
                <h4 className="text-xl font-medium mb-3">{f.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechFeatures;
