import { ButtonHTMLAttributes } from "react";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  const { isDark } = useTheme();

  return (
    <button
      className={`button ${isOutlined ? "outlined" : ""} ${
        isDark ? "dark" : ""
      } `}
      {...props}
    />
  );
}
