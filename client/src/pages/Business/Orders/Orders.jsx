import React from "react";
import Order from "./Order";

const Orders = () => {
  return (
    <div className="d-flex flex-column gap-3 my-3">
      <Order />
      <Order />
      <Order />
    </div>
  );
};

export default Orders;
