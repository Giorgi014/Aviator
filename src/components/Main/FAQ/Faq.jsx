import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Planeimg, Plan3, Plan4 } from "../../Route/Route";
import { Link } from "react-router-dom";
import "./Faq.scss";
import { useEffect, useState } from "react";

const Faq = () => {
  useEffect(() => {
    if (window.location.hash === "#faq") {
      const element = document.getElementById("faq");

      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const [showHowCreated, setShowHowCreated] = useState(false);
  const [showAviatorBrand, setShowAviatorBrand] = useState(false);
  const [showAviatorBranding, setShowAviatorBranding] = useState(false);
  const [showAviatorStudio, setShowAviatorStudio] = useState(false);
  const [showCrashGame, setShowCrashGame] = useState(false);
  const [showCopyright, setShowCopyright] = useState(false);

  const toggleVisibility = (setter, currentValue) => {
    setter(!currentValue);
  };

  return (
    <article className="faq_contaoner" id="faq">
      <p className="question_text">Any Questions?</p>
      <p className="help_text">We Can Help You</p>
      <section className="how_created_cont info_cont">
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
          <p className="how_created head_text">
            How was the brand Aviator created?
          </p>
          {showHowCreated && (
            <>
              <p className="hidden_text">
                First use of Aviator as a brand in gambling industry took place
                in 2015 when City Loft LLC established a company which ran one
                of the most popular online gambling platforms in Georgia,
                adjarabet.com. In 2016-2017 under the instructions of City Loft
                LLC, various designers worked on the design and logo of Casino
                Aviator, a land casino which operated in 2018-2019.
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
      <section className="aviator_brand_cont info_cont">
        <div
          className="plus_minus_cont"
          onClick={() =>
            toggleVisibility(setShowAviatorBrand, showAviatorBrand)
          }
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
                First use of Aviator brand in gambling took place in the
                beginning of 2018 when land casino Aviator was opened in Tbilisi
                and soon after its opening, a live stream from the casino was
                placed on Adjarabet platform using the same branding.
              </p>
            </>
          )}
        </div>
      </section>
      <section className="who_owns_cont info_cont">
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
          <p className="aviator_brending head_text">
            Who owns Aviator branding now?
          </p>
          {showAviatorBranding && (
            <>
              <p className="hidden_text">
                On May 03, 2022, City Loft LLC, which had sold its online
                gambling business Adjarabet to Flutter Entertainment Plc,
                transferred all Aviator-related IP (trademark registrations and
                copyright on the image below) to its current holder Aviator LLC
                (404612610), which since 2022 runs a slots business under the
                said trademarks and uses the said logo for its business.
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
      <section className="aviator_sudio_cont info_cont">
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
          <p className="aviator_sudio_text head_text">
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
      <section
        className="crash_game_cont info_cont"
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
          <p className="crash_game_text head_text">
            Why did Spribe OU start using Aviator branding as the name and
            visual part of the crash game?
          </p>
          {showCrashGame && (
            <>
              <p className="hidden_text upper_text">
                Spribe OU was established on 08.08.2018, clearly after Aviator
                branding had been used in the gambling industry. In 2018, in
                cooperation with the Adjarabet platform, newly formed SPRIBE
                created the crash game, exclusively launched on Adjarabet.
                SPRIBE was instructed to use the name Aviator and airplane image
                but was never granted rights to use them outside the platform.
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
      <section
        className="copyright_cont info_cont"
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
          <p className="copyright_text head_text">
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
                  reg. no. 35671, registration date: 11.07.2022, class 9:
                  computer software;
                </p>
                <Link>registration link</Link>
              </div>
              <div className="hidden_text second_reg_cont reg_cont">
                <img src={Plan4} alt="" />
                <p className="secong_reg_text reg_text">
                  reg. no: 37550; registration date: 12.11.2023; classes 9 and
                  41;
                </p>
                <Link>registration link</Link>
              </div>
            </>
          )}
        </div>
      </section>
    </article>
  );
};

export default Faq;
