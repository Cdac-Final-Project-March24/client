import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { addToCart } from '../../../../services/cart'; // Import the service methods
import { getLatestOfferings } from '../../../../services/offering';

const LatestProducts = ({ id }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestOfferings = async () => {
            try {
                const response = await getLatestOfferings(id, 'product');
                if (response.status === 200) {
                    setProducts(response.data);
                } else {
                    setError(response.message);
                }
            } catch (error) {
                setError('Failed to fetch latest products');
            } finally {
                setLoading(false);
            }
        };

        fetchLatestOfferings();
    }, [id]);

    const handleAddToCart = async (product) => {
        try {
            const cartDto = {
                businessId: id,
                offeringId: product.id,
                // Add other required fields here if any
            };

            const response = await addToCart(cartDto);

            if (response.status === 201) {
                toast.success(`${product.name} added to cart!`);
            } else {
                toast.error('Failed to add to cart');
            }
        } catch (error) {
            toast.error('An error occurred while adding to cart');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container my-4">
            <h5 className="mb-4">Latest Products</h5>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100">
                            <Link to={`/customer/business/product/${product.name}`} style={{ textDecoration: 'none' }}>
                                <div className="card-body d-flex flex-column">
                                    <h6 className="card-title">{product.name}</h6>
                                    <p className="card-text">{product.description}</p>
                                    <div className="mt-auto">
                                        <p className="text-primary font-weight-bold">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="card-footer">
                                <button 
                                    className="btn btn-primary w-100"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent click event from bubbling up to the Link component
                                        handleAddToCart(product);
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

export default LatestProducts;
