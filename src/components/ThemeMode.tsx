import { useTheme } from "../contexts/ThemeContext";

import lightMode from "../assets/images/light.svg";
import darkMode from "../assets/images/dark.svg";

import "../styles/thememode.scss";

export function ThemeMode() {
  const { isDark, changeToLight, changeToDark } = useTheme();

  return (
    <div>
      {isDark ? (
        <img
          className="theme"
          src={lightMode}
          alt="Light Mode"
          onClick={() => changeToLight()}
        />
      ) : (
        <img
          className="theme"
          src={darkMode}
          alt="Light Mode"
          onClick={() => changeToDark()}
        />
      )}
    </div>
  );
}
