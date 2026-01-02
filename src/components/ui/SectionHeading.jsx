
import FadeIn from './FadeIn';

const SectionHeading = ({ title, subtitle, align = 'left', dark = false }) => (
  <div className={`mb-24 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <FadeIn>
      <div className={`flex flex-col gap-6 pb-8 border-b ${dark ? 'border-zinc-800' : 'border-black'} ${align === 'center' ? 'items-center' : 'md:flex-row md:items-end justify-between'}`}>
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] whitespace-pre-line ${dark ? 'text-white' : 'text-black'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-base max-w-md leading-relaxed font-light ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  </div>
);

export default SectionHeading;
