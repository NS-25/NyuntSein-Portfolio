import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <header className="st-header">
        <div className="head-name">
          <a href="#home">Nyunt Sein</a>
        </div>
        <nav className="st-menu">
          {expanded ? (
            <ul className="st-main-menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          ) : (
            <button className="st-menu-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
