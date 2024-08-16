import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar1";
import { Link } from "react-router-dom";
import PayPal from "./PayPal";
import UPI from "./UPI";
import DebitCard from "./DebitCard";
import COD from "./COD";
import { ToastContainer } from "react-toastify";

const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const deliveryCost = 5.0;

  useEffect(() => {
    // Retrieve cart items from localStorage
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const renderPaymentMethod = () => {
    switch (selectedPaymentMethod) {
      case "PayPal":
        return <PayPal />;
      case "DebitCard":
        return <DebitCard />;
      case "UPI":
        return <UPI id={cartItems.id} />;
      case "COD":
        return <COD id={cartItems.id} />;
      default:
        return <h5>Please select a payment method</h5>;
    }
  };

  const calculateTotal = () => {
    return cartItems.subOrder !== undefined
      ? cartItems.subOrder
          .reduce(
            (acc, item) =>
              acc + parseFloat(item.quantity * item.offering.price),
            0
          )
          .toFixed(2)
      : 0;
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Select Payment Method:</h5>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-light btn-lg mb-2"
                    onClick={() => setSelectedPaymentMethod("PayPal")}
                  >
                    PayPal
                  </button>
                  <button
                    className="btn btn-light btn-lg mb-2"
                    onClick={() => setSelectedPaymentMethod("DebitCard")}
                  >
                    Debit Card
                  </button>
                  <button
                    className="btn btn-light btn-lg mb-2"
                    onClick={() => setSelectedPaymentMethod("UPI")}
                  >
                    UPI
                  </button>
                  <button
                    className="btn btn-light btn-lg mb-2"
                    onClick={() => setSelectedPaymentMethod("COD")}
                  >
                    COD
                  </button>
                </div>
                <div className="selected-payment">{renderPaymentMethod()}</div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cart Summary:</h5>
                {cartItems.subOrder &&
                  cartItems.subOrder.map((item, index) => (
                    <div
                      className="d-flex justify-content-between mb-2"
                      key={index}
                    >
                      <span>{item.offering.name}</span>
                      <span>${item.quantity * item.offering.price}</span>
                    </div>
                  ))}
                <div className="d-flex justify-content-between mb-2">
                  <span>Delivery Cost:</span>
                  <span>${deliveryCost.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Total:</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="mt-3">
                  <Link
                    to="/customer/cart"
                    className="btn btn-primary btn-lg w-100"
                  >
                    Update Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
