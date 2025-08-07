import { useState } from "react";
import "./ModeButton.scss";

const ModeButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleModeChange = () => {
    setIsActive(!isActive);
  }

  return (
    <button className={`button_cont ${isActive ? "" : "active_mode"}`} onClick={handleModeChange}>
      <div className={isActive ? "right_side" : "left_side"}></div>
    </button>
  )
}

export default ModeButton