import { Button, IframeLogo } from "../../Route/Route";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import "./IframeHeader.scss";

const IframeHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = (setter, currentValue) => {
    setter(!currentValue);
  };

  return (
    <header className="iframe_header_container">
      <section className="iframe_main_header">
        <img src={IframeLogo} alt="aviator studio logo" className="logo" />
        <div className="balance_and_menu">
          <div className="current_balance_cont">
            <p className="current_balance">1,000.00</p>
            <p className="current_balance_currency">GEL</p>
          </div>
          <Button
            variant="menu"
            onClick={() => toggleMenu(setOpenMenu, openMenu)}
          >
            {openMenu ? <IoClose /> : <IoIosMenu />}
          </Button>
        </div>
      </section>
      <section className="round_hitory_container">
        <div className="full_round_history">
          <Button variant="round_history">1.00</Button>
        </div>
        <Button variant="show_round_history">
          <FaAngleDown />
        </Button>
      </section>
    </header>
  );
};

export default IframeHeader;
