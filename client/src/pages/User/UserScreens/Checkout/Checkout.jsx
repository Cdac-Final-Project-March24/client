import React from 'react';
import Navbar from "../../components/Navbar1";
import { Link } from 'react-router-dom';

const Checkout = () => {

    const cartItems = [
        { name: 'Product 1', price: 20 },
        { name: 'Product 2', price: 30 },
        { name: 'Service 1', price: 15 },
        { name: 'Service 2', price: 25 },
    ];

    const deliveryCost = 5.00;

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
                                    <button className="btn btn-light btn-lg mb-2">PayPal</button>
                                    <button className="btn btn-light btn-lg mb-2">Debit Card</button>
                                    <button className="btn btn-light btn-lg mb-2">UPI</button>
                                </div>
                                <div className="selected-payment">
                                    <h5>Selected Payment Method UI</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Cart Summary:</h5>
                                {cartItems.map((item, index) => (
                                    <div className="d-flex justify-content-between mb-2" key={index}>
                                        <span>{item.name}</span>
                                        <span>${item.price.toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Delivery Cost:</span>
                                    <span>${deliveryCost.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Total:</span>
                                    <span>${(cartItems.reduce((acc, item) => acc + item.price, 0) + deliveryCost).toFixed(2)}</span>
                                </div>
                                <div className="mt-3">
                                    <Link to="/customer/cart" className="btn btn-primary btn-lg w-100">Update Cart</Link>
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
