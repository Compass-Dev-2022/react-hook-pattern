import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Global from "./pattern/GlobalContext/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Global>
    <App />
  </Global>
);
