import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import Providers from "./components/Global/Providers.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>
);
