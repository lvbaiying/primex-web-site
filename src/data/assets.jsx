import {
  Brain,
  Briefcase,
  CircleDollarSign,
  Coins,
  Landmark,
  TrendingUp,
  Zap,
} from 'lucide-react';

const createAssetDetail = (t, key) => ({
  assetType: t(
    'products_page.filters.' +
      (key === 'pxai' || key === 'spx'
        ? 'private'
        : key === 'tsla'
          ? 'public'
          : 'fixed')
  ), // Fallback assumption
  regulatorTags: t(`assets_details.${key}.regulatorTags`, {
    returnObjects: true,
  }),
  listingVenue: t(`assets_details.${key}.tokenSpecs.listing`),
  offeringSize: t(`assets_details.${key}.offeringSize`),
  minInvestment: t(`assets_details.${key}.minInvestment`),
  initialClosing: t(`assets_details.${key}.initialClosing`),
  summary: t(`assets_details.${key}.summary`, { returnObjects: true }),
  primaryAsset: t(`assets_details.${key}.primaryAsset`),
  investmentFocus: t(`assets_details.${key}.investmentFocus`),
  portfolioStatus: t(`assets_details.${key}.portfolioStatus`),
  structurePoints: t(`assets_details.${key}.structurePoints`, {
    returnObjects: true,
  }),
  tokenSpecs: [
    {
      label: t('assets_details.pxai.tokenSpecsLabels.name'),
      val: t(`assets_details.${key}.tokenSpecs.name`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.ticker'),
      val: t(`assets_details.${key}.tokenSpecs.ticker`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.issuer'),
      val: t(`assets_details.${key}.tokenSpecs.issuer`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.ref_asset'),
      val: t(`assets_details.${key}.tokenSpecs.ref_asset`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.offering_size'),
      val: t(`assets_details.${key}.tokenSpecs.offering_size`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.ref_price'),
      val: t(`assets_details.${key}.tokenSpecs.ref_price`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.ref_val'),
      val: t(`assets_details.${key}.tokenSpecs.ref_val`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.token_price'),
      val: t(`assets_details.${key}.tokenSpecs.token_price`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.min_inv'),
      val: t(`assets_details.${key}.tokenSpecs.min_inv`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.listing'),
      val: t(`assets_details.${key}.tokenSpecs.listing`),
    },
    {
      label: t('assets_details.pxai.tokenSpecsLabels.security_type'),
      val: t(`assets_details.${key}.tokenSpecs.security_type`),
    },
  ],
  fees: {
    tokenLevel: t(`assets_details.${key}.fees.tokenLevel`, {
      returnObjects: true,
    }),
    spcLevel: t(`assets_details.${key}.fees.spcLevel`, { returnObjects: true }),
  },
  participants: t(`assets_details.${key}.participants`, {
    returnObjects: true,
  }),
  documents: t(`assets_details.${key}.documents`, { returnObjects: true }),
});

export const getAssets = (t) => [
  {
    id: 'pxai',
    name: t('products_page.assets.pxai_name'),
    ticker: 'PXAI',
    type: 'private',
    apy: 'Growth',
    tvl: '$30M',
    price: '$1.00',
    platform: 'DIGIFT',
    desc: t('products_page.assets.pxai_desc'),
    icon: <Brain size={20} />,
    hot: true,
    details: createAssetDetail(t, 'pxai'),
  },
  {
    id: 'tbill',
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
    details: createAssetDetail(t, 'tbill'),
  },
  {
    id: 'spx',
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
    details: createAssetDetail(t, 'spx'),
  },
  {
    id: 'tsla',
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
    details: createAssetDetail(t, 'tsla'),
  },
  {
    id: 'grn',
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
    details: createAssetDetail(t, 'grn'),
  },
  {
    id: 'paxg',
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
    details: createAssetDetail(t, 'paxg'),
  },
  {
    id: 'pcf',
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
    details: createAssetDetail(t, 'pcf'),
  },
];
