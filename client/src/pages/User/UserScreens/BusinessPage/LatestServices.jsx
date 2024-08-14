import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../../../components/CartContext'; // Import CartContext
import { toast, ToastContainer } from 'react-toastify';

const services = [
    { id: 1, name: 'Service 1', description: 'This is a short description of Service 1.', price: 100 },
    { id: 2, name: 'Service 2', description: 'This is a short description of Service 2.', price: 150 },
    { id: 3, name: 'Service 3', description: 'This is a short description of Service 3.', price: 120 },
    { id: 4, name: 'Service 4', description: 'This is a short description of Service 4.', price: 200 },
    // Add more services as needed
];

const LatestServices = () => {
    const { addToCart } = useContext(CartContext); // Access addToCart from context

    const handleAddToCart = (service) => {
        // Handle add to cart logic here
        toast.success(`${service.name} added to cart!`);
        addToCart(service); // Add service to cart
    };

    return (
        <div className="container my-4">
            <h5 className="mb-4">Latest Services</h5>
            <div className="row">
                {services.map((service) => (
                    <div className="col-md-3 mb-4" key={service.id}>
                        <div className="card h-100">
                            <Link to={`/customer/business/service/${service.name}`} style={{ textDecoration: 'none' }}>
                                <div className="card-body d-flex flex-column">
                                    <h6 className="card-title">{service.name}</h6>
                                    <p className="card-text">{service.description}</p>
                                    <div className="mt-auto">
                                        <p className="text-primary font-weight-bold">${service.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="card-footer">
                                <button 
                                    className="btn btn-primary w-100"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent click event from bubbling up to the Link component
                                        handleAddToCart(service);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer/>
        </div>
    );
};

export default LatestServices;
