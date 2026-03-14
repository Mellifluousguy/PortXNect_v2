import { createContext, useContext, useEffect, useRef, useState } from "react";

const FunContext = createContext();

export const FunProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setIsScrolled(el.scrollTop > 10);
    };

    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FunContext.Provider value={{ isScrolled, scrollRef }}>
      {children}
    </FunContext.Provider>
  );
};

export const useFun = () => useContext(FunContext);
