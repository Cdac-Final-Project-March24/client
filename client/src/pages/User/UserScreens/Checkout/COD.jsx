import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { placeOrder } from "../../../../services/cart";
import { useNavigate } from "react-router-dom";

const COD = ({ id }) => {
  const navigate = useNavigate();
  const handlePayment = async () => {
    const result = await placeOrder(id, {
      type: "COD",
      status: true,
    });
    if (result.status === 201) {
      toast.success("Order placed successfully");
      navigate("/customer");
    } else toast.error(result.message);
  };
  return (
    <div>
      <h5>Cash On Delivery</h5>
      <button className="btn btn-primary btn-lg w-100" onClick={handlePayment}>
        Proceed with Payment
      </button>
    </div>
  );
};

export default COD;
