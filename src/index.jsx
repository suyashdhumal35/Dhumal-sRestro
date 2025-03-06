import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App.jsx";
import Footer from "./components/Footer.jsx";
import Sponsors from "./components/Sponsors.jsx";
import AppRoute from "./components/AppRoute.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <AppRoute />
      <Sponsors />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
