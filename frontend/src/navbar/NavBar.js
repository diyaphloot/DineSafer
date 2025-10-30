// Navbar component
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/title" className="navbar-logo">
          <span className="logo-text">DINESAFER</span>
        </NavLink>
        <div className={`nav-elements ${isOpen ? 'active' : ''}`}> 
          <div className="nav-links">
            <ul>
              <li><NavLink to="/violations" onClick={() => setIsOpen(false)}>Food Safety Violations</NavLink></li>
              <li><NavLink to="/alerts" onClick={() => setIsOpen(false)}>Future Plans</NavLink></li>
              <li><NavLink to="/apis" onClick={() => setIsOpen(false)}>APIs</NavLink></li>
              <li><NavLink to="/techstack" onClick={() => setIsOpen(false)}>TechStack</NavLink></li>
              <li><NavLink to="/foodborne" onClick={() => setIsOpen(false)}>Foodborne</NavLink></li>
            </ul>
          </div>
        </div> 
        </div>
    </nav>
  );
};

export default Navbar;
