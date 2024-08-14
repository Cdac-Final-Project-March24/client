import React, { useEffect } from "react";
import Order from "./Order";
import { getBusiness } from "../../../services/business";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await getBusiness();
      if (result !== 200) navigate("/business/register");
    })();
  }, []);
  return (
    <div className="d-flex flex-column gap-3 my-3">
      <Order />
      <Order />
      <Order />
    </div>
  );
};

export default Orders;
