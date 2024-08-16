import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { placeOrder } from "../../../../services/cart";
import { useNavigate } from "react-router-dom";

const UPI = ({ id }) => {
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();
  const handlePayment = async () => {
    const result = await placeOrder(id, {
      type: "UPI",
      status: true,
      upiId: upiId,
    });
    if (result.status === 201) {
      toast.success("Order placed successfully");
      navigate("/customer");
    } else toast.error(result.message);
  };

  return (
    <div>
      <h5>UPI Payment</h5>
      <div className="form-group mb-3">
        <label htmlFor="upiId">UPI ID</label>
        <input
          type="text"
          className="form-control"
          id="upiId"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          placeholder="Enter your UPI ID"
        />
      </div>
      <button
        className="btn btn-primary btn-lg w-100"
        onClick={handlePayment}
        disabled={!upiId}
      >
        Proceed with Payment
      </button>
      <p className="mt-3 text-muted">
        Please ensure that your UPI ID is correct before proceeding.
      </p>
    </div>
  );
};

export default UPI;
