
import { useTranslation } from 'react-i18next';
import TechArch from '../components/home/TechArch';
import SecurityInfrastructure from '../components/tech/SecurityInfrastructure';
import TechFeatures from '../components/tech/TechFeatures';
import SectionHeading from '../components/ui/SectionHeading';

const TechPage = () => {
  const { t } = useTranslation();
  return (
  <div>
     <SecurityInfrastructure />
     <TechFeatures />
     <TechArch />
     <div className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-6 md:px-12">
           <SectionHeading title={t('tech_page.dev_title')} subtitle="Integrate via SDK & API." />
           <div className="bg-black p-8 font-mono text-xs text-zinc-500 border border-zinc-800 shadow-2xl overflow-x-auto">
               <div className="flex gap-2 mb-4"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div></div>
               <p className="text-green-400">$ npm install @primex/sdk</p><br/><p className="text-purple-400">import {`{ PrimeX }`} from '@primex/sdk';</p><p className="text-blue-300">const client = new PrimeX({`{`} apiKey: process.env.KEY {`}`});</p>
           </div>
        </div>
     </div>
  </div>
);
};

export default TechPage;
