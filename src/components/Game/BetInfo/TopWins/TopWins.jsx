import { useState } from "react";
import { Button } from "../../../Route/Route";
import { BetsHead } from "../Route";
import "./TopWins.scss";

const TopWins = () => {
  const [topWinsHistory, setTopWinsHistory] = useState("weak");

  return (
    <article className="top_wins_container">
      <section className="weekly_and_monthly">
        <Button
          variant="weekly"
          className={topWinsHistory === "weak" ?  "selected_option" : "weekly"}
          onClick={() => setTopWinsHistory("weak")}
        >
          Weekly
        </Button>
        <Button
          variant="monthly"
          className={topWinsHistory === "month" ? "selected_option" : "monthly"}
          onClick={() => setTopWinsHistory("month")}
        >
          Monthly
        </Button>
      </section>
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
