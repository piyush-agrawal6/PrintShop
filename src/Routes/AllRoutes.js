import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/footer/Footer";
import Navbar from "../Components/navbar/Navbar";
import Admin from "../Pages/admin/Admin";
import Bag from "../Pages/bag/Bag";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
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
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/bag" element={<Bag />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
