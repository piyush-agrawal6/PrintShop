import React from "react";
import Log from "../../Components/Login/Log";

const Orders = () => {
  const login = false;
  if (!login) {
    return <Log />;
  }
  return <div>Orders</div>;
};

export default Orders;
