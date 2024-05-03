import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main-content min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
