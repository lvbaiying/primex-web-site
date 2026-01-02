
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AbstractInterface = () => {
  const { t } = useTranslation();
  return (
  <div className="relative w-full aspect-video bg-zinc-50 border border-zinc-200 rounded-lg overflow-hidden shadow-2xl p-4 flex flex-col gap-4">
      {/* Abstract UI Elements */}
      <div className="flex gap-4 mb-4">
        <div className="w-1/3 h-24 bg-white rounded border border-zinc-200 animate-pulse"></div>
        <div className="w-1/3 h-24 bg-white rounded border border-zinc-200 animate-pulse delay-75"></div>
        <div className="w-1/3 h-24 bg-white rounded border border-zinc-200 animate-pulse delay-150"></div>
      </div>
      <div className="flex-grow bg-white rounded border border-zinc-200 p-4 space-y-3">
         <div className="w-3/4 h-4 bg-zinc-100 rounded"></div>
         <div className="w-full h-px bg-zinc-100 my-4"></div>
         <div className="space-y-2">
            {[1,2,3].map(i => (
               <div key={i} className="flex justify-between">
                  <div className="w-1/3 h-3 bg-zinc-50 rounded"></div>
                  <div className="w-1/4 h-3 bg-zinc-50 rounded"></div>
               </div>
            ))}
         </div>
      </div>

    <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded shadow-xl max-w-xs border border-zinc-800">
      <div className="flex items-center gap-3 mb-2">
        <ShieldCheck size={20} className="text-white" />
        <span className="text-xs font-bold uppercase tracking-wider">{t('hero.compliance_check')}</span>
      </div>
      <div className="text-sm text-zinc-400 whitespace-pre-line">{t('hero.kyc_verified')}</div>
    </div>
  </div>
);
};

export default AbstractInterface;
