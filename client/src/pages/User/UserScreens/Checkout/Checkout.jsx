import React from 'react';
import Navbar from "../../components/Navbar1";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PayPal from "./PayPal"
import UPI from "./UPI"
import DebitCard from "./DebitCard"

const Checkout = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const cartItems = [
        { name: 'Product 1', price: 20 },
        { name: 'Product 2', price: 30 },
        { name: 'Service 1', price: 15 },
        { name: 'Service 2', price: 25 },
    ];

    const deliveryCost = 5.00;

    const renderPaymentMethod = () => {
        switch (selectedPaymentMethod) {
            case 'PayPal':
                return <PayPal />;
            case 'DebitCard':
                return <DebitCard />;
            case 'UPI':
                return <UPI />;
            default:
                return <h5>Please select a payment method</h5>;
        }
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
                                        onClick={() => setSelectedPaymentMethod('PayPal')}
                                    >
                                        PayPal
                                    </button>
                                    <button
                                        className="btn btn-light btn-lg mb-2"
                                        onClick={() => setSelectedPaymentMethod('DebitCard')}
                                    >
                                        Debit Card
                                    </button>
                                    <button
                                        className="btn btn-light btn-lg mb-2"
                                        onClick={() => setSelectedPaymentMethod('UPI')}
                                    >
                                        UPI
                                    </button>
                                </div>
                                <div className="selected-payment">
                                    {renderPaymentMethod()}
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