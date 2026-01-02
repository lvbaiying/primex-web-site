import {
   Briefcase,
   ChevronDown,
   CircleDollarSign,
   Coins,
   Landmark,
   TrendingUp,
   Zap,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InvestmentCalculator from '../components/shared/InvestmentCalculator';
import ProductCard from '../components/shared/ProductCard';
import FadeIn from '../components/ui/FadeIn';
import SectionHeading from '../components/ui/SectionHeading';

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useTranslation();

  const assets = [
    {
      id: 1,
      name: t('products_page.assets.tbill_name'),
      ticker: 'tBILL',
      type: 'fixed',
      apy: '5.2%',
      tvl: '$1.2B',
      price: '$102.40',
      platform: 'DIGIFT',
      desc: t('products_page.assets.tbill_desc'),
      icon: <Landmark size={20} />,
      hot: true,
    },
    {
      id: 2,
      name: t('products_page.assets.spacex_name'),
      ticker: 'SPX',
      type: 'private',
      apy: 'N/A',
      tvl: '$450M',
      price: '$98.50',
      platform: 'Kraken',
      desc: t('products_page.assets.spacex_desc'),
      icon: <Briefcase size={20} />,
      hot: true,
    },
    {
      id: 3,
      name: t('products_page.assets.tesla_name'),
      ticker: 'TSLA',
      type: 'public',
      apy: '0.0%',
      tvl: '$120M',
      price: '$245.20',
      platform: 'Kraken',
      desc: t('products_page.assets.tesla_desc'),
      icon: <TrendingUp size={20} />,
      hot: false,
    },
    {
      id: 4,
      name: t('products_page.assets.green_name'),
      ticker: 'GRN',
      type: 'fixed',
      apy: '4.8%',
      tvl: '$85M',
      price: '$10.05',
      platform: 'DIGIFT',
      desc: t('products_page.assets.green_desc'),
      icon: <Zap size={20} />,
      hot: false,
    },
    {
      id: 5,
      name: t('products_page.assets.gold_name'),
      ticker: 'PAXG',
      type: 'fixed',
      apy: '0.0%',
      tvl: '$600M',
      price: '$2034.00',
      platform: 'Paxos',
      desc: t('products_page.assets.gold_desc'),
      icon: <Coins size={20} />,
      hot: false,
    },
    {
      id: 6,
      name: t('products_page.assets.credit_name'),
      ticker: 'PCF',
      type: 'private',
      apy: '11.5%',
      tvl: '$200M',
      price: '$1.02',
      platform: 'DIGIFT',
      desc: t('products_page.assets.credit_desc'),
      icon: <CircleDollarSign size={20} />,
      hot: true,
    },
  ];

  const filteredAssets =
    activeFilter === 'all'
      ? assets
      : assets.filter((a) => a.type === activeFilter);

  return (
    <div className='pt-32 pb-20 bg-white min-h-screen'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-20 pb-8 border-b border-black'>
          <div>
            <h1 className='text-5xl md:text-7xl font-light tracking-tighter mb-4 whitespace-pre-line'>
              {t('products_page.title')}
            </h1>
            <p className='text-zinc-500 max-w-md'>
              {t('products_page.subtitle')}
            </p>
          </div>
          <div className='mt-8 md:mt-0 w-full md:w-auto'>
            <InvestmentCalculator />
          </div>
        </div>
        <div className='flex flex-wrap gap-4 mb-12'>
          {[
            { id: 'all', label: t('products_page.filters.all') },
            { id: 'public', label: t('products_page.filters.public') },
            { id: 'private', label: t('products_page.filters.private') },
            { id: 'fixed', label: t('products_page.filters.fixed') },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-all ${
                activeFilter === filter.id
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-zinc-500 border-zinc-200 hover:border-black hover:text-black'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32'>
          {filteredAssets.map((asset) => (
            <FadeIn key={asset.id}>
              <ProductCard asset={asset} />
            </FadeIn>
          ))}
        </div>
        <SectionHeading
          title={t('products_page.how_invest')}
          subtitle={t('products_page.how_invest_sub')}
        />
        <div className='grid md:grid-cols-4 gap-8 mb-32'>
          {[
            {
              title: t('products_page.steps.kyc_title'),
              desc: t('products_page.steps.kyc_desc'),
            },
            {
              title: t('products_page.steps.deposit_title'),
              desc: t('products_page.steps.deposit_desc'),
            },
            {
              title: t('products_page.steps.select_title'),
              desc: t('products_page.steps.select_desc'),
            },
            {
              title: t('products_page.steps.mint_title'),
              desc: t('products_page.steps.mint_desc'),
            },
          ].map((step, i) => (
            <div
              key={i}
              className='relative pt-8 border-t border-black'
            >
              <span className='absolute -top-3 left-0 bg-white pr-4 text-xs font-bold text-zinc-400'>
                0{i + 1}
              </span>
              <h4 className='text-xl font-bold mb-2'>{step.title}</h4>
              <p className='text-sm text-zinc-500'>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className='max-w-3xl mx-auto'>
          <h3 className='text-2xl font-light mb-8 text-center'>
            {t('products_page.faq_title')}
          </h3>
          <div className='space-y-4'>
            {[
              { q: t('products_page.faqs.q1'), a: t('products_page.faqs.a1') },
              { q: t('products_page.faqs.q2'), a: t('products_page.faqs.a2') },
              { q: t('products_page.faqs.q3'), a: t('products_page.faqs.a3') },
            ].map((faq, i) => (
              <div
                key={i}
                className='border-b border-zinc-200 pb-4'
              >
                <div className='flex justify-between items-center py-2 cursor-pointer group'>
                  <h4 className='font-medium group-hover:text-zinc-600'>
                    {faq.q}
                  </h4>
                  <ChevronDown
                    size={16}
                    className='text-zinc-400'
                  />
                </div>
                <p className='text-sm text-zinc-500 mt-2'>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
