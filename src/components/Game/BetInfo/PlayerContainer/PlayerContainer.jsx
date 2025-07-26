// import { Children } from 'react'
import "./PlayerContainer.scss";

export const PlayerContainer = (props) => {
  return (
    <div className="player_container">
      <div className="player_name">
        <p>{props.name}</p>
      </div>
      <div className="player_bet">
        <p>{props.bet}</p>
      </div>
      <div className="player_win">
        <p>{props.win}</p>
      </div>
      {/* {Children} */}
    </div>
  );
};
