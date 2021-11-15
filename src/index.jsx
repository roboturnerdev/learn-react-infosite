import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import logo from './react.png';

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function AlreadyKnow() {
  return (
    <div>
      <header>
        <nav>
          <img alt="" src={logo} width="100px"></img>
        </nav>
        <h1>Am I going to be Awesome, Or am I already?</h1>
      </header>
      <ol>
        <li>It's fast</li>
        <li>Maintained by Meta</li>
        <li>Meta is the FUTURE</li>
        <li>But really, if there is a future they are gonna be a huge part of it.</li>
      </ol>
      <footer>
        © 2021 roboturner development. All rights reserved.
      </footer>
    </div>
  )
};

const root = document.getElementById('root');

ReactDOM.render(<AlreadyKnow />, root);












// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
