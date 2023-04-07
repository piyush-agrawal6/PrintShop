import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/navbar/Navbar";
// import Checkout from "../Pages/checkout/Checkout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Otp from "../Pages/login/Otp";
import Signup from "../Pages/login/Signup";
import Product from "../Pages/product/Product";
import SingleProduct from "../Pages/product/SingleProduct";
import Profile from "../Pages/profile/Profile";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        {/* <Route path="/checkout" element={<Checkout />}></Route> */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
