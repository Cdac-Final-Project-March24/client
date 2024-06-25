import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const deals = [
    {
        name: 'Summer Sale',
        description: 'Get up to 50% off on summer collection.',
        discount: '50%',
        validity: 'Valid until June 30, 2024',
    },
    {
        name: 'New User Offer',
        description: 'Flat 30% off on your first purchase.',
        discount: '30%',
        validity: 'Valid for first-time users only',
    },
    {
        name: 'Festive Discount',
        description: 'Enjoy a special 25% discount this festive season.',
        discount: '25%',
        validity: 'Valid until December 31, 2024',
    },
  
];

const DealsOffer = () => {
    return (
        <div className="container">
            <h5 className="mb-4">Deals and Offers</h5>
            {deals.map((deal, index) => (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h6 className="card-title">{deal.name}</h6>
                        <p className="card-text">{deal.description}</p>
                        <div className="d-flex justify-content-between">
                            <span className="text-danger font-weight-bold">Discount: {deal.discount}</span>
                            <span className="text-muted">{deal.validity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DealsOffer;
