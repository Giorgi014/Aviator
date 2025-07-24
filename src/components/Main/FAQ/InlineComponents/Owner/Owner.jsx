import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Planeimg } from "../../../../Route/Route";
import "./Owner.scss";

const Owner = () => {
  const [showAviatorBranding, setShowAviatorBranding] = useState(false);

  const toggleVisibility = (setter, currentValue) => {
    setter(!currentValue);
  };

  return (
    <section className="who_owns_cont">
      <div
        className="plus_minus_cont"
        onClick={() =>
          toggleVisibility(setShowAviatorBranding, showAviatorBranding)
        }
      >
        {showAviatorBranding ? (
          <AiOutlineMinus className="minus" />
        ) : (
          <AiOutlinePlus className="plus" />
        )}
      </div>
      <div className="faq_text">
        <p className="aviator_brending">Who owns Aviator branding now?</p>
        {showAviatorBranding && (
          <>
            <p className="hidden_text">
              On May 03, 2022, City Loft LLC, which had sold its online gambling
              business Adjarabet to Flutter Entertainment Plc, transferred all
              Aviator-related IP (trademark registrations and copyright on the
              image below) to its current holder Aviator LLC (404612610), which
              since 2022 runs a slots business under the said trademarks and
              uses the said logo for its business.
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

export default Owner;
