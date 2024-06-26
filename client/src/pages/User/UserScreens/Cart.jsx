import { Link } from "react-router-dom";
import Navbar from "../components/Navbar1";

const Cart = () => {
  const cartItems = [
    {
      name: "Product Name",
      Quantity: 1,
      pricePayable: "$24",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Service Name",
      Quantity: 1,
      pricePayable: "$24",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product Name",
      Quantity: 1,
      pricePayable: "$24",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Service Name",
      Quantity: 1,
      pricePayable: "$24",
      image: "https://via.placeholder.com/150",
    },
  ];

  // Function to calculate subtotal of cart items
  const calculateSubtotal = () => {
    return cartItems
      .reduce(
        (acc, item) => acc + parseFloat(item.pricePayable.replace("$", "")),
        0
      )
      .toFixed(2);
  };

  const deliveryCost = 5.0;
  const total = parseFloat(calculateSubtotal()) + deliveryCost;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-4">
          {/* Left half of the screen - Cart Items */}
          <div className="col-md-5">
            <div className="row">
              {cartItems.map((element, index) => (
                <div className="col-md-6 mb-3" key={index}>
                  <div className="card" style={{ width: "100%" }}>
                    <img
                      src={element.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">Quantity: {element.Quantity}</p>
                      <p className="card-text">Cost: {element.pricePayable}</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary btn-sm">
                          Remove
                        </button>
                        <button className="btn btn-primary btn-sm">
                          Add More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
