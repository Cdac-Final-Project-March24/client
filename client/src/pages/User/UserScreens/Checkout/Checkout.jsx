import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar1";
import { Link } from 'react-router-dom';
import PayPal from "./PayPal";
import UPI from "./UPI";
import DebitCard from "./DebitCard";

const Checkout = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const deliveryCost = 5.00;

    useEffect(() => {
        // Retrieve cart items from localStorage
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

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

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.Quantity * parseFloat(item.pricePayable.replace('$', ''))), 0) + deliveryCost;
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
                                        <span>${(item.Quantity * parseFloat(item.pricePayable.replace('$', ''))).toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Delivery Cost:</span>
                                    <span>${deliveryCost.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Total:</span>
                                    <span>${calculateTotal().toFixed(2)}</span>
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
