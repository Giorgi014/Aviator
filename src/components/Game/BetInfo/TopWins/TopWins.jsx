import { BetsHead } from "../Route";
import "./TopWins.scss";

const TopWins = () => {
  return (
    <article className="top_wins_container">
      <section className="top_wins_header">
        <BetsHead variant="top_wins">
          <p className="player">Player</p>
          <p className="bet_gel_x">Bet GEL X</p>
          <p className="crashed_out">Crashed Out</p>
          <p className="win_gel">Win GEL</p>
        </BetsHead>
      </section>
    </article>
  );
};

export default TopWins;
