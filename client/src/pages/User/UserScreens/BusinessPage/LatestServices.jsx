import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { addToCart } from '../../../../services/cart'; 
import {getLatestOfferings} from '../../../../services/offering'

const LatestServices = ({ id }) => {
    const [services, setServices] = useState([]); // State to hold the services
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchLatestServices = async () => {
            try {
                const response = await getLatestOfferings(id, 'service'); // Call the service method
                if (response.status === 200) {
                    setServices(response.data); // Set the services data from API
                } else {
                    setError(response.message); // Set error message if status is not 200
                }
            } catch (error) {
                setError('Failed to fetch latest services'); // Set error message if request fails
            } finally {
                setLoading(false); // Set loading to false when done
            }
        };

        fetchLatestServices();
    }, [id]); // Dependency array includes `id` to refetch if it changes

    const handleAddToCart = async (service) => {
        try {
            const cartDto = {
                businessId: id,
                offeringId: service.id,
                // Add other required fields here if any
            };

            const response = await addToCart(cartDto); // Call the Axios service method to add to cart

            if (response.status === 201) {
                toast.success(`${service.name} added to cart!`); // Show success message
            } else {
                toast.error('Failed to add to cart'); // Show error message
            }
        } catch (error) {
            toast.error('An error occurred while adding to cart'); // Show error message if request fails
        }
    };

    if (loading) return <p>Loading...</p>; // Show loading message
    if (error) return <p>Error: {error}</p>; // Show error message

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
            <ToastContainer />
        </div>
    );
};

export default LatestServices;
