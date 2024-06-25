import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
    {
        name: 'Service 1',
        description: 'This is a short description of Service 1.',
        price: 100,
    },
    {
        name: 'Service 2',
        description: 'This is a short description of Service 2.',
        price: 150,
    },
    {
        name: 'Service 3',
        description: 'This is a short description of Service 3.',
        price: 120,
    },
    {
        name: 'Service 4',
        description: 'This is a short description of Service 4.',
        price: 200,
    },
    // Add more services as needed
];

const LatestServices = () => {
    const addToCart = (service) => {
        // Handle add to cart logic here
        alert(`${service.name} added to cart!`);
    };

    return (
        <div className="container my-4">
            <h5 className="mb-4">Latest Services</h5>
            <div className="row">
                {services.map((service, index) => (
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

export default LatestServices;
