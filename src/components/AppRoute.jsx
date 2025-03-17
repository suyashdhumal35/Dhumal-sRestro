// src/components/AppRoute.jsx
import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import RestaurantDetail from "./RestaurantDetail";
// import Home from "./App";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";

const AppRoute = () => {
  return (
    <Routes>
            {/* <Route path="/" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Body />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
    </Routes>
  );
};

export default AppRoute;
