import { useState } from "react";
import { Button } from "../../Route/Route";
import { MdOutlineHistory } from "react-icons/md";
import "./AboutBet.scss";

const AboutBet = () => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="about_bet_container">
      <div className="head_buttons">
        <Button
          variant="bets"
          className={selected === "all" ? "selected" : ""}
          onClick={() => setSelected("all")}
        >
          All Bets
        </Button>
        <Button
          variant="bets"
          className={selected === "my" ? "selected" : ""}
          onClick={() => setSelected("my")}
        >
          My Bets
        </Button>
        <Button
          variant="bets"
          className={selected === "top" ? "selected" : ""}
          onClick={() => setSelected("top")}
        >
          Top Wins
        </Button>
      </div>
      <div className="bets_and_history">
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
      </div>
    </div>
  );
};

export default AboutBet;
