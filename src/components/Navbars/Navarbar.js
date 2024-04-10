import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.css';
import '../Style.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuStyle = {
    right: isMenuOpen ? '0' : '-200px'
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <h1><Link to="/"><span>A</span>  JAY</Link></h1>
        </div>
        {/* <i className={`fas fa-times non `} onClick={closeMenu}></i> */}
        <i className="fas fa-bars non" onClick={openMenu}></i>
        <ul id="sidemenu" style={menuStyle}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <i className={`fas fa-times non ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}></i>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
