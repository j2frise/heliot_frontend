// =========================================================
// * Gestion contact
// =========================================================

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/heliot.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <Main />
  </HashRouter>,
  document.getElementById("root")
);
