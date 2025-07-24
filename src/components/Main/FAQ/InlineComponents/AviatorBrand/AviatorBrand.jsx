import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./AviatorBrand.scss"

const AviatorBrand = () => {
  const [showAviatorBrand, setShowAviatorBrand] = useState(false);

  const toggleVisibility = (setter, currentValue) => {
    setter(!currentValue);
  };

  return (
    <section className="aviator_brand_cont">
      <div
        className="plus_minus_cont"
        onClick={() => toggleVisibility(setShowAviatorBrand, showAviatorBrand)}
      >
        {showAviatorBrand ? (
          <AiOutlineMinus className="minus" />
        ) : (
          <AiOutlinePlus className="plus" />
        )}
      </div>
      <div className="faq_text">
        <p className="aviator_brand_text head_text">
          When did the first use of Aviator brand in gambling take place?
        </p>
        {showAviatorBrand && (
          <>
            <p className="hidden_text">
              First use of Aviator brand in gambling took place in the beginning
              of 2018 when land casino Aviator was opened in Tbilisi and soon
              after its opening, a live stream from the casino was placed on
              Adjarabet platform using the same branding.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default AviatorBrand;
