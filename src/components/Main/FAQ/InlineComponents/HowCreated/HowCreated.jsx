import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Planeimg } from "../../../../Route/Route";
import "./HowCreated.scss";

const HowCreated = () => {
  const [showHowCreated, setShowHowCreated] = useState(false);

  const toggleVisibility = (setter, currentValue) => {
    setter(!currentValue);
  };

  return (
    <section className="how_created_cont">
      <div
        className="plus_minus_cont"
        onClick={() => toggleVisibility(setShowHowCreated, showHowCreated)}
      >
        {showHowCreated ? (
          <AiOutlineMinus className="minus" />
        ) : (
          <AiOutlinePlus className="plus" />
        )}
      </div>
      <div className="faq_text">
        <p className="how_created">How was the brand Aviator created?</p>
        {showHowCreated && (
          <>
            <p className="hidden_text">
              First use of Aviator as a brand in gambling industry took place in
              2015 when City Loft LLC established a company which ran one of the
              most popular online gambling platforms in Georgia, adjarabet.com.
              In 2016-2017 under the instructions of City Loft LLC, various
              designers worked on the design and logo of Casino Aviator, a land
              casino which operated in 2018-2019.
            </p>
            <img
              src={Planeimg}
              alt="aviator studio airplane"
              className="aviator_stidio_image"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default HowCreated;
