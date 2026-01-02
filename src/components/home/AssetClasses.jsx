import { ArrowRight, Briefcase, Coins, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../ui/FadeIn';
import SectionHeading from '../ui/SectionHeading';

const AssetClasses = () => {
  const { t } = useTranslation();
  return (
    <div
      className='py-32 bg-white'
      id='assets'
    >
      <div className='container mx-auto px-6 md:px-12'>
        <SectionHeading
          title={t('assets_home.title')}
          subtitle={t('assets_home.subtitle')}
        />

        <div className='grid md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200'>
          {[
            {
              title: t('assets_home.c1_title'),
              icon: (
                <TrendingUp
                  size={40}
                  strokeWidth={1}
                />
              ),
              desc: t('assets_home.c1_desc'),
              meta: t('assets_home.c1_meta'),
              cta: t('assets_home.c1_cta'),
            },
            {
              title: t('assets_home.c2_title'),
              icon: (
                <Briefcase
                  size={40}
                  strokeWidth={1}
                />
              ),
              desc: t('assets_home.c2_desc'),
              meta: t('assets_home.c2_meta'),
              cta: t('assets_home.c2_cta'),
            },
            {
              title: t('assets_home.c3_title'),
              icon: (
                <Coins
                  size={40}
                  strokeWidth={1}
                />
              ),
              desc: t('assets_home.c3_desc'),
              meta: t('assets_home.c3_meta'),
              cta: t('assets_home.c3_cta'),
            },
          ].map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 150}
            >
              <div className='group bg-white p-12 h-full hover:bg-zinc-50 transition-colors flex flex-col justify-between min-h-[450px]'>
                <div>
                  <div className='mb-12 text-zinc-400 group-hover:text-black transition-colors'>
                    {item.icon}
                  </div>
                  <h3 className='text-3xl font-light mb-6 tracking-tight'>
                    {item.title}
                  </h3>
                  <p className='text-zinc-500 leading-relaxed mb-8 font-light'>
                    {item.desc}
                  </p>
                  <div className='inline-block px-3 py-1 border border-zinc-200 text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-8 bg-white'>
                    {item.meta}
                  </div>
                </div>
                <div className='flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-black w-fit pb-1 transition-all cursor-pointer'>
                  {item.cta} <ArrowRight size={14} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetClasses;
