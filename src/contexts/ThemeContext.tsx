import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

type ThemeContextData = {
  isDark: boolean;
  changeToDark: () => void;
  changeToLight: () => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDark, setIsDark] = useState(false);

  function changeToDark() {
    console.log(localStorage.getItem("theme"));
    setIsDark(true);
    localStorage.setItem("theme", JSON.stringify(true));
  }

  function changeToLight() {
    console.log(localStorage.getItem("theme"));
    setIsDark(false);
    localStorage.setItem("theme", JSON.stringify(false));
  }

  useEffect(() => {
    let themeInStorage = JSON.parse(localStorage.getItem("theme") as string);
    console.log(themeInStorage);
    if (themeInStorage === true) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        changeToDark,
        changeToLight,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
