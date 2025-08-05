import ModeButton from "../ModeButton/ModeButton";
import { PiMusicNoteSimple } from "react-icons/pi";
import "./MenuItem.scss";

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
    icon: <PiMusicNoteSimple />,
    label: "Sound",
    mode: <ModeButton />,
    className: "menu_item",
  },
  {
    id: 3,
    icon: <PiMusicNoteSimple />,
    label: "Sound",
    mode: <ModeButton />,
    className: "menu_item",
  },
  {
    id: 4,
    icon: <PiMusicNoteSimple />,
    label: "Sound",
    mode: <ModeButton />,
    className: "menu_item",
  },
];

export const MenuItem = () => {
  return (
    <>
      {items.map(({ id, icon, label, mode, className }) => {
        return (
          <div key={id} className={className}>
            <div className="item_icon">{icon}</div>
            <p className="item_text">{label}</p>
            <div className="item_mode">{mode}</div>
          </div>
        );
      })}
    </>
  );
};
