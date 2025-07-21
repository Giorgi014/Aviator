import { useEffect } from "react";
import { Cart, Button, Radial } from "../../Route/Route";
import "./WhyUs.scss";

const WhyUs = () => {
  useEffect(() => {
    const element = document.getElementById("why_us");

    if (window.location.hash === "#why_us") {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <article className="why_us_container" id="why_us">
      <p className="why_us_head">Why</p>
      <p className="why_us_text">Choose Aviator?</p>
      <section className="why_us_carts">
        <Cart variant="cart_choose">
          <p className="choose_cart">
            High RTP% for fair and exciting gameplay
          </p>
        </Cart>
        <Cart variant="cart_choose">
          <p className="choose_cart">
            Innovative single & double bet strategies
          </p>
        </Cart>
        <Cart variant="cart_choose">
          <p className="choose_cart">Auto cash-out & real-time statistics</p>
        </Cart>
        <Cart variant="cart_choose">
          <p className="choose_cart">Fully licensed brand</p>
        </Cart>
      </section>
      <section className="contact_us_container">
        <Cart variant="cart_contact">
          <div className="contact_us">
            <p className="contact_text">
              It’s time to experience the game as it was meant to be played.
              Join us and take off with Aviator—the original crash game!
            </p>
            <p className="contact_info_text">
              For business inquiries and casino partnerships, contact us at
            </p>
          </div>
          <Button variant="contact_us">Contact Us</Button>
        </Cart>
      </section>
      <div className="radial_cont">
        <div className="first">
          <Radial />
        </div>
        <div className="second">
          <Radial />
        </div>
      </div>
    </article>
  );
};

export default WhyUs;
