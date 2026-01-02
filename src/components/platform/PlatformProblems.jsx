
import { Clock, Eye, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const PlatformProblems = () => {
   const { t } = useTranslation();
   return (
   <div className="py-24 border-y border-zinc-100 bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12">
         <SectionHeading title={t('platform.problems_title')} subtitle={t('platform.problems_subtitle')} />
         <div className="grid md:grid-cols-3 gap-12">
             <FadeIn delay={100}>
                <div className="flex flex-col gap-4">
                   <div className="p-4 bg-white border border-zinc-200 rounded-lg w-fit"><Clock className="text-black" size={24}/></div>
                   <h3 className="text-xl font-bold">{t('platform.eff_title')}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed">{t('platform.eff_desc')}</p>
                </div>
             </FadeIn>
             <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                   <div className="p-4 bg-white border border-zinc-200 rounded-lg w-fit"><Eye className="text-black" size={24}/></div>
                   <h3 className="text-xl font-bold">{t('platform.trans_title')}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed">{t('platform.trans_desc')}</p>
                </div>
             </FadeIn>
             <FadeIn delay={300}>
                <div className="flex flex-col gap-4">
                   <div className="p-4 bg-white border border-zinc-200 rounded-lg w-fit"><Settings className="text-black" size={24}/></div>
                   <h3 className="text-xl font-bold">{t('platform.prog_title')}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed">{t('platform.prog_desc')}</p>
                </div>
             </FadeIn>
         </div>
      </div>
   </div>
);
};

export default PlatformProblems;
