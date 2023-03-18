import React from "react";
import "./ProComp.css";
import { Link } from "react-router-dom";
const ProComp = ({ product }) => {
  const { images, title, set, price, off_price, discount, _id: id } = product;
  return (
    <div className="itemBox">
      <Link color="a" to={`/product/${id}`}>
        <div className="itemImage">
          <img src={images[0]} alt="ProductImage" />
        </div>
        <div className="itemDetails">
          <h4>{title}</h4>
          {set > 1 ? (
            <div>
              {set} starting at Rs. {price}
            </div>
          ) : (
            <div>
              Rs. {price} <s>Rs. {off_price}</s> <span>({discount}% OFF)</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProComp;
