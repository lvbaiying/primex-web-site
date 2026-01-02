

export const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
    style={{
      backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
      backgroundSize: '120px 120px'
    }}>
  </div>
);

export const WorldMapBackground = () => (
  <svg className="absolute inset-0 w-full h-full text-zinc-100 pointer-events-none -z-10 opacity-60" xmlns="http://www.w3.org/2000/svg">
    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#dots)" mask="url(#map-mask)" />
    <mask id="map-mask">
      <rect width="100%" height="100%" fill="black" />
      <circle cx="50%" cy="50%" r="40%" fill="white" />
      <circle cx="80%" cy="20%" r="15%" fill="white" />
      <circle cx="20%" cy="60%" r="20%" fill="white" />
    </mask>
  </svg>
);
