const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="font-bold text-xl">
          <a href="#home">Nyunt Sein</a>
        </div>
        <div className="menu">
          <ul className="flex space-x-8">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
