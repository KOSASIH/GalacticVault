import React from 'eact';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Showcase</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <div className="logo">
        <img src={require('../images/logo.svg')} alt="GalacticVault Logo" />
      </div>
    </header>
  );
};

export default Header;
