

const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const variants = {
    primary: "bg-black text-white border border-black hover:bg-zinc-800",
    secondary: "bg-white text-black border border-zinc-200 hover:border-black",
    outline: "bg-transparent text-black border-b border-black hover:opacity-50 px-0 rounded-none h-auto py-1",
    icon: "p-2 border border-zinc-200 rounded-full hover:bg-zinc-100 text-black px-2 py-2"
  };

  const isOutline = variant === 'outline';
  const isIcon = variant === 'icon';

  return (
    <button className={`
      ${isOutline ? 'text-sm font-bold uppercase tracking-widest' : isIcon ? '' : 'px-8 py-4 text-sm font-medium rounded-sm'}
      transition-all duration-300 flex items-center justify-center gap-3 group
      ${variants[variant]} ${className}
    `} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
