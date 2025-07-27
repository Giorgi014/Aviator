import { Button, IframeLogo } from "../../Route/Route";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./IframeHeader.scss";

const IframeHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const toggleMenu = (setter, currentValue) => {
    setter(!currentValue);
  };

  useEffect(() => {
    const historyElement = document.querySelector(".full_round_history");
    if (historyElement) {
      if (showHistory) {
        historyElement.classList.add("active");
      } else {
        historyElement.classList.remove("active");
      }
    }
  }, [showHistory]);

  const toggleHistory = () => {
    const history = !showHistory;
    setShowHistory(history);
  };

  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/");
  }

  return (
    <header className="iframe_header_container">
      <section className="iframe_main_header">
        <img src={IframeLogo} alt="aviator studio logo" className="logo" onClick={returnHome}/>
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
      <section className={showHistory ? "active" : "round_hitory_container"}>
        <div className="full_round_history">
          <p className="round_history_text">Round History</p>
          <Button variant="round_history">1.00</Button>
        </div>
        <div className="show_history_cont">
          <Button variant="show_round_history" onClick={toggleHistory}>
            {showHistory ? <IoClose /> : <FaAngleDown />}
          </Button>
        </div>
      </section>
    </header>
  );
};

export default IframeHeader;
