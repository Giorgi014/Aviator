import IframeHeader from "./IframeHeader/IframeHeader";
import AboutBet from "./AboutBet/AboutBet";
import GameAviator from "./GameAviator/GameAviator";
import { BalanceProvider } from "./IframeHeader/CurrentBalance";
import "./Aviator.scss";
import { IndexContextProvider } from "./GameAviator/Context/IndexContext";
import ThemeContextComponent from "./GameAviator/Context/ThemeContext";

const Aviator = () => {
  return (
    <ThemeContextComponent>
      <BalanceProvider>
        <IndexContextProvider>
          <div className="aviator_demo_container">
            <IframeHeader />
            <div className="aviator_game_container">
              <div className="game_info_container">
                <AboutBet />
              </div>
              <div className="game_container">
                <GameAviator />
              </div>
            </div>
          </div>
        </IndexContextProvider>
      </BalanceProvider>
    </ThemeContextComponent>
  );
};

export default Aviator;
