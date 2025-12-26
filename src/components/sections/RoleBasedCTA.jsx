import { Box, Handshake, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

const RoleBasedCTA = ({ onNavigate, t }) => (
  <div className="py-32 bg-black text-white relative overflow-hidden">
    {/* Dark minimalist texture */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">{t.cta_roles.title}</h2>
        <p className="text-zinc-500 text-lg font-light">{t.cta_roles.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Box strokeWidth={1} size={40} />, title: t.cta_roles.issuer_title, desc: t.cta_roles.issuer_desc, btn: t.cta_roles.issuer_btn, action: 'platform' },
          { icon: <TrendingUp strokeWidth={1} size={40} />, title: t.cta_roles.investor_title, desc: t.cta_roles.investor_desc, btn: t.cta_roles.investor_btn, action: 'assets' },
          { icon: <Handshake strokeWidth={1} size={40} />, title: t.cta_roles.partner_title, desc: t.cta_roles.partner_desc, btn: t.cta_roles.partner_btn, action: 'contact' }
        ].map((role, i) => (
          <FadeIn key={i} delay={i * 150}>
            <div className="group h-full p-10 border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black transition-all duration-500 flex flex-col items-center text-center rounded-sm">
              <div className="mb-8 p-4 rounded-full bg-zinc-800 group-hover:bg-zinc-100 group-hover:text-black transition-colors duration-500">
                {role.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4">{role.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-10 group-hover:text-zinc-600 px-4 flex-grow">
                {role.desc}
              </p>
              <Button variant="outline" className="w-full border-zinc-700 text-white group-hover:border-black group-hover:text-black hover:bg-black hover:text-white" onClick={() => onNavigate(role.action)}>
                {role.btn}
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);

export default RoleBasedCTA;
