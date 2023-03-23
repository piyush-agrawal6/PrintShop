import React from "react";
import "./Checkout.css";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkoutBox">
        <div>
          <h3>Delivery Address</h3>
          <div>
            <p>Name</p>
            <p>Pin , Area</p>
            <p>City , State</p>
            <p>Country</p>
            <p>Phone Number</p>
          </div>
          <diV>
            <h3>Add new Delivery Address</h3>
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
          </diV>
        </div>
        <div>
          <div>
            <h3>Coupon Code</h3>
            <input /> <button>APPLY</button>
          </div>
          <div>
            <p>Price - xxxx rs</p>
            <p>GST - xxxx rs</p>
            <p>Total - xxxx rs</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
