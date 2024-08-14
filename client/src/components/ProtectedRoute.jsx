import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const user = sessionStorage["token"];

  if (!user) {
    toast.error("Please login first");
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
