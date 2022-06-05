import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Account from "../pages/Account";
const ProtectedRoute = () => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return <Account />;
  }
};

export default ProtectedRoute;
