import { useTranslation } from 'react-i18next';

const AssetTicker = () => {
  const { t } = useTranslation();
  const assets = [
    {
      name: 'US T-Bill',
      price: '$102.45',
      platform: 'DIGIFT',
      chain: 'Polygon',
      change: '+0.4%',
    },
    {
      name: 'Tesla (TSLA)',
      price: '$245.30',
      platform: 'Kraken',
      chain: 'Ethereum',
      change: '+1.2%',
    },
    {
      name: 'SpaceX',
      price: '$85.00',
      platform: 'DIGIFT',
      chain: 'BNB',
      change: '0%',
    },
    {
      name: 'Apple (AAPL)',
      price: '$182.10',
      platform: 'Kraken',
      chain: 'Optimism',
      change: '-0.5%',
    },
    {
      name: 'Gold (PAXG)',
      price: '$2034.10',
      platform: 'Paxos',
      chain: 'Ethereum',
      change: '+0.1%',
    },
  ];

  return (
    <div className='w-full bg-white border border-zinc-200 shadow-xl rounded-lg p-6 max-w-sm ml-auto relative overflow-hidden'>
      <div className='flex justify-between items-center mb-6 border-b border-zinc-100 pb-4'>
        <span className='text-xs font-bold uppercase tracking-widest text-zinc-400'>
          {t('hero.ticker_title')}
        </span>
        <div className='flex items-center gap-2'>
          <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
          <span className='text-[10px] font-bold text-green-600 uppercase'>
            Live
          </span>
        </div>
      </div>
      <div className='space-y-4 max-h-[300px] overflow-hidden relative'>
        <div className='absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-10'></div>
        <div className='animate-scroll-vertical space-y-4'>
          {[...assets, ...assets].map((asset, i) => (
            <div
              key={i}
              className='flex justify-between items-center group'
            >
              <div>
                <div className='font-bold text-sm text-black'>{asset.name}</div>
                <div className='flex gap-2 mt-1'>
                  <span className='text-[10px] bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-500'>
                    {asset.platform}
                  </span>
                  <span className='text-[10px] border border-zinc-200 px-1.5 py-0.5 rounded text-zinc-400'>
                    {asset.chain}
                  </span>
                </div>
              </div>
              <div className='text-right'>
                <div className='font-mono text-sm'>{asset.price}</div>
                <div
                  className={`text-[10px] font-bold ${
                    asset.change.startsWith('+')
                      ? 'text-green-600'
                      : 'text-zinc-400'
                  }`}
                >
                  {asset.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
         @keyframes scrollVertical { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
         .animate-scroll-vertical { animation: scrollVertical 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default AssetTicker;
