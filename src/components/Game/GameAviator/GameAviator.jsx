import { BetContainer } from "./BetContainer/BetContainer";
import TotalGameInfo from "./TotalGameInfo/TotalGameInfo";
import  IndexNumber  from "./IndexNumber/IndexNumber";
import "./GameAviator.scss";

const GameAviator = () => {
  return (
    <div className="game_aviator_container">
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
