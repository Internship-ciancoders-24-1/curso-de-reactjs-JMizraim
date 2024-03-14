import React from "react";
import ReactDOM from "react-dom/client";

const jsx = (
  <div>
    <h1>Soy Mizraim</h1>
    <p>Estoy aprendiendo React</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Soy Mizraim"),
  React.createElement("p", {}, "Estoy aprendiendo React")
);

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(element);