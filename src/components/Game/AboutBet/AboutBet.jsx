import { useState } from "react";
import { Button } from "../../Route/Route";
import {
  Allbets,
  Copyright,
  MyBets,
  PlayerContainer,
  TopWins,
} from "../BetInfo/Route";
import "./AboutBet.scss";

const AboutBet = () => {
  const [selected, setSelected] = useState("all");

  return (
    <article className="about_bet_container">
      <section className="head_buttons">
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
      </section>
      <section className="about_bet_info">
        <div className={selected === "all" ? "visible" : "hidden"}>
          <Allbets />
        </div>
        <div className={selected === "my" ? "visible" : "hidden"}>
          <MyBets />
        </div>
        <div className={selected === "top" ? "visible" : "hidden"}>
          <TopWins />
        </div>
      </section>
      <section className={selected === "all" ? "players_container" : "hidden_players_container"}>
        <PlayerContainer name="Ajika" bet="10.00" win="0.00" />
      </section>
      <section className="copyright_container">
        <Copyright />
      </section>
    </article>
  );
};

export default AboutBet;
