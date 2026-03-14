const Card = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyle = "backdrop-blur-sm";

  const variants = {
    default: "border-[0.5px] border-white/20 p-6 rounded-2xl ",
    compact: "border-[0.5px] border-white/20 p-3 rounded-xl",
    noBorder: "p-6",
    dark: "bg-black/80 border-[0.5px] border-white/20 p-6",
    soft: "bg-white/5 border-[0.5px] border-white/20 p-6",
    customBg: "border-[0.5px] border-white/20 p-6", // background comes from className
  };

  return (
    <div
      className={`${baseStyle} ${
        variants[variant] || variants.default
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;