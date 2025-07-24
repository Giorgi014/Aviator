import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./CrashGame.scss";

const CrashGame = () => {
  const [showCrashGame, setShowCrashGame] = useState(false);

  const toggleVisibility = (setter, currentValue) => {
    setter(!currentValue);
  };
  return (
    <section
      className="crash_game_cont"
      onClick={() => toggleVisibility(setShowCrashGame, showCrashGame)}
    >
      <div className="plus_minus_cont">
        {showCrashGame ? (
          <AiOutlineMinus className="minus" />
        ) : (
          <AiOutlinePlus className="plus" />
        )}
      </div>
      <div className="faq_text">
        <p className="crash_game_text">
          Why did Spribe OU start using Aviator branding as the name and visual
          part of the crash game?
        </p>
        {showCrashGame && (
          <>
            <p className="hidden_text upper_text">
              Spribe OU was established on 08.08.2018, clearly after Aviator
              branding had been used in the gambling industry. In 2018, in
              cooperation with the Adjarabet platform, newly formed SPRIBE
              created the crash game, exclusively launched on Adjarabet. SPRIBE
              was instructed to use the name Aviator and airplane image but was
              never granted rights to use them outside the platform.
            </p>
            <p className="hidden_text down_text">
              On January 24, 2024, the court issued a preliminary injunction
              forbidding its use until the dispute on IP infringement was
              resolved.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default CrashGame;
