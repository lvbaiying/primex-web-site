import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const EcosystemCollaboration = ({ t }) => {
  const partners = [
    { cat: t.ecosystem.custody, desc: t.ecosystem.custody_desc, logos: ["Fireblocks", "Anchorage", "BitGo"] },
    { cat: t.ecosystem.fund_admin, desc: t.ecosystem.fund_admin_desc, logos: ["Apex", "Trident", "Gen II"] },
    { cat: t.ecosystem.identity, desc: t.ecosystem.identity_desc, logos: ["Sumsub", "Onfido", "Fractal"] },
    { cat: t.ecosystem.data, desc: t.ecosystem.data_desc, logos: ["Chainlink", "Pyth", "DIA"] },
    { cat: t.ecosystem.liquidity, desc: t.ecosystem.liquidity_desc, logos: ["Wintermute", "GSR", "Keyrock"] }
  ];

  return (
    <div className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title={t.ecosystem.title} subtitle={t.ecosystem.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-zinc-200 border border-zinc-200">
          {partners.map((p, i) => (
            <div key={i} className="bg-white p-8 hover:bg-zinc-50 transition-colors h-full flex flex-col group">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 block mb-2">{p.cat}</span>
                <p className="text-sm font-medium text-black">{p.desc}</p>
              </div>
              <div className="mt-auto space-y-4 pt-8 border-t border-zinc-100 group-hover:border-zinc-300 transition-colors">
                {p.logos.map((logo, idx) => (
                  <FadeIn key={idx} delay={idx * 100 + i * 100}>
                    <div className="flex items-center gap-3 text-zinc-600 group-hover:text-black transition-colors">
                      <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
                      <span className="font-serif text-sm">{logo}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemCollaboration;
