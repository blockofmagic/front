//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// This serves as an entry point to the DOM and server renderers for React
import ReactDOM from "react-dom";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Style sheet
// Root SCSS file
import "./index.scss";
//> Components
// Root component
import App from "./App";
//> Service Worker
import * as serviceWorker from "./serviceWorker";
//#endregion

//Render the root component to <div id="root"></div>
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
