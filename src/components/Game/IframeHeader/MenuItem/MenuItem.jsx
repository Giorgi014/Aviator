import ModeButton from "../ModeButton/ModeButton";
import { PiMusicNoteSimple, PiAirplaneTiltLight } from "react-icons/pi";
import { AiOutlineSound } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import "./MenuItem.scss";
import { useContext } from "react";
import { ThemeContext } from "../../GameAviator/Context/ThemeContext";

export const MenuItem = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const items = [
    {
      id: 1,
      icon: <PiMusicNoteSimple />,
      label: "Sound",
      mode: <ModeButton />,
      className: "menu_item",
    },
    {
      id: 2,
      icon: <AiOutlineSound />,
      label: "Music",
      mode: <ModeButton />,
      className: "menu_item",
    },
    {
      id: 3,
      icon: <PiAirplaneTiltLight />,
      label: "Animation",
      mode: <ModeButton />,
      className: "menu_item",
    },
    {
      id: 4,
      icon: <BsMoon />,
      label: "Dark Mode",
      mode: <ModeButton />,
      className: "menu_item",
      onClick: () => setIsDark((prev) => !prev),
    },
  ];

  return (
    <>
      {items.map(({ id, icon, label, mode, className, onClick }) => {
        return (
          <div key={id} className={className} onClick={onClick}>
            <div className="item_content">
              <div className="item_icon">{icon}</div>
              <p className="item_text">{label}</p>
            </div>
            <div className="item_mode">{mode}</div>
          </div>
        );
      })}
    </>
  );
};
