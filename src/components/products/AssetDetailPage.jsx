import {
  ArrowLeft,
  ArrowRight,
  Box,
  Lock,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getAssets } from '../../data/assets';
import Button from '../ui/Button';

const AssetDetailPage = ({ asset, onBack }) => {
  const { t } = useTranslation();
  const localizedAsset = getAssets(t).find((a) => a.id === asset.id) || asset;
  const d = localizedAsset.details || {};

  if (!d.summary)
    return (
      <div className='pt-32 px-12'>
        {t('asset_detail_view.unavailable')}
        <button
          onClick={onBack}
          className='underline ml-2'
        >
          {t('asset_detail_view.back')}
        </button>
      </div>
    );

  return (
    <div className='pt-24 pb-20 bg-white min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500'>
      {/* D1: Hero Section */}
      <div className='bg-zinc-50 border-b border-zinc-200 pb-16 pt-8'>
        <div className='container mx-auto px-6 md:px-12'>
          <button
            onClick={onBack}
            className='flex items-center gap-2 text-zinc-400 hover:text-black mb-8 text-xs uppercase tracking-widest font-bold transition-colors'
          >
            <ArrowLeft size={14} /> {t('asset_detail_view.back_to_market')}
          </button>

          <div className='grid lg:grid-cols-3 gap-12'>
            <div className='lg:col-span-2'>
              <div className='flex gap-4 mb-6'>
                {d.regulatorTags?.map((tag, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-white border border-zinc-200 text-[10px] font-bold uppercase tracking-wider text-zinc-500'
                  >
                    {tag}
                  </span>
                ))}
                <span className='px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider'>
                  {t('asset_detail_view.live')}
                </span>
              </div>
              <h1 className='text-5xl font-light tracking-tighter mb-2'>
                {localizedAsset.name}
              </h1>
              <div className='text-xl text-zinc-400 font-mono mb-8'>
                {d.tokenSpecs?.find(
                  (s) => s.label === 'Ticker' || s.label === '代碼'
                )?.val || localizedAsset.ticker}
              </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'>
                <div>
                  <div className='text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2'>
                    {t('asset_detail_view.offering_size')}
                  </div>
                  <div className='text-2xl font-light'>{d.offeringSize}</div>
                </div>
                <div>
                  <div className='text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2'>
                    {t('asset_detail_view.token_price')}
                  </div>
                  <div className='text-2xl font-light'>
                    {
                      d.tokenSpecs?.find(
                        (s) =>
                          s.label === 'Token Price' || s.label === '代幣價格'
                      )?.val
                    }
                  </div>
                </div>
                <div>
                  <div className='text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2'>
                    {t('asset_detail_view.min_invest')}
                  </div>
                  <div className='text-2xl font-light'>{d.minInvestment}</div>
                </div>
                <div>
                  <div className='text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2'>
                    {t('asset_detail_view.closing')}
                  </div>
                  <div className='text-2xl font-light'>{d.initialClosing}</div>
                </div>
              </div>

              <div className='flex gap-4'>
                <Button onClick={() => {}}>
                  {t('asset_detail_view.get_memo')}
                </Button>
                <Button
                  variant='secondary'
                  onClick={() => {}}
                >
                  {t('asset_detail_view.sub_docs')}
                </Button>
              </div>
            </div>

            {/* Right Side: Quick Contact */}
            <div className='hidden lg:flex flex-col justify-end items-start border-l border-zinc-200 pl-12'>
              <h4 className='font-bold text-lg mb-4'>
                {t('asset_detail_view.interested')}
              </h4>
              <p className='text-sm text-zinc-500 mb-6'>
                {t('asset_detail_view.contact_sales')}
              </p>
              <Button
                variant='outline'
                className='w-full'
              >
                {t('asset_detail_view.contact_btn')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-6 md:px-12 py-16'>
        <div className='grid lg:grid-cols-3 gap-16'>
          {/* Main Content Column */}
          <div className='lg:col-span-2 space-y-20'>
            {/* D2: Executive Summary */}
            <section>
              <h3 className='text-2xl font-light mb-8 border-b border-black pb-4'>
                {t('asset_detail_view.exec_summary')}
              </h3>
              <div className='space-y-6 text-zinc-600 leading-relaxed text-lg font-light'>
                {d.summary?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* D3: Underlying Asset Profile */}
            <section>
              <h3 className='text-2xl font-light mb-8 border-b border-black pb-4'>
                {t('asset_detail_view.asset_profile')}
              </h3>
              <div className='grid md:grid-cols-3 gap-6'>
                <div className='p-6 bg-zinc-50 border border-zinc-100'>
                  <div className='mb-4 text-zinc-400'>
                    <Box size={24} />
                  </div>
                  <h4 className='font-bold text-sm uppercase tracking-wider mb-2'>
                    {t('asset_detail_view.primary_asset')}
                  </h4>
                  <p className='text-sm text-zinc-600'>{d.primaryAsset}</p>
                </div>
                <div className='p-6 bg-zinc-50 border border-zinc-100'>
                  <div className='mb-4 text-zinc-400'>
                    <Search size={24} />
                  </div>
                  <h4 className='font-bold text-sm uppercase tracking-wider mb-2'>
                    {t('asset_detail_view.focus')}
                  </h4>
                  <p className='text-sm text-zinc-600'>{d.investmentFocus}</p>
                </div>
                <div className='p-6 bg-zinc-50 border border-zinc-100'>
                  <div className='mb-4 text-zinc-400'>
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className='font-bold text-sm uppercase tracking-wider mb-2'>
                    {t('asset_detail_view.status')}
                  </h4>
                  <p className='text-sm text-zinc-600'>{d.portfolioStatus}</p>
                </div>
              </div>
            </section>

            {/* D4: Structure */}
            <section>
              <h3 className='text-2xl font-light mb-8 border-b border-black pb-4'>
                {t('asset_detail_view.structure')}
              </h3>
              <div className='bg-white border border-zinc-200 p-8 mb-8'>
                {/* Simplified Structure Diagram */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-center'>
                  <div className='p-4 border border-black bg-black text-white rounded w-40'>
                    {t('asset_detail_view.investors')}
                  </div>
                  <ArrowRight className='rotate-90 md:rotate-0 text-zinc-300' />
                  <div className='p-4 border border-black rounded w-40 bg-zinc-50'>
                    <div className='font-bold text-sm'>
                      {' '}
                      {t('asset_detail_view.part_shares')}
                    </div>
                    <div className='text-[10px] text-zinc-500'>
                      {t('asset_detail_view.spc_label')}
                    </div>
                  </div>
                  <ArrowRight className='rotate-90 md:rotate-0 text-zinc-300' />
                  <div className='p-4 border border-zinc-300 rounded w-40 bg-white text-zinc-500 border-dashed'>
                    <div className='font-bold text-sm'>
                      {' '}
                      {t('asset_detail_view.direct_equity')}
                    </div>
                    <div className='text-[10px]'>
                      {t('asset_detail_view.underlying_label')}
                    </div>
                  </div>
                </div>
              </div>
              <ul className='grid md:grid-cols-2 gap-4'>
                {d.structurePoints?.map((pt, i) => (
                  <li
                    key={i}
                    className='flex gap-3 text-sm text-zinc-600'
                  >
                    <div className='w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0'></div>
                    {pt}
                  </li>
                ))}
              </ul>
            </section>

            {/* D5: Token Details */}
            <section>
              <h3 className='text-2xl font-light mb-8 border-b border-black pb-4'>
                {t('asset_detail_view.token_details')}
              </h3>
              <div className='border border-zinc-200'>
                {d.tokenSpecs?.map((spec, i) => (
                  <div
                    key={i}
                    className='flex justify-between p-4 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors'
                  >
                    <span className='text-sm text-zinc-500 uppercase tracking-wide'>
                      {spec.label}
                    </span>
                    <span className='text-sm font-medium text-black'>
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* D6: Fees */}
            <section>
              <h3 className='text-2xl font-light mb-8 border-b border-black pb-4'>
                {t('asset_detail_view.fee_structure')}
              </h3>
              <div className='grid md:grid-cols-2 gap-8'>
                <div className='border border-zinc-200 p-6'>
                  <h4 className='font-bold mb-4 text-sm uppercase tracking-widest text-zinc-400'>
                    {t('asset_detail_view.token_level')}
                  </h4>
                  {d.fees?.tokenLevel?.map((f, i) => (
                    <div
                      key={i}
                      className='flex justify-between mb-2 text-sm'
                    >
                      <span className='text-zinc-600'>{f.label}</span>
                      <span className='font-mono font-bold'>{f.val}</span>
                    </div>
                  ))}
                </div>
                <div className='border border-zinc-200 p-6 bg-zinc-50'>
                  <h4 className='font-bold mb-4 text-sm uppercase tracking-widest text-zinc-400'>
                    {t('asset_detail_view.spc_level')}
                  </h4>
                  {d.fees?.spcLevel?.map((f, i) => (
                    <div
                      key={i}
                      className='flex justify-between mb-2 text-sm'
                    >
                      <span className='text-zinc-600'>{f.label}</span>
                      <span className='font-mono font-bold'>{f.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1 space-y-12'>
            {/* D7: Key Participants */}
            <div className='bg-zinc-50 p-8 border border-zinc-200'>
              <h4 className='font-bold mb-6 text-sm uppercase tracking-widest border-b border-zinc-200 pb-2'>
                {t('asset_detail_view.participants')}
              </h4>
              <div className='space-y-6'>
                {d.participants?.map((p, i) => (
                  <div
                    key={i}
                    className='flex items-center gap-4'
                  >
                    <div className='w-10 h-10 bg-white border border-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-400'>
                      {p.logo}
                    </div>
                    <div>
                      <div className='text-xs text-zinc-400 uppercase tracking-wider'>
                        {p.role}
                      </div>
                      <div className='font-medium'>{p.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* D9: Timeline */}
            <div>
              <h4 className='font-bold mb-6 text-sm uppercase tracking-widest border-b border-zinc-200 pb-2'>
                {t('asset_detail_view.onboarding')}
              </h4>
              <div className='space-y-0 border-l border-zinc-200 ml-2'>
                {Object.values(
                  t('asset_detail_view.onboarding_steps', {
                    returnObjects: true,
                  })
                ).map((step, i) => (
                  <div
                    key={i}
                    className='relative pl-8 pb-8 last:pb-0'
                  >
                    <div className='absolute -left-1.5 top-1 w-3 h-3 bg-white border border-black rounded-full'></div>
                    <div className='text-sm font-medium'>{step}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* D10: Documents */}
            <div>
              <h4 className='font-bold mb-6 text-sm uppercase tracking-widest border-b border-zinc-200 pb-2'>
                {t('asset_detail_view.data_room')}
              </h4>
              <div className='space-y-2'>
                {d.documents?.map((doc, i) => (
                  <button
                    key={i}
                    className='w-full flex items-center justify-between p-3 border border-zinc-200 hover:bg-black hover:text-white transition-colors text-sm text-left'
                  >
                    <span className='flex items-center gap-2'>
                      <Lock size={14} /> {doc}
                    </span>
                    <span className='text-[10px] uppercase font-bold tracking-wider'>
                      {t('asset_detail_view.request')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* D11: Disclaimer */}
      <div className='border-t border-zinc-100 bg-zinc-50 py-12 mt-24'>
        <div className='container mx-auto px-6 md:px-12 text-[10px] text-zinc-400 leading-relaxed uppercase tracking-wide'>
          <p className='mb-4 font-bold'>
            {' '}
            {t('asset_detail_view.disclaimer_title')} — {localizedAsset.name}
          </p>
          <p>{t('asset_detail_view.disclaimer_text')}</p>
        </div>
      </div>
    </div>
  );
};

export default AssetDetailPage;
