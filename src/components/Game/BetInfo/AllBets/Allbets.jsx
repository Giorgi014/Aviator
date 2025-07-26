import { MdOutlineHistory } from "react-icons/md";
import { Button } from "../../../Route/Route";
import { BetsHead } from "../Route";
import "./Allbets.scss";

const Allbets = () => {
  return (
    <article className="all_bets_container">
      <section className="bets_and_history">
        <div className="total_bet_con">
          <p className="total_bets">Total Bets</p>
          <p className="total_bets_number">100</p>
        </div>
        <Button variant="previus" className="previus_cont">
          <div className="history_icon">
            <MdOutlineHistory />
          </div>
          <p className="previus_round">Previus Round</p>
        </Button>
      </section>
      <section className="all_bets_header">
        <BetsHead variant="all_bets">
          <p className="player">Player</p>
          <p className="bet_gel_x">Bet GEL X</p>
          <p className="win_gel">Win GEL</p>
        </BetsHead>
      </section>
    </article>
  );
};

export default Allbets;
