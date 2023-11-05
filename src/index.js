import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import App from "./App";
import ReactDOM from "react-dom";
import { App } from "./App.js";
import swDev from "./swDev.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// service worker
swDev();
