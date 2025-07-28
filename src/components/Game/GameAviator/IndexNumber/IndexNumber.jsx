import { useEffect, useRef, useState } from "react";
import "./IndexNumber.scss";

const IndexNumber = () => {
  const [index, setIndex] = useState(1);
  const [isRunning, setIsRunning] = useState(true);
  const interval = useRef(null);
  const timeout = useRef(null);

  useEffect(() => {
    // if (!isRunning) return;
    let indexNum;
    const intervalTime = 100;

    if (index <= 5) {
      indexNum = 0.02;
    } else if (index > 5 && index <= 10) {
      indexNum = 0.04;
    } else if (index > 10 && index <= 20) {
      indexNum = 0.08;
    } else if (index > 20) {
      indexNum = 0.11;
    }

    interval.current = setInterval(() => {
      setIndex((i) => i + indexNum);
    }, intervalTime);

    const randomStopTime = Math.floor(Math.random() * 3000) + 0;

    timeout.current = setTimeout(() => {
      clearInterval(interval.current);
      setIsRunning(false);
    }, randomStopTime);

    return () => {
      clearInterval(interval.current);
      clearTimeout(timeout.current);
    };
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) {
        localStorage.setItem("stoppedIndex", index.toFixed(2));
      const restartDelay = 5000;
      const restartTimeout = setTimeout(() => {
        setIndex(1);
        setIsRunning(true);
      }, restartDelay);

      return () => clearTimeout(restartTimeout);
    }
  }, [isRunning, index]);

  //   localStorage.setItem("stoppedIndex", index.toFixed(2));

  return <div>{index.toFixed(2)}x</div>;
};

export default IndexNumber;
