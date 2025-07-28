import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineHistory } from "react-icons/md";
import { Button } from "../../../Route/Route";
import "./BetContainer.scss";

export const BetContainer = () => {
  return (
    <article className="bet_container">
      <section className="value_continer">
        <div className="bet_value">
          <div className="input_cont">
            <Button variant="btn_minus">
              <FaMinus />
            </Button>
            <input type="text" className="amount" />
            <Button variant="btn_plus">
              <FaPlus />
            </Button>
          </div>
          <div className="choose_mount_cont">
            <Button variant="btn_mount">1</Button>
            <Button variant="btn_mount">5</Button>
            <Button variant="btn_mount">25</Button>
            <Button variant="btn_mount">100</Button>
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
