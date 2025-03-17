// src/components/PrivateRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth ";

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/signin" />}
    />
  );
};

export default PrivateRoute;
