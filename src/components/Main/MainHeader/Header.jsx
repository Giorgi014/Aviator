import { Button, Logo } from "../../Route/Route.jsx";
import "./Header.scss";

const header = () => {
  return (
    <header>
      <section className="header_container">
        <img src={Logo} alt="aviator studio logo" className="logo" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Concept</li>
          <li>Why Us?</li>
          <li>FAQ</li>
        </ul>
        <Button variant="demo">Demo</Button>
      </section>
    </header>
  );
};

export default header;
