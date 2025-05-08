import React, { useState, useEffect } from "React";
import "./Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <header className="st-header flex flex-row justify-between items-center bg-white/80 backdrop-blur-md border-b py-4 px-2">
        <div className="font-bold text-xl">
          <a href="#home">Nyunt Sein</a>
        </div>
        <nav className="st-menu">
          {expanded ? (
            <ul className="st-main-menu flex space-x-8">
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
            <button className="st-menu-icon">
              {" "}
              <i className="fa-regular fa-bars"></i>{" "}
            </button>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
