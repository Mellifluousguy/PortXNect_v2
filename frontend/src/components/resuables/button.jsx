const Button = ({
    children,
    variant = "normal",
    className = "",
    ...props
}) => {
    const baseStyle =
        "rounded-full cursor-pointer transition-colors duration-300";

    const variants = {
        normal: "border-[0.5px] border-white/40 hover:bg-white/5 p-3 ",
        green: "bg-green-500/20 border border-green-400/5 text-green-400 p-3  hover:bg-green-500/30",
        red: "bg-red-500/20 border border-red-400/5 text-red-400 hover:bg-red₹-500/30",
        blue: "bg-blue-500/20 border border-blue-400/5 text-blue-400 p-3 hover:bg-blue-500/30",
        icon: "p-2 border-[0.5px] border-white/40 hover:bg-white/5",
        customBg: "p-2 border-[0.5px] border-white/40",
        
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant] || variants.normal} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;