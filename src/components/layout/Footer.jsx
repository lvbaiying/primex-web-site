import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    {
      title: t('footer.prod'),
      items: [
        t('footer.items.prod.xaum'),
        t('footer.items.prod.stbt'),
        t('footer.items.prod.equity'),
        t('footer.items.prod.private'),
      ],
    },
    {
      title: t('footer.trans'),
      items: [
        t('footer.items.trans.reports'),
        t('footer.items.trans.por'),
        t('footer.items.trans.panel'),
        t('footer.items.trans.audits'),
      ],
    },
    {
      title: t('footer.comp'),
      items: [
        t('footer.items.comp.about'),
        t('footer.items.comp.careers'),
        t('footer.items.comp.news'),
        t('footer.items.comp.contact'),
      ],
    },
    {
      title: t('footer.res'),
      items: [
        t('footer.items.res.docs'),
        t('footer.items.res.api'),
        t('footer.items.res.help'),
        t('footer.items.res.blog'),
      ],
    },
    {
      title: t('footer.legal'),
      items: [
        t('footer.items.legal.terms'),
        t('footer.items.legal.privacy'),
        t('footer.items.legal.risk'),
        t('footer.items.legal.licenses'),
      ],
    },
  ];

  return (
    <footer className='bg-white text-black py-24 border-t border-zinc-200'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-12 mb-20'>
          {links.map((section) => (
            <div key={section.title}>
              <h5 className='font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-zinc-400'>
                {section.title}
              </h5>
              <ul className='space-y-4 text-sm font-medium'>
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href='#'
                      className='hover:text-zinc-500 transition-colors'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='pt-8 border-t border-zinc-100 text-xs text-zinc-400 flex flex-col md:flex-row justify-between items-center gap-4'>
          <span>{t('footer.copyright')}</span>
          <div className='flex gap-8 font-medium text-black'>
            <a href='#'>Twitter</a>
            <a href='#'>LinkedIn</a>
            <a href='#'>Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
