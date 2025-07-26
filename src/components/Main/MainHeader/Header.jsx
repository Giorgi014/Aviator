import { Link } from "react-router-dom";
import { Button, Logo } from "../../Route/Route.jsx";
import "./Header.scss";

const header = () => {
  const scrollHome = () => {
    const homeSection = document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about_us");

    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollConcept = () => {
    const conceptSection = document.getElementById("concept");

    if (conceptSection) {
      conceptSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollWhyUs = () => {
    const whyUsSection = document.getElementById("why_us");

    if (whyUsSection) {
      whyUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollFaq = () => {
    const faqSection = document.getElementById("faq");

    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openAviatorDemmo = () => {
    window.open("/Aviator", "_blank")
  }

  return (
    <header>
      <section className="header_container">
        <img src={Logo} alt="aviator studio logo" className="logo" />
        <ul>
          <li onClick={scrollHome}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={scrollToAboutUs}>
            <Link to="/#about_us">About Us</Link>
          </li>
          <li onClick={scrollConcept}>
            <Link to="/#concept">Concept</Link>
          </li>
          <li onClick={scrollWhyUs}>
            <Link to="/#why_us">Why Us?</Link>
          </li>
          <li onClick={scrollFaq}>
            <Link to="/#faq">FAQ</Link>
          </li>
        </ul>
        <Button variant="demo" onClick={openAviatorDemmo}>Demo</Button>
      </section>
    </header>
  );
};

export default header;
