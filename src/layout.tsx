import React from "react";
import Navbar from "./Components/Navbar/navbar.tsx";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
