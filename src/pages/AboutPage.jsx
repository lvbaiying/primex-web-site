import { Award, Eye, Mail, Scale, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FadeIn from '../components/ui/FadeIn';
import SectionHeading from '../components/ui/SectionHeading';

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className='pt-32 pb-20 bg-white min-h-screen'>
      <div className='container mx-auto px-6 md:px-12'>
        <FadeIn>
          <div className='max-w-4xl mx-auto text-center mb-32'>
            <div className='inline-block mb-6'>
              <Award
                size={48}
                strokeWidth={1}
              />
            </div>
            <h1 className='text-5xl md:text-7xl font-light tracking-tighter mb-8'>
              {t('about.mission_title')}
            </h1>
            <p className='text-2xl md:text-3xl font-serif italic text-zinc-500 leading-relaxed'>
              "{t('about.mission_desc')}"
            </p>
          </div>
        </FadeIn>
        <div className='mb-32'>
          <SectionHeading
            title={t('about.values_title')}
            subtitle={t('about.values_subtitle')}
            align='center'
          />
          <div className='grid md:grid-cols-3 gap-12 mt-16'>
            {[
              {
                title: t('about.val1'),
                icon: (
                  <Eye
                    size={32}
                    strokeWidth={1}
                  />
                ),
                desc: t('about.val1_desc'),
              },
              {
                title: t('about.val2'),
                icon: (
                  <Scale
                    size={32}
                    strokeWidth={1}
                  />
                ),
                desc: t('about.val2_desc'),
              },
              {
                title: t('about.val3'),
                icon: (
                  <ShieldCheck
                    size={32}
                    strokeWidth={1}
                  />
                ),
                desc: t('about.val3_desc'),
              },
            ].map((val, i) => (
              <FadeIn
                key={i}
                delay={i * 150}
              >
                <div className='text-center group p-8 hover:bg-zinc-50 transition-colors rounded-lg'>
                  <div className='w-16 h-16 mx-auto bg-white border border-zinc-200 rounded-full flex items-center justify-center mb-6 group-hover:border-black transition-colors'>
                    {val.icon}
                  </div>
                  <h4 className='text-xl font-bold mb-3'>{val.title}</h4>
                  <p className='text-zinc-500 leading-relaxed text-sm'>
                    {val.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div className='mb-32 py-12 border-y border-zinc-100'>
          <SectionHeading
            title={t('about.team_title')}
            subtitle='Where Wall Street meets Web3.'
          />
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <p className='text-lg text-zinc-600 leading-relaxed mb-8 font-light'>
                {t('about_page.team_desc')}
              </p>
              <div className='flex flex-wrap gap-3'>
                {[
                  t('about_page.tags.banking'),
                  t('about_page.tags.law'),
                  t('about_page.tags.systems'),
                  t('about_page.tags.crypto'),
                ].map((tag, i) => (
                  <span
                    key={i}
                    className='px-4 py-2 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-wider bg-zinc-50'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className='grid grid-cols-2 gap-px bg-zinc-200 border border-zinc-200'>
              {[
                { val: '15+', label: t('about_page.stats.exp') },
                { val: '$500M+', label: t('about_page.stats.pipeline') },
                { val: '20+', label: t('about_page.stats.partners') },
                { val: '100%', label: t('about_page.stats.compliance') },
              ].map((stat, i) => (
                <div
                  key={i}
                  className='bg-white p-8 text-center hover:bg-zinc-50 transition-colors'
                >
                  <div className='text-4xl font-light mb-2'>{stat.val}</div>
                  <div className='text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='mb-32 text-center'>
          <p className='text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12'>
            {t('about_page.backed_by')}
          </p>
          <div className='flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all'>
            {[
              'Sequoia',
              'a16z crypto',
              'Pantera',
              'Dragonfly',
              'Coinbase Ventures',
            ].map((inv, i) => (
              <div
                key={i}
                className='text-2xl font-serif font-bold text-zinc-800'
              >
                {inv}
              </div>
            ))}
          </div>
        </div>
        <div className='mb-32'>
          <SectionHeading
            title={t('about.roadmap_title')}
            subtitle='Engineering the future.'
          />
          <div className='space-y-0'>
            {[
              {
                phase: '01',
                time: t('about_page.phases.p1_time'),
                caps: [
                  t('about_page.phases.p1_c1'),
                  t('about_page.phases.p1_c2'),
                ],
              },
              {
                phase: '02',
                time: t('about_page.phases.p2_time'),
                caps: [
                  t('about_page.phases.p2_c1'),
                  t('about_page.phases.p2_c2'),
                ],
              },
              {
                phase: '03',
                time: t('about_page.phases.p3_time'),
                caps: [
                  t('about_page.phases.p3_c1'),
                  t('about_page.phases.p3_c2'),
                ],
              },
              {
                phase: '04',
                time: t('about_page.phases.p4_time'),
                caps: [
                  t('about_page.phases.p4_c1'),
                  t('about_page.phases.p4_c2'),
                ],
              },
            ].map((item, i) => (
              <FadeIn
                key={i}
                delay={i * 100}
              >
                <div className='group flex flex-col md:flex-row border-t border-zinc-100 py-10 hover:bg-zinc-50 transition-colors px-4 -mx-4'>
                  <div className='md:w-1/4 mb-4 md:mb-0'>
                    <div className='text-4xl font-light text-zinc-300 group-hover:text-black transition-colors'>
                      {item.phase}
                    </div>
                  </div>
                  <div className='md:w-1/4 mb-4 md:mb-0'>
                    <div className='text-lg font-bold'>{item.time}</div>
                  </div>
                  <div className='md:w-1/2'>
                    <div className='flex flex-wrap gap-8'>
                      {item.caps.map((cap, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-3 text-zinc-500'
                        >
                          <div className='w-1.5 h-1.5 bg-zinc-300 group-hover:bg-black transition-colors'></div>
                          <span className='font-light'>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <div
          className='bg-black text-white p-16 md:p-32 text-center'
          id='contact'
        >
          <Mail
            size={48}
            strokeWidth={1}
            className='mx-auto mb-8'
          />
          <h2 className='text-4xl md:text-6xl font-light mb-8'>
            {t('about.contact_title')}
          </h2>
          <p className='text-zinc-400 mb-12 text-lg font-light max-w-xl mx-auto'>
            {t('about_page.contact_text')}
          </p>
          <div className='flex flex-col md:flex-row justify-center gap-12 text-left max-w-2xl mx-auto'>
            <div className='flex-1 border-l border-zinc-800 pl-8'>
              <div className='text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2'>
                {t('about_page.headquarters')}
              </div>
              <div className='text-lg'>1 Raffles Place, Singapore</div>
            </div>
            <div className='flex-1 border-l border-zinc-800 pl-8'>
              <div className='text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2'>
                {t('about_page.email')}
              </div>
              <div className='text-lg'>hello@primexglobal.io</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
