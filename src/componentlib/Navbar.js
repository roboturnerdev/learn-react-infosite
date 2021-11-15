import React from 'react';
import reactLogo from '../images/react.png';

export default function Navbar() {
    return (
        <nav>
            <img className="tilt nav--image" alt="" src={reactLogo} />
            <h3 className="nav--logotext">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}