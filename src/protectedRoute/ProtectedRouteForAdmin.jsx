/* eslint-disable react/prop-types */
import { Navigate } from "react-router";
export const ProtectedRouteForAdmin = ({ children }) => {
  const role = localStorage.getItem("userRole");
  if (role === "admin") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
