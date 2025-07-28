import "./TotalGameInfo.scss";

const TotalGameInfo = () => {
  return (
    <article className="total_game_info">
      <section className="bets_container">
        <p className="bets_text">Bets</p>
        <div className="total_bets_cont">
          <p className="current_bets">100</p>
          <p>/</p>
          <p className="total_bets">100</p>
        </div>
      </section>
      <section className="total_win_gel">
        <p className="total_win_text">Total Win Gel</p>
        <p className="total_gel">0</p>
      </section>
    </article>
  );
};

export default TotalGameInfo;
