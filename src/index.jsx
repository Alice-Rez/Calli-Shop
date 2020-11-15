import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import calliStore from "./redux/store";

ReactDOM.render(
  <Provider store={calliStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
