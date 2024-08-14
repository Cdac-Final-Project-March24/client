import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../../../../components/CartContext'; // Import CartContext
import { toast, ToastContainer } from 'react-toastify';

const preferredProducts = [
    {
        id: 1,
        name: 'Preferred Product 1',
        description: 'This is a short description of Preferred Product 1.',
        price: 50,
    },
    {
        id: 2,
        name: 'Preferred Product 2',
        description: 'This is a short description of Preferred Product 2.',
        price: 70,
    },
    {
        id: 3,
        name: 'Preferred Product 3',
        description: 'This is a short description of Preferred Product 3.',
        price: 60,
    },
    {
        id: 4,
        name: 'Preferred Product 4',
        description: 'This is a short description of Preferred Product 4.',
        price: 80,
    },
    // Add more preferred products as needed
];

const MostPreferredProducts = () => {
    const { addToCart } = useContext(CartContext); // Access addToCart from context

    const handleAddToCart = (product) => {
        // Handle add to cart logic here
        toast.success(`${product.name} added to cart!`);
        addToCart(product); // Add product to cart
    };

    return (
        <div className="container my-4">
            <h5 className="mb-4">Most Preferred Products</h5>
            <div className="row">
                {preferredProducts.map((product) => (
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
            <ToastContainer/>
        </div>
    );
};

export default MostPreferredProducts;
