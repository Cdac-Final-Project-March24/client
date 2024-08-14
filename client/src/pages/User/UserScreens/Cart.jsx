import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar1';
import { CartContext } from '../../../../src/components/CartContext'; // Import CartContext

const Cart = () => {
  const { cart, removeFromCart, addToCart } = useContext(CartContext); // Access cart, removeFromCart, and addToCart from context

  const calculateSubtotal = () => {
    return cart
      .reduce(
        (acc, item) => acc + parseFloat(item.Quantity * item.pricePayable.replace('$', '')),
        0
      )
      .toFixed(2);
  };

  const deliveryCost = 5.0;
  const total = parseFloat(calculateSubtotal()) + deliveryCost;

  const handleProceedToCheckout = () => {
    // Store cart data in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cart));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          {/* Left half of the screen - Cart Items */}
          <div className="col-md-5">
            <div className="row">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div className="col-md-6 mb-3" key={item.id}>
                    <div className="card" style={{ width: '100%' }}>
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Quantity: {item.Quantity}</p>
                        <p className="card-text">Cost: {item.pricePayable}</p>
                        <div className="d-flex justify-content-between">
                          {item.Quantity > 1
                            ? <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove All</button>
                            : <button className="btn btn-primary btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                          }
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => addToCart({
                              id: item.productId, // Use the original product ID
                              name: item.name,
                              price: parseFloat(item.pricePayable.replace('$', '')),
                            })}
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
              style={{ height: '100%', borderLeft: '1px solid black' }}
            ></div>
          </div>
          {/* Right half of the screen - Cart Summary */}
          <div className="col-md-6">
            <div className="card mt-4 shadow-sm" style={{ padding: '20px' }}>
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
