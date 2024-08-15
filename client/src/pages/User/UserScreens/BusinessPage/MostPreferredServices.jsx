import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../../../components/CartContext'; // Import CartContext
import { toast, ToastContainer } from 'react-toastify';
import { getMostPreferredOfferings } from '../../../../services/business'; // Import the service method

const MostPreferredServices = ({ id }) => {
    const [services, setServices] = useState([]); // State to hold the services
    const { addToCart } = useContext(CartContext); // Access addToCart from context

    const type = 'MostPreferredService'; // Assuming 'MostPreferredService' is the type for most preferred services

    useEffect(() => {
        const fetchMostPreferredServices = async () => {
            try {
                const { data, status } = await getMostPreferredOfferings(id, type);
                if (status === 200) {
                    setServices(data); // Set the services data from API
                } else {
                    toast.error('Failed to fetch most preferred services');
                }
            } catch (error) {
                toast.error('An error occurred while fetching the services');
            }
        };

        if (id) {
            fetchMostPreferredServices();
        }
    }, [id]);

    const handleAddToCart = (service) => {
        toast.success(`${service.name} added to cart!`);
        addToCart(service); // Add service to cart (if applicable)
    };

    return (
        <div className="container my-4">
            <h5 className="mb-4">Most Preferred Services</h5>
            <div className="row">
                {services.map((service) => (
                    <div className="col-md-3 mb-4" key={service.id}>
                        <div className="card h-100">
                            <Link to={`/customer/business/service/${service.name}`} className="text-decoration-none">
                                <div className="card-body d-flex flex-column">
                                    <h6 className="card-title">{service.name}</h6>
                                    <p className="card-text">{service.description}</p>
                                    <div className="mt-auto">
                                        <p className="text-primary font-weight-bold">${service.price ? service.price.toFixed(2) : 'N/A'}</p>
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
            <ToastContainer />
        </div>
    );
};

export default MostPreferredServices;
