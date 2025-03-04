import React ,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import Sponsors from './components/Sponsors.jsx'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantDetail from "./components/RestaurantDetail.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Body/>
    <Sponsors/>
    <Footer/>
  </StrictMode>,
)


