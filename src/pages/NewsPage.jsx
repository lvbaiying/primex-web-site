import { ArrowRight, Megaphone, Newspaper } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../components/ui/FadeIn';

const NewsPage = () => {
  const { t } = useTranslation();
  const news = [
    {
      id: 1,
      title: t('news_page.items.n1_title'),
      cat: t('news_page.items.n1_cat'),
      date: 'Oct 22, 2024',
      desc: t('news_page.items.n1_desc'),
      featured: true,
    },
    {
      id: 2,
      title: t('news_page.items.n2_title'),
      cat: t('news_page.items.n2_cat'),
      date: 'Oct 15, 2024',
      desc: t('news_page.items.n2_desc'),
      featured: false,
    },
    {
      id: 3,
      title: t('news_page.items.n3_title'),
      cat: t('news_page.items.n3_cat'),
      date: 'Oct 10, 2024',
      desc: t('news_page.items.n3_desc'),
      featured: false,
    },
    {
      id: 4,
      title: t('news_page.items.n4_title'),
      cat: t('news_page.items.n4_cat'),
      date: 'Sep 28, 2024',
      desc: t('news_page.items.n4_desc'),
      featured: false,
    },
    {
      id: 5,
      title: t('news_page.items.n5_title'),
      cat: t('news_page.items.n5_cat'),
      date: 'Sep 15, 2024',
      desc: t('news_page.items.n5_desc'),
      featured: false,
    },
  ];
  const featured = news[0];
  const others = news.slice(1);
  return (
    <div className='pt-32 pb-20 bg-white min-h-screen'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='mb-20 pb-8 border-b border-black'>
          <h1 className='text-5xl md:text-7xl font-light tracking-tighter mb-4'>
            {t('news_page.title')}
          </h1>
          <p className='text-zinc-500'>{t('news_page.subtitle')}</p>
        </div>
        <FadeIn>
          <div className='grid md:grid-cols-2 gap-12 mb-24 cursor-pointer group'>
            <div className='aspect-video bg-zinc-100 border border-zinc-200 relative overflow-hidden'>
              <div className='absolute inset-0 bg-zinc-200 opacity-0 group-hover:opacity-10 transition-opacity'></div>
              <div className='absolute bottom-6 left-6 p-3 bg-white border border-zinc-100 text-xs font-bold uppercase tracking-wider'>
                {featured.cat}
              </div>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-300'>
                <Newspaper
                  size={64}
                  strokeWidth={0.5}
                />
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='text-sm text-zinc-400 mb-4'>{featured.date}</div>
              <h2 className='text-3xl md:text-4xl font-light leading-tight mb-6 group-hover:underline decoration-1 underline-offset-4'>
                {featured.title}
              </h2>
              <p className='text-zinc-500 leading-relaxed mb-8'>
                {featured.desc}
              </p>
              <div className='flex items-center gap-2 text-sm font-bold uppercase tracking-widest'>
                {t('news_page.read_article')} <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </FadeIn>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-32'>
          {others.map((item) => (
            <FadeIn
              key={item.id}
              delay={100}
            >
              <div className='group cursor-pointer flex flex-col h-full'>
                <div className='aspect-[3/2] bg-zinc-50 border border-zinc-200 mb-6 relative overflow-hidden'>
                  <div className='absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-white px-2 py-1 border border-zinc-100'>
                    {item.cat}
                  </div>
                </div>
                <div className='text-xs text-zinc-400 mb-3'>{item.date}</div>
                <h3 className='text-xl font-bold mb-3 leading-snug group-hover:text-zinc-600 transition-colors'>
                  {item.title}
                </h3>
                <p className='text-sm text-zinc-500 leading-relaxed line-clamp-3 mb-4 flex-grow'>
                  {item.desc}
                </p>
                <div className='text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-auto'>
                  {t('news_page.read')} <ArrowRight size={12} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className='bg-zinc-900 text-white p-12 text-center rounded-lg'>
          <Megaphone
            size={40}
            strokeWidth={1}
            className='mx-auto mb-6'
          />
          <h3 className='text-3xl font-light mb-4'>
            {t('news_page.stay_updated')}
          </h3>
          <p className='text-zinc-400 mb-8'>{t('news_page.subscribe_desc')}</p>
          <div className='flex max-w-md mx-auto'>
            <input
              type='email'
              placeholder={t('news_page.email_placeholder')}
              className='flex-grow bg-zinc-800 border-none px-4 py-3 text-white focus:ring-1 focus:ring-white'
            />
            <button className='bg-white text-black px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 transition-colors'>
              {t('news_page.subscribe_btn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
