import React, { useState } from 'react';

const UPI = () => {
    const [upiId, setUpiId] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        alert(`Proceeding with payment for UPI ID: ${upiId} with amount: ${amount}`);
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
            <div className="form-group mb-3">
                <label htmlFor="amount">Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
            </div>
            <button
                className="btn btn-primary btn-lg w-100"
                onClick={handlePayment}
                disabled={!upiId || !amount}
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
