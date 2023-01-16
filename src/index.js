import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./style/allcontent.css";
import "./style/header.css";
import "./style/menu.css";
import "./style/hello.css";
import "./style/activity.css";
import "./style/timing.css";
import "./style/radar.css";
import "./style/burning.css";
import "./style/objectif.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
