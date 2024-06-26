import React, { useState } from 'react';

const DebitCard = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePayment = () => {
        alert(`Proceeding with payment for card: ${cardNumber}`);
    };

    return (
        <div>
            <h5>Debit Card Payment</h5>
            <div className="form-group mb-3">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Enter your card number"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="cardHolder">Cardholder's Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="cardHolder"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    placeholder="Enter cardholder's name"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="cvv">CVV</label>
                <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="Enter CVV"
                />
            </div>
            <button
                className="btn btn-primary btn-lg w-100"
                onClick={handlePayment}
                disabled={!cardNumber || !cardHolder || !expiryDate || !cvv}
            >
                Proceed with Payment
            </button>
            <p className="mt-3 text-muted">
                Please ensure that your card details are correct before proceeding.
            </p>
        </div>
    );
};

export default DebitCard;
