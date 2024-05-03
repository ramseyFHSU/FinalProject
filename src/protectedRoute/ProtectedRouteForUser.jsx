/* eslint-disable react/prop-types */
import { Navigate } from "react-router";

export const ProtectedRouteForUser = ({ children }) => {
  const role = localStorage.getItem("userRole");
  if (role === "user") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
