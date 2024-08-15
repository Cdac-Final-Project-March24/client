import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import { getMostPreferredOfferings } from '../../../../services/business'; // Import the service method
import { addToCart } from '../../../../services/cart'; // Import the Axios service method for adding to cart

const MostPreferredProducts = ({ id }) => {
    const [products, setProducts] = useState([]); // State to hold the products
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const type = 'MostPreferredProduct'; // Assuming 'PRODUCT' is the type for most preferred products

    useEffect(() => {
        const fetchMostPreferredProducts = async () => {
            try {
                const { data, status } = await getMostPreferredOfferings(id, type);
                if (status === 200) {
                    setProducts(data); // Set the products data from API
                } else {
                    setError('Failed to fetch most preferred products');
                }
            } catch (err) {
                setError('An error occurred while fetching products');
            } finally {
                setLoading(false);
            }
        };

        fetchMostPreferredProducts();
    }, [id]);

    const handleAddToCart = async (product) => {
        try {
            // Construct the DTO object
            const cartDto = {
                businessId: id,
                offeringId: product.id,
                // Add other required fields here if any
            };

            const { data, status } = await addToCart(cartDto);

            if (status === 201) {
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
            <h5 className="mb-4">Most Preferred Products</h5>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-3 mb-4" key={product.id}>
                        <div className="card h-100">
                            <Link to={`/customer/business/product/${product.name}`} className="text-decoration-none">
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

export default MostPreferredProducts;
