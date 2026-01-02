import { useTranslation } from 'react-i18next';
import useCountUp from '../../hooks/useCountUp';

const StatItem = ({ stat }) => {
  const { count, ref } = useCountUp(stat.val);
  return (
    <div
      className='text-left group'
      ref={ref}
    >
      <div className='text-5xl md:text-6xl font-light text-black mb-4 tracking-tighter font-mono'>
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className='h-px w-8 bg-zinc-300 mb-4 group-hover:w-full group-hover:bg-black transition-all duration-700'></div>
      <div className='text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]'>
        {stat.label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    {
      val: t('stats.s1_val'),
      prefix: t('stats.s1_pre'),
      suffix: t('stats.s1_suf'),
      label: t('stats.s1_label'),
    },
    {
      val: t('stats.s2_val'),
      prefix: t('stats.s2_pre'),
      suffix: t('stats.s2_suf'),
      label: t('stats.s2_label'),
    },
    {
      val: t('stats.s3_val'),
      prefix: t('stats.s3_pre'),
      suffix: t('stats.s3_suf'),
      label: t('stats.s3_label'),
    },
    {
      val: t('stats.s4_val'),
      prefix: t('stats.s4_pre'),
      suffix: t('stats.s4_suf'),
      label: t('stats.s4_label'),
    },
  ];

  return (
    <div className='py-24 border-b border-zinc-100 bg-zinc-50/50'>
      <div className='container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12'>
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            stat={stat}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
