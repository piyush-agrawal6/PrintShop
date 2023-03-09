import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/navbar/Navbar";
import Home from "../Pages/Home/Home";
import Product from "../Pages/product/Product";
import SingleProduct from "../Pages/product/SingleProduct";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>{" "}
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
