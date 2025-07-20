import { Planeimg } from "../../Route/Route";
import "./Concept.scss"

const Concept = () => {
  return (
    <article className="concept_container">
      <section className="concept_aviator">
        <p className="aviator_official">The Official</p>
        <p className="aviator_game">Aviator Game</p>
        <p className="concept_upper_text">
          Aviator, the original crash game, delivers a thrilling experience
          built on a foundation of fairness, security, and gameplay integrity.
          One and only fully licensed Aviator brand establishes a trusted
          environment where players can engage with confidence. It's more than
          just a game. It's a community-driven experience that sets the standard
          for high-adrenaline gameplay.
        </p>
        <p className="concept_down_text">
          Aviator Studio, through the official licensed Aviator branding, is
          committed to expanding this experience with new and innovative games
          in the future, continuing to push the boundaries of online gaming.
        </p>
      </section>
      <section className="concept_icon">
        <img src={Planeimg} alt="aviator studio airplane" className="aviator_stidio_image"/>
      </section>
    </article>
  );
};

export default Concept;
