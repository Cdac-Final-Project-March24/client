import React, { useEffect, useState } from "react";
import Order from "./Order";
import { getBusiness } from "../../../services/business";
import { useNavigate } from "react-router-dom";
import { getOrdersByBusiness } from "../../../services/order";

const Orders = () => {
  const business = JSON.parse(
    sessionStorage["business"] ? sessionStorage["business"] : "{}"
  );
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await getOrdersByBusiness(business.id);
      if (result.status === 200) setOrders(result.data);
    })();
  }, []);

  return (
    <div className="d-flex flex-column gap-3 my-3 " style={{ width: "60%" }}>
      {orders &&
        orders.map((item, index) => {
          return <Order key={index} order={item} />;
        })}
    </div>
  );
};

export default Orders;
