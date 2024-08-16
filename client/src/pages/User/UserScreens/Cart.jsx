import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar1";
import { fetchCart } from "../../../services/cart"; // Import fetchCart service method
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useState([]); // State to hold the cart items
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  const navigate = useNavigate();
  useEffect(() => {
    const getCart = async () => {
      try {
        const { data, status } = await fetchCart();
        if (status === 200) {
          setCart(data);
        } else {
          toast.error("Cart is empty");
          setTimeout(() => {
            navigate("/customer");
          }, 4000);
        }
      } catch (error) {
        setError("An error occurred while fetching the cart");
      } finally {
        setLoading(false);
      }
    };

    getCart();
  }, []);

  const calculateSubtotal = () => {
    return cart.subOrder !== undefined
      ? cart.subOrder
          .reduce(
            (acc, item) =>
              acc + parseFloat(item.quantity * item.offering.price),
            0
          )
          .toFixed(2)
      : 0;
    return 0;
  };

  const deliveryCost = 5.0;
  const total = parseFloat(calculateSubtotal()) + deliveryCost;

  const handleProceedToCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.Quantity += 1;
        return [...prevCart];
      }
      return [...prevCart, item];
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          {/* Left half of the screen - Cart Items */}
          <div className="col-md-5">
            <div className="row">
              {cart !== undefined && cart.subOrder !== undefined ? (
                cart.subOrder.map((item) => (
                  <div className="col-md-6 mb-3" key={item.offering.id}>
                    <div className="card" style={{ width: "100%" }}>
                      <img
                        src={item.offering.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.offering.name}</h5>
                        <p className="card-text">Quantity: {item.quantity}</p>
                        <p className="card-text">Cost: {item.offering.price}</p>
                        <div className="d-flex justify-content-between">
                          {item.quantity > 1 ? (
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                handleRemoveFromCart(item.offering.id)
                              }
                            >
                              Remove All
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() =>
                                handleRemoveFromCart(item.offering.id)
                              }
                            >
                              Remove
                            </button>
                          )}
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() =>
                              handleAddToCart({
                                id: item.offering.id, // Use the original product ID
                                name: item.offering.name,
                                price: parseFloat(item.offering.price),
                              })
                            }
                          >
                            Add More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          </div>
          {/* Divider line */}
          <div className="col-md-1 d-flex align-items-center justify-content-center">
            <div
              style={{ height: "100%", borderLeft: "1px solid black" }}
            ></div>
          </div>
          {/* Right half of the screen - Cart Summary */}
          <div className="col-md-6">
            <div className="card mt-4 shadow-sm" style={{ padding: "20px" }}>
              <h5 className="card-title mb-4">Cart Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Delivery Cost:</span>
                <span>${deliveryCost.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>Total:</h5>
                <h5>${total.toFixed(2)}</h5>
              </div>
              <Link
                to="/customer/checkout"
                className="btn btn-success w-100 mt-4"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
