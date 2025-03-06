import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import RestaurantDetail from "./RestaurantDetail";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
    </Routes>
  );
};

export default AppRoute;
