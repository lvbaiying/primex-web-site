
import { Download, Eye, Link, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/ui/SectionHeading';

const TransparencyPage = () => {
   const { t } = useTranslation();
   return (
     <div className="pt-32 pb-20 bg-white min-h-screen">
        <div className="bg-zinc-50 py-24 border-b border-zinc-200 mb-24">
           <div className="container mx-auto px-6 md:px-12 text-center">
              <div className="inline-block p-4 bg-white border border-zinc-200 rounded-full mb-8"><ShieldCheck size={32} strokeWidth={1} className="text-black"/></div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6 whitespace-pre-line">{t('transparency_page.hero_title')}</h1>
              <p className="text-xl text-zinc-500 max-w-2xl mx-auto">{t('transparency_page.hero_desc')}</p>
           </div>
        </div>
        <div className="container mx-auto px-6 md:px-12">
           <SectionHeading title={t('transparency_page.reports_title')} subtitle={t('transparency_page.reports_subtitle')} />
           <div className="overflow-x-auto mb-32">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b-2 border-black">
                       <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-500">{t('transparency_page.table_headers.date')}</th>
                       <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-500">{t('transparency_page.table_headers.fund')}</th>
                       <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-500">{t('transparency_page.table_headers.custodian')}</th>
                       <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-500">{t('transparency_page.table_headers.value')}</th>
                       <th className="py-4 text-xs font-bold uppercase tracking-widest text-zinc-500 text-right">{t('transparency_page.table_headers.report')}</th>
                    </tr>
                 </thead>
                 <tbody>
                    {[
                       { date: "Oct 24, 2024", name: "US Treasury Bill Fund", cust: "BNY Mellon", val: "$124,500,000" },
                       { date: "Oct 24, 2024", name: "SpaceX SPV Series B", cust: "Anchorage", val: "$45,200,000" },
                       { date: "Oct 24, 2024", name: "Private Credit Fund I", cust: "Wilmington Trust", val: "$88,000,000" }
                    ].map((row, i) => (
                       <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                          <td className="py-6 font-mono text-sm text-zinc-500">{row.date}</td>
                          <td className="py-6 font-medium">{row.name}</td>
                          <td className="py-6 text-zinc-600">{row.cust}</td>
                          <td className="py-6 font-mono">{row.val}</td>
                          <td className="py-6 text-right"><button className="text-xs font-bold uppercase border-b border-black hover:opacity-50 flex items-center gap-1 ml-auto w-fit">{t('transparency_page.download_pdf')} <Download size={12}/></button></td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
           <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
              <div>
                 <SectionHeading title={t('transparency_page.por_title')} subtitle={t('transparency_page.por_subtitle')} />
                 <p className="text-zinc-500 leading-relaxed mb-8">{t('transparency_page.por_desc')}</p>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border border-zinc-200 bg-zinc-50">
                       <div className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div><span className="font-bold">{t('transparency_page.on_chain_supply')}</span></div>
                       <span className="font-mono">124,500,000 tokens</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border border-zinc-200 bg-zinc-50">
                       <div className="flex items-center gap-3"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div><span className="font-bold">{t('transparency_page.off_chain_reserves')}</span></div>
                       <span className="font-mono">$124,500,000 USD</span>
                    </div>
                 </div>
                 <div className="mt-8 text-xs text-zinc-400 font-mono">{t('transparency_page.oracle_address')}: 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</div>
              </div>
              <div className="bg-zinc-900 text-white p-12 rounded-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-20"><Link size={120} strokeWidth={0.5}/></div>
                 <h4 className="text-2xl font-light mb-8">{t('transparency_page.live_feed')}</h4>
                 <div className="space-y-6 relative z-10">
                    {[
                       { label: t('transparency_page.last_update'), val: "2 mins ago" },
                       { label: t('transparency_page.heartbeat'), val: "3600s" },
                       { label: t('transparency_page.deviation'), val: "0.5%" }
                    ].map((item, i) => (
                       <div key={i} className="flex justify-between border-b border-zinc-800 pb-2">
                          <span className="text-zinc-500 text-sm uppercase tracking-wider">{item.label}</span>
                          <span className="font-mono">{item.val}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
           <SectionHeading title={t('transparency_page.panel_title')} subtitle={t('transparency_page.panel_subtitle')} />
           <div className="grid md:grid-cols-3 gap-8">
              {[
                 { name: "Dr. Sarah Lin", role: t('transparency_page.members.sarah_role'), firm: t('transparency_page.members.sarah_firm'), img: "SL" },
                 { name: "James V.", role: t('transparency_page.members.james_role'), firm: t('transparency_page.members.james_firm'), img: "JV" },
                 { name: "Elena R.", role: t('transparency_page.members.elena_role'), firm: t('transparency_page.members.elena_firm'), img: "ER" }
              ].map((member, i) => (
                 <div key={i} className="border border-zinc-200 p-8 hover:border-black transition-colors group">
                    <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center text-xl font-serif font-bold text-zinc-400 mb-6 group-hover:bg-black group-hover:text-white transition-colors">{member.img}</div>
                    <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                    <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-sm text-zinc-500">{member.firm}</p>
                    <div className="mt-6 pt-6 border-t border-zinc-100 text-xs text-zinc-400 flex items-center gap-2"><Eye size={12}/> {t('transparency_page.view_only')}</div>
                 </div>
              ))}
           </div>
        </div>
     </div>
   );
};

export default TransparencyPage;
