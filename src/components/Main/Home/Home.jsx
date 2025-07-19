import { Button } from "../../Button/Button";
import { Plane } from "../../Route/Route";
import "./Home.scss";

const Home = () => {
  return (
    <article className="home_container">
      <section className="aviato_studio_info">
        <h1 className="aviator_studio_head">Aviator Studio –</h1>
        <p className="aviator_studio_game">
          The Original Crash Game Experience
        </p>
        <p className="aviator_studio">
          Aviator Studio is a game provider focused on delivering engaging and
          innovative gaming experiences, starting with the game Aviator. This
          game is crafted with a unique multiplayer experience, thrilling
          high-RTP gameplay, and an engaging visual & sound design that sets it
          apart.
        </p>
        <Button variant="contact_us">Contact Us</Button>
      </section>
      <section className="aviator_studio_icon">
        <img src={Plane} alt="aviator studio airplane" className="airplane"/>
      </section>
    </article>
  );
};

export default Home;
