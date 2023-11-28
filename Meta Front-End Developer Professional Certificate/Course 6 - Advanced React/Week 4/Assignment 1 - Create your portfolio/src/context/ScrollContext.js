import { createContext, useContext, useEffect, useRef } from "react";

const ScrollContext = createContext(undefined);

export const ScrollProvider = ({ children }) => {
  const headerRef = useRef(null);
  useEffect(() => {
    let prevWindowYPos = window.scrollY;

    const handleScroll = () => {
      const currentWindowYPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevWindowYPos > currentWindowYPos) {
        headerElement.style.transform = "translateY(0px)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevWindowYPos = currentWindowYPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={headerRef}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
