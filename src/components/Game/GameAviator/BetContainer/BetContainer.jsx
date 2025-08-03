import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "../../../Route/Route";
import { useState } from "react";
import { useBalance } from "../../IframeHeader/CurrentBalance";
import "./BetContainer.scss";

export const BetContainer = () => {
  const [betAmount, setBetAmount] = useState(1);
  const { balance, subtractFromBalance, addToBalance } = useBalance();
  const [cancel, setCancel] = useState(false);

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
    if (betAmount <= balance && betAmount > 0) {
      subtractFromBalance(betAmount);
      setCancel(true);
      console.log(`Bet placed: ${betAmount} GEL`);
    } else {
      console.log("Insufficient balance or invalid bet amount");
    }
  };

  const handleCancel = () => {
    subtractFromBalance(-betAmount);
    setCancel(false);
    console.log("Bet cancelled");
  };

  // const handleAddToBalance = () => {
  //   addToBalance(betAmount);
  //   // setCancel(false);
  //   console.log("Bet added back to balance");
  // };

  return (
    <article className={cancel ? "cancel_bet_container" : "bet_container"}>
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
          <Button variant={cancel ? "cancel_btn" : "bet_btn"} onClick={cancel ? handleCancel : handleBet}>
            <p className="bet">{cancel ? "Cancel" : "Bet"}</p>
            <div className="mount_cont">
              <p className="bet_mount">{cancel ? "" : betAmount.toFixed(2)}</p>
              <p className="mount_valute">{cancel ? "" : "GEL"}</p>
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

// export default BetContainer;
