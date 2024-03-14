import React from "react";
import ReactDOM from "react-dom/client";
// import NewBadge from "./pages/NewBadge";
import Badges from "./pages/Badges";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Badges />
  </React.StrictMode>
);
