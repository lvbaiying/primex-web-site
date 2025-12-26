import { Activity, ShieldCheck } from 'lucide-react';

const AbstractInterface = ({ t }) => (
   <div className="relative w-full aspect-video bg-zinc-50 border border-zinc-200 shadow-2xl p-6 flex flex-col gap-6 backdrop-blur-sm bg-opacity-80">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
         <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
         </div>
         <div className="h-1.5 w-24 bg-zinc-100 rounded-full"></div>
      </div>
      {/* Body */}
      <div className="flex gap-6 h-full">
         <div className="w-1/4 bg-white border border-zinc-100 h-full p-4 space-y-3 shadow-sm">
            <div className="h-2 w-12 bg-zinc-100 rounded"></div>
            <div className="h-2 w-full bg-zinc-50 rounded"></div>
            <div className="h-2 w-full bg-zinc-50 rounded"></div>
            <div className="h-2 w-full bg-zinc-50 rounded"></div>
         </div>
         <div className="w-3/4 flex flex-col gap-6">
            <div className="h-1/2 bg-zinc-900 text-white p-6 flex items-end justify-between shadow-md">
               <div className="space-y-2">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{t.common.abstract_interface.total_value_locked}</div>
                  <div className="text-3xl font-mono">$124,500,000</div>
               </div>
               <Activity size={32} strokeWidth={1} className="text-zinc-500" />
            </div>
            <div className="h-1/2 grid grid-cols-2 gap-4">
               <div className="bg-white border border-zinc-100 p-4 shadow-sm"></div>
               <div className="bg-white border border-zinc-100 p-4 shadow-sm"></div>
            </div>
         </div>
      </div>
      {/* Floating Badge */}
      <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-t border-zinc-800 flex gap-4 items-center animate-bounce-slow">
         <div className="p-2 border border-zinc-700 rounded-full">
            <ShieldCheck size={20} strokeWidth={1.5} className="text-white" />
         </div>
         <div>
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">{t.hero.compliance_check}</div>
            <div className="text-sm font-medium whitespace-pre-line leading-tight">{t.hero.kyc_verified}</div>
         </div>
      </div>
   </div>
);

export default AbstractInterface;
