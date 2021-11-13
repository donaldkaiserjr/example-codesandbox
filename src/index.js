import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import AppAPI from "./APIs/AppAPI";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppAPI />
    {/* <App /> */}
  </StrictMode>,
  rootElement
);
