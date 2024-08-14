import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const PayPal = () => {
    const [email, setEmail] = useState('');

    const handlePayment = () => {
        // Handle payment logic here
        toast.info(`Proceeding with payment for PayPal email: ${email}`);
    };

    return (
        <div>
            <h5>PayPal Payment</h5>
            <div className="form-group mb-3">
                <label htmlFor="email">PayPal Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your PayPal email"
                />
            </div>
            <button
                className="btn btn-primary btn-lg w-100"
                onClick={handlePayment}
                disabled={!email}
            >
                Proceed with Payment
            </button>
            <p className="mt-3 text-muted">
                Please ensure that your PayPal email is correct before proceeding.
            </p>
            <ToastContainer/>
        </div>
    );
};

export default PayPal;
