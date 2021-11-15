import React from 'react';
import logo from './react.png';

export default function Header() {
    return (
      <header>
          <nav className="nav">
            <img className="navImage tilt" alt="" src={logo} />
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
      </header>
    )
  };