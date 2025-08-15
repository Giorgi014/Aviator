import { BetContainer } from "./BetContainer/BetContainer";
import TotalGameInfo from "./TotalGameInfo/TotalGameInfo";
import IndexNumber from "./IndexNumber/IndexNumber";
import "./GameAviator.scss";
import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";

const GameAviator = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`game_aviator_container ${isDark ? "" : "dark"}`}>
      <section className="plane"></section>
      <section className="number_index">
        <IndexNumber />
      </section>
      <section className="bet">
        <BetContainer />
        <BetContainer />
      </section>
      <section className="bets_and_wins">
        <TotalGameInfo />
      </section>
    </div>
  );
};

export default GameAviator;
