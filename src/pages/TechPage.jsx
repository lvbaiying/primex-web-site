import SecurityInfrastructure from '../components/sections/SecurityInfrastructure';
import TechFeatures from '../components/sections/TechFeatures';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const TechPage = ({ t }) => {
   return (
      <div>
         <SecurityInfrastructure t={t} />
         <TechFeatures t={t} />

         <div className="py-32 bg-black text-white">
            <div className="container mx-auto px-6 md:px-12">
               <div className="grid lg:grid-cols-2 gap-20">
                  <div>
                     <SectionHeading title={t.tech.dev_title} subtitle={t.tech.dev_subtitle} dark />
                     <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                        {t.tech.dev_desc}
                     </p>
                     <Button variant="outline" className="border-zinc-700 text-white hover:bg-white hover:text-black hover:border-white">
                        {t.tech.dev_cta}
                     </Button>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 p-8 font-mono text-sm text-zinc-400 rounded-lg shadow-2xl overflow-x-auto">
                     <div className="flex gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                     </div>
                     <p><span className="text-white">$</span> npm install @primex/sdk</p>
                     <br />
                     <p className="opacity-50">// Initialize Client</p>
                     <p>import <span className="text-white">{`{ PrimeX }`}</span> from '@primex/sdk';</p>
                     <p>const client = new PrimeX({`{`} key: <span className="text-white">ENV_KEY</span> {`}`});</p>
                     <br />
                     <p className="opacity-50">// Tokenize Asset</p>
                     <p>const asset = await client.assets.create({`{`}</p>
                     <p className="pl-4">name: <span className="text-white">"Private Credit Fund I"</span>,</p>
                     <p className="pl-4">symbol: <span className="text-white">"PCF1"</span>,</p>
                     <p className="pl-4">supply: <span className="text-white">50000000</span></p>
                     <p>{`}`});</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TechPage;
