import React from "react";
import "./Log.css";
import { Link } from "react-router-dom";
const Log = () => {
  return (
    <div className="notLogin">
      <h3>PLEASE LOG IN</h3>
      <p>Login to view items in your wishlist.</p>
      <img src="./assets/login.png" alt="img" />
      <Link to="/signup">
        <button>LOGIN</button>
      </Link>
    </div>
  );
};

export default Log;
