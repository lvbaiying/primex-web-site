
import { Box, Handshake, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const RoleBasedCTA = ({ onNavigate }) => {
  const { t } = useTranslation();
  return (
  <div className="py-32 bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
    
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light mb-6">{t('cta_roles.title')}</h2>
        <p className="text-zinc-400">{t('cta_roles.subtitle')}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-0 border border-zinc-800 rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-800 backdrop-blur-sm bg-zinc-900/50">
        <div className="group relative p-8 md:p-12 hover:bg-zinc-800 transition-colors text-center">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-700 group-hover:border-white transition-colors">
            <Box size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{t('cta_roles.issuer_title')}</h3>
          <p className="text-zinc-500 text-sm mb-8 px-4 h-12">
            {t('cta_roles.issuer_desc')}
          </p>
          <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-white hover:text-black hover:border-white" onClick={() => onNavigate('products')}>
            {t('cta_roles.issuer_btn')}
          </Button>
        </div>
        <div className="group relative p-8 md:p-12 hover:bg-zinc-800 transition-colors text-center">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-700 group-hover:border-white transition-colors">
            <TrendingUp size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{t('cta_roles.investor_title')}</h3>
          <p className="text-zinc-500 text-sm mb-8 px-4 h-12">
            {t('cta_roles.investor_desc')}
          </p>
          <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-white hover:text-black hover:border-white" onClick={() => onNavigate('products')}>
            {t('cta_roles.investor_btn')}
          </Button>
        </div>
        <div className="group relative p-8 md:p-12 hover:bg-zinc-800 transition-colors text-center">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-700 group-hover:border-white transition-colors">
            <Handshake size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{t('cta_roles.partner_title')}</h3>
          <p className="text-zinc-500 text-sm mb-8 px-4 h-12">
            {t('cta_roles.partner_desc')}
          </p>
          <Button variant="outline" className="w-full border-zinc-700 text-white hover:bg-white hover:text-black hover:border-white" onClick={() => onNavigate('about')}>
            {t('cta_roles.partner_btn')}
          </Button>
        </div>
      </div>
    </div>
  </div>
);
};

export default RoleBasedCTA;
