import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./AviatorStudio.scss";

const AviatorStudio = () => {
  const [showAviatorStudio, setShowAviatorStudio] = useState(false);

  const toggleVisibility = (setter, currentValue) => {
    setter(!currentValue);
  };

  return (
    <section className="aviator_sudio_cont">
      <div
        className="plus_minus_cont"
        onClick={() =>
          toggleVisibility(setShowAviatorStudio, showAviatorStudio)
        }
      >
        {showAviatorStudio ? (
          <AiOutlineMinus className="minus" />
        ) : (
          <AiOutlinePlus className="plus" />
        )}
      </div>
      <div className="faq_text">
        <p className="aviator_sudio_text">
          What rights does Aviator Studio own on Aviator branding?
        </p>
        {showAviatorStudio && (
          <>
            <p className="hidden_text">
              Aviator Studio owns a worldwide exclusive license to use Aviator
              branding in the gambling industry except for Georgia.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default AviatorStudio;
