import React from "react";
import "./Wishlist.css";
import Log from "../../Components/Login/Log";
const Wishlist = () => {
  const login = false;
  if (!login) {
    return <Log />;
  }

  return <div>Wishlist</div>;
};

export default Wishlist;
