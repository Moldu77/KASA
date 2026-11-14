import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import Router from "./router/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
