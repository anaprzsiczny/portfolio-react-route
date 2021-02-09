import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header row">
      <p className="headeritem">
        <Link to="/">Home</Link>
      </p>
      <p className="headeritem">
        <Link to="/contato">Contato</Link>
      </p>
      <p className="headeritem">
        <Link to="/portfolio">Portfolio</Link>
      </p>
    </div>
  );
}

export default Header;