
const AssetPipelineTable = ({ t }) => {
   const pipeline = [
      { name: "Global Private Credit Fund III", region: "North America", type: "Credit", size: "$50M", stage: t.assets.pipeline.stages.ready },
      { name: "Pan-Asia Tech Pre-IPO", region: "Singapore", type: "Equity", size: "$20M", stage: t.assets.pipeline.stages.structuring },
      { name: "Green Energy Bond Series A", region: "Europe", type: "Infrastructure", size: "$100M", stage: t.assets.pipeline.stages.in_review },
      { name: "Real Estate Income Fund", region: "US", type: "Real Estate", size: "$35M", stage: t.assets.pipeline.stages.in_review },
   ];

   return (
      <div className="py-32 bg-white border-t border-zinc-100">
         <div className="container mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-16">
               <h3 className="text-3xl font-light">{t.assets.pipeline_title}</h3>
               <div className="text-sm text-zinc-400 italic font-serif">{t.assets.pipeline.representative}</div>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-black">
                        <th className="py-6 pr-8 text-xs font-bold uppercase tracking-widest text-zinc-500">{t.assets.pipeline.table_headers.name}</th>
                        <th className="py-6 pr-8 text-xs font-bold uppercase tracking-widest text-zinc-500">{t.assets.pipeline.table_headers.region}</th>
                        <th className="py-6 pr-8 text-xs font-bold uppercase tracking-widest text-zinc-500">{t.assets.pipeline.table_headers.type}</th>
                        <th className="py-6 pr-8 text-xs font-bold uppercase tracking-widest text-zinc-500">{t.assets.pipeline.table_headers.size}</th>
                        <th className="py-6 pr-8 text-xs font-bold uppercase tracking-widest text-zinc-500 text-right">{t.assets.pipeline.table_headers.status}</th>
                     </tr>
                  </thead>
                  <tbody>
                     {pipeline.map((row, i) => (
                        <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors group">
                           <td className="py-8 pr-8 font-medium text-lg">{row.name}</td>
                           <td className="py-8 pr-8 text-zinc-500 font-light">{row.region}</td>
                           <td className="py-8 pr-8 text-zinc-500 font-light">{row.type}</td>
                           <td className="py-8 pr-8 font-mono text-sm text-zinc-500">{row.size}</td>
                           <td className="py-8 pr-8 text-right">
                              <span className={`px-3 py-1 text-[10px] font-bold border rounded-full uppercase tracking-widest transition-all ${row.stage === t.assets.pipeline.stages.ready ? 'bg-black text-white border-black' :
                                    row.stage === t.assets.pipeline.stages.structuring ? 'bg-white text-black border-zinc-300' :
                                       'bg-zinc-50 text-zinc-400 border-transparent'
                                 }`}>
                                 {row.stage}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AssetPipelineTable;
