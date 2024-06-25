import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const preferredServices = [
    {
        name: 'Preferred Service 1',
        description: 'This is a short description of Preferred Service 1.',
        price: 150,
    },
    {
        name: 'Preferred Service 2',
        description: 'This is a short description of Preferred Service 2.',
        price: 120,
    },
    {
        name: 'Preferred Service 3',
        description: 'This is a short description of Preferred Service 3.',
        price: 180,
    },
    {
        name: 'Preferred Service 4',
        description: 'This is a short description of Preferred Service 4.',
        price: 200,
    },
    // Add more preferred services as needed
];

const MostPreferredServices = () => {
    const addToCart = (service) => {
        // Handle add to cart logic here
        alert(`${service.name} added to cart!`);
    };

    return (
        <div className="container my-4">
            <h5 className="mb-4">Most Preferred Services</h5>
            <div className="row">
                {preferredServices.map((service, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title">{service.name}</h6>
                                <p className="card-text">{service.description}</p>
                                <div className="mt-auto">
                                    <p className="text-primary font-weight-bold">${service.price.toFixed(2)}</p>
                                    <button 
                                        className="btn btn-primary w-100"
                                        onClick={() => addToCart(service)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostPreferredServices;



