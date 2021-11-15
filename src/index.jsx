import React from "react";
import ReactDOM from "react-dom";
import logo from './react.png';

/**
Challenge: (COMPLETE)

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
 */

function Header() {
  return (
    <header>
        <nav>
          <img alt="" src={logo} width="65px" />
        </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2021 roboturner development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
  return (
    <div>
      <h2>Am I going to be Awesome, Or am I already?</h2>
      <ol>
        <li>It's fast</li>
        <li>Maintained by Meta</li>
        <li>Meta is the FUTURE</li>
        <li>But really, if there is a future they are gonna be a huge part of it.</li>
      </ol>
    </div>
  )
}

function AlreadyKnow() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
};

const root = document.getElementById('root');

ReactDOM.render(<AlreadyKnow />, root);