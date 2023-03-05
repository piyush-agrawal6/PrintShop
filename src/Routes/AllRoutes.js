import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/navbar/Navbar";
import Home from "../Pages/Home/Home";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
