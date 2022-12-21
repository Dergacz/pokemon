import React, { FC } from 'react';

const Header: FC = () => {
  const logo = require('../../../public/images/Pokeball.png');
  return (
    <div className="header-wrapper">
      <img 
        className="header-logo"
        src={logo} 
        alt="logo"
      />
      <h1 className="header-title">Pokedex</h1>
    </div>
  );
};

export default Header;
