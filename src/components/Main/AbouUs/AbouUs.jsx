import { Arrow, Cart, Dollar, Phones, Radial, Rocket } from "../../Route/Route";
import "./AboutUs.scss";

const AbouUs = () => {
  return (
    <article className="about_container">
      <section className="about_aviator_studio">
        <p className="concept_text">The concept</p>
        <p className="electrifying_text">is simple but electrifying:</p>
        <div className="cart_container">
          <Cart variant="cart_about">
            <div className="inline_cart_items rocket_cart">
              <img
                src={Rocket}
                alt="rocket icon"
                className="rocket about_cart_icon"
              />
              <p className="about_cart_text">Watch the multiplier rise</p>
            </div>
          </Cart>
          <Cart variant="cart_about">
            <div className="inline_cart_items dollar_cart">
              <img
                src={Dollar}
                alt="rocket icon"
                className="dollar about_cart_icon"
              />
              <p className="about_cart_text">
                Cash out before the plane flies away
              </p>
            </div>
          </Cart>
          <Cart variant="cart_about">
            <div className="inline_cart_items arrow_cart">
              <img
                src={Arrow}
                alt="rocket icon"
                className="arrow about_cart_icon"
              />
              <p className="about_cart_text">
                Use strategy to maximize your winnings
              </p>
            </div>
          </Cart>
        </div>
      </section>
      <section className="about_aviator">
        <img src={Phones} alt="aviator phone icon" className="phones" />
        <p className="about_aviator_information">
          Aviator offers single and double betting modes, auto bet and auto
          cash-out features, and detailed game statistics—giving players full
          control over their strategy. Whether you’re a high-risk thrill-seeker
          or a cautious strategist, Aviator delivers an unmatched gaming
          experience.
        </p>
      </section>
      <div className="radial_cont">
        <div className="first">
          <Radial />
        </div>
        <div className="second">
          <Radial />
        </div>
        <div className="third">
          <Radial />
        </div>
      </div>
    </article>
  );
};

export default AbouUs;
