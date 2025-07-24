import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Plan3, Plan4 } from "../../../../Route/Route";
import "./Copyright.scss";

const Copyright = () => {
  const [showCopyright, setShowCopyright] = useState(false);

  const toggleVisibility = (setter, currentValue) => {
    setter(!currentValue);
  };

  return (
    <section
      className="copyright_cont"
      onClick={() => toggleVisibility(setShowCopyright, showCopyright)}
    >
      <div className="plus_minus_cont">
        {showCopyright ? (
          <AiOutlineMinus className="minus" />
        ) : (
          <AiOutlinePlus className="plus" />
        )}
      </div>
      <div className="faq_text">
        <p className="copyright_text">
          What is the current status of the dispute between Aviator LLC and
          Spribe OU regarding ownership of AVIATOR IP?
        </p>
        {showCopyright && (
          <>
            <p className="hidden_text copyright_hidden_text">
              Despite not having rights to the Aviator name or image, SPRIBE
              applied for trademarks in multiple jurisdictions, including
              Georgia. In 2024, Aviator LLC initiated invalidation actions
              against these registrations.
            </p>
            <div className="hidden_text first_reg_cont reg_cont">
              <img src={Plan3} alt="" />
              <p className="first_reg_text reg_text">
                reg. no. 35671, registration date: 11.07.2022, class 9: computer
                software;
              </p>
              <Link>registration link</Link>
            </div>
            <div className="hidden_text second_reg_cont reg_cont">
              <img src={Plan4} alt="" />
              <p className="secong_reg_text reg_text">
                reg. no: 37550; registration date: 12.11.2023; classes 9 and 41;
              </p>
              <Link>registration link</Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Copyright;
