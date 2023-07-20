import React from "react";
import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const HomePageLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-286px)] ">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default HomePageLayout;
