import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "../../../Route/Route";
import { useEffect, useRef, useState } from "react";
import { useBalance } from "../../IframeHeader/CurrentBalance";
import { useIndex } from "../Context/IndexContext";
import "./BetContainer.scss";

export const BetContainer = () => {
  const [betAmount, setBetAmount] = useState(1);
  const { balance, subtractFromBalance, addToBalance } = useBalance();
  const [cancel, setCancel] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const { index, isRunning } = useIndex();
  const [btnState, setBtnState] = useState("inactive");
  // const [gameStatus, setGameStatus] = useState("playing", "restarting");
  const running = useRef(isRunning);

  useEffect(() => {
    setWaiting(btnState === "waiting");
    setCancel(btnState === "active");
  }, [btnState]);

  useEffect(() => {
    if (!running.current && isRunning) {
      if (btnState === "waiting") {
        if (betAmount <= balance && betAmount > 0) {
          subtractFromBalance(betAmount);
          setBtnState("active");
          console.log("bet waiting");
        } else {
          setBtnState("inactive");
          console.log("bet disabled");
        }
      }
    }
    running.current = isRunning;
  }, [isRunning, btnState, betAmount, balance, subtractFromBalance]);

  const handleChangeAmount = (value) => {
    setBetAmount(parseFloat(value) || 0);
  };

  const plusAmmount = () => {
    if (betAmount < 500) {
      setBetAmount((plus) => plus + 1);
    }
  };
  const minusAmmount = () => {
    if (betAmount > 1) {
      setBetAmount((minus) => minus - 1);
    }
  };

  const handleAmount = (value) => {
    setBetAmount((current) => {
      const newAmount = current + value;
      return newAmount <= 500 ? newAmount : current;
    });
  };

  const handleBet = () => {
    if (betAmount <= 0 || betAmount > balance) {
      console.log("Insufficient balance or invalid bet amount");
      return;
    }
    subtractFromBalance(betAmount);
    setBtnState("active");
    console.log(`Bet placed: ${betAmount} GEL`);
  };

  const handleCancel = () => {
    addToBalance(betAmount);
    setBtnState("inactive");
    console.log("Bet cancelled");
  };

  const handleWaiting = () => {
    setBtnState((s) => (s === "waiting" ? "inactive" : "waiting"));
  };

  const handleBetButton = () => {
    if (isRunning) {
      handleWaiting();
      return;
    }
    if (btnState === "active") {
      handleCancel();
    } else {
      handleBet();
    }
  };

  const containerClass =
    btnState === "waiting"
      ? "waiting_bet_container"
      : btnState === "active"
      ? "cancel_bet_container"
      : "bet_container";

  const buttonVariant =
    btnState === "waiting"
      ? "waiting_btn"
      : btnState === "active"
      ? "cancel_btn"
      : "bet_btn";

  return (
    <article
      className={
        waiting
          ? "waiting_bet_container"
          : cancel
          ? "cancel_bet_container"
          : "bet_container"
      }
    >
      <section className="value_continer">
        <div className="bet_value">
          <div className="input_cont">
            <Button variant="btn_minus" onClick={minusAmmount}>
              <FaMinus />
            </Button>
            <input
              type="number"
              className="amount"
              value={betAmount.toFixed(2)}
              onChange={(e) => handleChangeAmount(e.target.value)}
            />
            <Button variant="btn_plus" onClick={plusAmmount}>
              <FaPlus />
            </Button>
          </div>
          <div className="choose_mount_cont">
            <Button variant="btn_mount" onClick={() => handleAmount(1)}>
              1
            </Button>
            <Button variant="btn_mount" onClick={() => handleAmount(5)}>
              5
            </Button>
            <Button variant="btn_mount" onClick={() => handleAmount(25)}>
              25
            </Button>
            <Button variant="btn_mount" onClick={() => handleAmount(100)}>
              100
            </Button>
          </div>
        </div>
        <div className="bet_mount_btn">
          <Button variant={buttonVariant} onClick={handleBetButton}>
            <p className="bet">
              {btnState === "waiting"
                ? "Waiting"
                : btnState === "active"
                ? "Cancel"
                : "Bet"}
            </p>
            <div className="mount_cont">
              <p className="bet_mount">
                {btnState === "active" ? "" : betAmount.toFixed(2)}
              </p>
              <p className="mount_valute">
                {btnState === "active" ? "" : "GEL"}
              </p>
            </div>
          </Button>
        </div>
      </section>
      <section className="autobet_autochashout_container">
        <Button variant="btn_autobet">
          <MdOutlineHistory />
          Autoplay
        </Button>
        <Button variant="btn_autochashout">Auto cash out</Button>
      </section>
    </article>
  );
};
