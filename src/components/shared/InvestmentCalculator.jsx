
import { Calculator } from 'lucide-react';
import { useState } from 'react';

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const apy = 5.2;
  const earnings = (amount * apy) / 100;

  return (
    <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <Calculator size={20} />
        <span className="text-xs font-bold uppercase tracking-widest">Yield Calculator</span>
      </div>
      <div className="mb-8">
        <label className="block text-sm text-zinc-500 mb-2">Investment Amount (USDT)</label>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full bg-white border border-zinc-300 p-4 text-2xl font-mono focus:outline-none focus:border-black transition-colors"
        />
      </div>
      <div className="flex justify-between items-end border-t border-zinc-200 pt-6">
        <div>
          <div className="text-sm text-zinc-500 mb-1">Est. Annual Return</div>
          <div className="text-3xl font-mono font-bold text-green-600">+${earnings.toLocaleString()}</div>
        </div>
        <div className="text-right">
           <div className="text-sm text-zinc-500 mb-1">APY</div>
           <div className="text-xl font-bold">{apy}%</div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
