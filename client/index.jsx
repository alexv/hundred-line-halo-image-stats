import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./app.jsx";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: #D4E0EB;
    font-family: 'Rajdhani', sans-serif;
    color: #5b717e;
  }
  #app-root {
    height: 100%;
  }
`;

ReactDOM.render(<App />, document.getElementById("app-root"));
