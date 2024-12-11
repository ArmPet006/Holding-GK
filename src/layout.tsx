import React from "react";
import Navbar from "./Components/Navbar/navbar.tsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
