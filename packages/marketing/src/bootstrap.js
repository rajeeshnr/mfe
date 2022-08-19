import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// For development in isolalation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// When running through container. we should export the mount function

export { mount };
