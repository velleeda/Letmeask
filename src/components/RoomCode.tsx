import copyImg from "../assets/images/copy.svg";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/room-code.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  const { isDark } = useTheme();

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button
      className={`room-code ${isDark ? "dark" : ""}`}
      onClick={copyRoomCodeToClipboard}
    >
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
