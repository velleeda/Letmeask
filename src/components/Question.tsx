import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

import "../styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({
  content,
  author,
  children,
  isAnswered = false,
  isHighlighted = false,
}: QuestionProps) {
  const { isDark } = useTheme();

  return (
    <div
      className={`question ${isAnswered ? "answered" : ""} ${
        isHighlighted && !isAnswered ? "highlighted" : ""
      } ${isDark ? "dark" : ""} `}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
