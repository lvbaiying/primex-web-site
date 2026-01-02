
import { Eye, FileCheck, GitBranch, Grid, Lock, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const TechFeatures = () => {
  const { t } = useTranslation();
  const features = [
    { category: "Blockchain", icon: <Grid size={32} />, title: "Immutable Ledger", desc: "All transactions and ownership records are stored on-chain, providing a tamper-proof audit trail for regulators and investors." },
    { category: "Blockchain", icon: <GitBranch size={32} />, title: "Interoperability", desc: "Asset tokens are compatible with the broader DeFi ecosystem, enabling composability with lending protocols (future roadmap)." },
    { category: "Privacy", icon: <Eye size={32} />, title: "Zero-Knowledge Proofs", desc: "Prove investor eligibility (whitelist status) and solvency without revealing underlying identity or wallet balance." },
    { category: "Privacy", icon: <Lock size={32} />, title: "Confidential Data Vaults", desc: "Sensitive PII and subscription documents are stored in encrypted off-chain vaults, linked securely to on-chain IDs." },
    { category: "Security", icon: <Shield size={32} />, title: "Multi-Party Computation", desc: "Private keys are split into shards and distributed among multiple parties. No single entity can sign a transaction alone." },
    { category: "Security", icon: <FileCheck size={32} />, title: "Automated Compliance", desc: "Smart contracts enforce transfer restrictions (e.g., Reg D lockup periods) at the protocol level, preventing unauthorized trades." }
  ];
  return (
    <div className="py-24 bg-white border-t border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title={t('tech_page.features_title')} subtitle={t('tech_page.features_subtitle')} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="p-8 border border-zinc-100 bg-zinc-50 hover:bg-white hover:border-black hover:shadow-xl transition-all duration-300 h-full group rounded-lg">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white border border-zinc-200 rounded-lg text-black group-hover:bg-black group-hover:text-white transition-colors">{f.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-zinc-100 px-2 py-1 rounded">{f.category}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-black transition-colors">{f.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechFeatures;
