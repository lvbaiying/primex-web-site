const Footer = ({ t }) => (
  <footer className='bg-black text-white py-24 border-t border-zinc-800'>
    <div className='container mx-auto px-6 md:px-12'>
      <div className='grid md:grid-cols-4 gap-12'>
        <div className='col-span-1 md:col-span-2'>
          <div className='text-3xl font-bold mb-8 tracking-tighter'>PrimeX</div>
          <p className='text-zinc-500 max-w-sm mb-8 text-sm leading-relaxed whitespace-pre-line'>
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <h5 className='text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8'>
            {t.footer.connect}
          </h5>
          <ul className='space-y-4 text-sm text-zinc-400'>
            <li>
              <a
                href='#'
                className='hover:text-white transition-colors'
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition-colors'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition-colors'
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8'>
            {t.footer.legal}
          </h5>
          <ul className='space-y-4 text-sm text-zinc-400'>
            <li>
              <a
                href='#'
                className='hover:text-white transition-colors'
              >
                {t.footer.privacy}
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-white transition-colors'
              >
                {t.footer.terms}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-24 pt-8 border-t border-zinc-900 text-zinc-600 text-xs flex justify-between items-center'>
        <span>{t.footer.copyright}</span>
        <div className='flex gap-4'>
          <span>{t.footer.locations.singapore}</span>
          <span>{t.footer.locations.newyork}</span>
          <span>{t.footer.locations.london}</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
