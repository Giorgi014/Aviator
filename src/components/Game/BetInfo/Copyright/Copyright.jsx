import { PiShieldCheckFill } from "react-icons/pi";
import { Clogo } from "../../../Route/Route";
import "./Copyright.scss";

const Copyright = () => {
  return (
    <article className="copyright_main_container">
      <section className="copyright">
        <div className="security_icon">
          <PiShieldCheckFill />
        </div>
        <p className="provably">Provably Fair Game</p>
        <p className="version">Version 2.0.0</p>
        <div className="clock"></div>
      </section>
      <img src={Clogo} alt="copyright logo" className="copyright_logo"/>
    </article>
  );
};

export default Copyright;
