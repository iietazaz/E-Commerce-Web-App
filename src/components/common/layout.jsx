import React from "react";
import TopHeader from "../header/TopHeader";
import Footer from "../Footer";

const Layout = ({children}) => {
  return (
    <div className="w-full bg-[#1e28320d] h-full">
      <TopHeader />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
