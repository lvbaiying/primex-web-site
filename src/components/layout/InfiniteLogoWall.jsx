import { Activity, Box, Building2, CircleDollarSign, Globe, Landmark, Link, Lock, Shield, ShieldCheck } from 'lucide-react';

const InfiniteLogoWall = ({ t }) => {
  const logos = [
    { name: "Goldman Sachs", icon: <Landmark size={20} /> },
    { name: "BlackRock", icon: <Building2 size={20} /> },
    { name: "Citi", icon: <Globe size={20} /> },
    { name: "Fidelity", icon: <Shield size={20} /> },
    { name: "Chainlink", icon: <Link size={20} /> },
    { name: "Fireblocks", icon: <ShieldCheck size={20} /> },
    { name: "Circle", icon: <CircleDollarSign size={20} /> },
    { name: "Polygon", icon: <Box size={20} /> },
    { name: "Wintermute", icon: <Activity size={20} /> },
    { name: "Coinbase", icon: <Globe size={20} /> },
    { name: "Anchorage", icon: <Lock size={20} /> }
  ];

  return (
    <div className="py-16 border-y border-zinc-100 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{t.partners.label}</p>
      </div>
      <div className="flex justify-center overflow-hidden w-full relative mask-linear-fade">
        <style>{`
          .mask-linear-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
          @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .logo-track { display: flex; width: max-content; animation: scroll 60s linear infinite; }
        `}</style>
        <div className="logo-track gap-24 px-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-3 text-xl font-serif font-medium whitespace-nowrap text-black">
              {logo.icon}
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoWall;
