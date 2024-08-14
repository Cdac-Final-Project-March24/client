import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../../../components/CartContext';
import { toast, ToastContainer } from 'react-toastify';

const products = [
    { id: 1, name: 'Product 1', description: 'This is a short description of Product 1.', price: 20 },
    { id: 2, name: 'Product 2', description: 'This is a short description of Product 2.', price: 30 },
    { id: 3, name: 'Product 3', description: 'This is a short description of Product 3.', price: 25 },
    { id: 4, name: 'Product 4', description: 'This is a short description of Product 4.', price: 15 },
    // Add more products as needed
];

const LatestProducts = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        toast.success(`${product.name} added to cart!`);
        addToCart(product);
    };

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
            <ToastContainer/>
        </div>
    );
};

export default LatestProducts;

