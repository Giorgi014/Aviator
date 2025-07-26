import { BetsHead } from "../Route";
import "./MyBets.scss";

const MyBets = () => {
  return (
    <section className="my_bets_header">
      <BetsHead variant="my_bets">
        <p className="date">Date</p>
        <p className="bet_gel_x">Bet GEL X</p>
        <p className="win_gel">Win GEL</p>
      </BetsHead>
    </section>
  );
};

export default MyBets;
