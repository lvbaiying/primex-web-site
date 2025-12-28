export const GridBackground = () => (
  <div
    className='absolute inset-0 z-0 pointer-events-none opacity-[0.02]'
    style={{
      backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
      backgroundSize: '100px 100px',
    }}
  ></div>
);

export const WorldMapBackground = () => (
  <svg
    className='absolute inset-0 w-full h-full text-zinc-200 pointer-events-none -z-10 opacity-40'
    xmlns='http://www.w3.org/2000/svg'
  >
    <pattern
      id='dots'
      x='0'
      y='0'
      width='24'
      height='24'
      patternUnits='userSpaceOnUse'
    >
      <circle
        cx='2'
        cy='2'
        r='1'
        fill='currentColor'
      />
    </pattern>
    <rect
      width='100%'
      height='100%'
      fill='url(#dots)'
      mask='url(#map-mask)'
    />
    <mask id='map-mask'>
      <rect
        width='100%'
        height='100%'
        fill='black'
      />
      {/* Abstract continents focus areas */}
      <circle
        cx='25%'
        cy='40%'
        r='20%'
        fill='white'
        filter='url(#blur)'
      />
      <circle
        cx='75%'
        cy='30%'
        r='25%'
        fill='white'
        filter='url(#blur)'
      />
      <circle
        cx='50%'
        cy='70%'
        r='15%'
        fill='white'
        filter='url(#blur)'
      />
      <filter id='blur'>
        <feGaussianBlur stdDeviation='20' />
      </filter>
    </mask>
  </svg>
);
