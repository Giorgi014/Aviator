import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextComponent({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
      ? JSON.parse(localStorage.getItem("isDark"))
      : true
  );
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  let obj = {
    isDark,
    setIsDark,
  };
  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>;
}

export default ThemeContextComponent;
