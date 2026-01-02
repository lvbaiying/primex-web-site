import { ArrowRight } from 'lucide-react';

const ProductCard = ({ asset }) => (
  <div className='group bg-white border border-zinc-200 hover:border-black transition-all duration-300 p-0 flex flex-col h-full relative hover:-translate-y-1 hover:shadow-xl'>
    <div className='p-8 flex-grow'>
      <div className='flex justify-between items-start mb-6'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center text-black'>
            {asset.icon}
          </div>
          <div>
            <h3 className='text-xl font-bold'>{asset.name}</h3>
            <div className='text-xs text-zinc-500 uppercase tracking-wider'>
              {asset.ticker}
            </div>
          </div>
        </div>
        {asset.hot && (
          <span className='bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider'>
            Hot
          </span>
        )}
      </div>

      <p className='text-sm text-zinc-500 leading-relaxed mb-8 h-10 line-clamp-2'>
        {asset.desc}
      </p>

      <div className='grid grid-cols-2 gap-y-4 gap-x-8 text-sm'>
        <div>
          <div className='text-zinc-400 text-[10px] uppercase tracking-widest mb-1'>
            APY
          </div>
          <div className='font-mono font-bold text-green-600'>{asset.apy}</div>
        </div>
        <div>
          <div className='text-zinc-400 text-[10px] uppercase tracking-widest mb-1'>
            TVL
          </div>
          <div className='font-mono'>{asset.tvl}</div>
        </div>
        <div>
          <div className='text-zinc-400 text-[10px] uppercase tracking-widest mb-1'>
            Price
          </div>
          <div className='font-mono'>{asset.price}</div>
        </div>
        <div>
          <div className='text-zinc-400 text-[10px] uppercase tracking-widest mb-1'>
            Platform
          </div>
          <div className='flex items-center gap-1 font-medium'>
            {asset.platform}
          </div>
        </div>
      </div>
    </div>

    <div className='p-4 border-t border-zinc-100 bg-zinc-50/50 flex justify-between items-center group-hover:bg-black group-hover:text-white transition-colors'>
      <span className='text-xs font-bold uppercase tracking-widest'>
        Invest Now
      </span>
      <ArrowRight size={16} />
    </div>
  </div>
);

export default ProductCard;
