import FadeIn from './FadeIn';

const SectionHeading = ({ title, subtitle, dark = false, align = 'left' }) => (
  <div className={`mb-24 ${dark ? 'text-white' : 'text-black'} ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <FadeIn>
      <div className={`flex flex-col gap-6 pb-8 border-b ${dark ? 'border-zinc-800' : 'border-black'} ${align === 'center' ? 'items-center' : 'md:flex-row md:items-end justify-between'}`}>
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-[1.1] whitespace-pre-line">
          {title}
        </h2>
        {subtitle && (
          <p className={`text-base md:text-lg max-w-sm leading-relaxed opacity-60 font-light mb-1`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  </div>
);

export default SectionHeading;
