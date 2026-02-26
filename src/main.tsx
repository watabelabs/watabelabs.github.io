import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WatabeLabs from "./WatabeLabs";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WatabeLabs />
  </StrictMode>,
);
