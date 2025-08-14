import { useState } from "react";
import "./ModeButton.scss";

const ModeButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleModeChange = () => {
    setIsActive(!isActive);
  }

  return (
    <div className={`button_cont ${isActive ? "" : "active_mode"}`} onClick={handleModeChange}>
      <div className={isActive ? "left_side" : "right_side"}></div>
    </div>
  )
}

export default ModeButton