import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // Import the Provider from react-redux
import store from "./redux/store"; // Import the store from redux/store
import "./index.css";
import App from "./components/App.jsx";
import Footer from "./components/Footer.jsx";
import Sponsors from "./components/Sponsors.jsx";
import AppRoute from "./components/AppRoute.jsx";
import { AuthProvider } from "./contexts/useAuth .jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your entire app with the Redux Provider */}
      <AuthProvider> {/* Wrap with AuthProvider */}
        <BrowserRouter>
          <App />
          <AppRoute />
          <Sponsors />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </StrictMode>
);
