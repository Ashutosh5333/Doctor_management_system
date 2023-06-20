import React from "react";
import { Navigate } from "react-router-dom";

const Adminprivate = ({ children }) => {
  const userdata = JSON.parse(localStorage.getItem("Admin"));
  const Authenticate = userdata ? true : false;

  return Authenticate ? children : <Navigate to="/adminlogin" replace />;
};

export default Adminprivate;
