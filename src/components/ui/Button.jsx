
const Button = ({ children, variant = 'primary', className = '', onClick }) => {
  const baseStyle = "relative px-8 py-4 text-sm tracking-[0.1em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden border";

  const variants = {
    primary: "bg-black text-white border-black hover:bg-zinc-800 hover:border-zinc-800",
    secondary: "bg-white text-black border-black hover:bg-black hover:text-white",
    outline: "bg-transparent text-black border-zinc-300 hover:border-black",
    link: "px-0 py-2 text-black border-b border-black hover:opacity-60 justify-start rounded-none border-t-0 border-x-0"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
