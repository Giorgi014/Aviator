import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "../../../Route/Route";
import { useState } from "react";
import "./BetContainer.scss";

export const BetContainer = () => {
  const [betAmount, setBetAmount] = useState(1);

  const handleChangeAmount = () => {
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
    setBetAmount(value);
  };

  return (
    <article className="bet_container">
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
          <Button variant="bet_btn">
            <p className="bet">Bet</p>
            <div className="mount_cont">
              <p className="bet_mount">1.00</p>
              <p className="mount_valute">GEL</p>
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
