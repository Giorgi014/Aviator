import { useState, useEffect } from "react";

export const RoundHistory = () => {
  const [lastIndex, setLastIndex] = useState([]);

  useEffect(() => {
    const stoppedIndex = localStorage.getItem("stoppedIndex");
    if (stoppedIndex) {
      setLastIndex(stoppedIndex);
    }
  }, []);

  return <div>{lastIndex}x</div>;
};
