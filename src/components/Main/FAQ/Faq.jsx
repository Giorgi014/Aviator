import { useEffect } from "react";
import {
  AviatorBrand,
  AviatorStudio,
  Copyright,
  CrashGame,
  HowCreated,
  Owner,
} from "./InlineComponents/Route";
import "./Faq.scss";

const Faq = () => {
  useEffect(() => {
    if (window.location.hash === "#faq") {
      const element = document.getElementById("faq");

      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <article className="faq_contaoner" id="faq">
      <p className="question_text">Any Questions?</p>
      <p className="help_text">We Can Help You</p>
      <section className="faq_components">
        <HowCreated />
        <AviatorBrand />
        <Owner />
        <AviatorStudio />
        <CrashGame />
        <Copyright />
      </section>
    </article>
  );
};

export default Faq;
