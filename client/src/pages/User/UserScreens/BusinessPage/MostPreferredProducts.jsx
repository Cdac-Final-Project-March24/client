import React from 'react';

const preferredProducts = [
    {
        name: 'Preferred Product 1',
        description: 'This is a short description of Preferred Product 1.',
        price: 50,
    },
    {
        name: 'Preferred Product 2',
        description: 'This is a short description of Preferred Product 2.',
        price: 70,
    },
    {
        name: 'Preferred Product 3',
        description: 'This is a short description of Preferred Product 3.',
        price: 60,
    },
    {
        name: 'Preferred Product 4',
        description: 'This is a short description of Preferred Product 4.',
        price: 80,
    },
    // Add more preferred products as needed
];

const MostPreferredProducts = () => {
    const addToCart = (product) => {
        // Handle add to cart logic here
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="container my-4">
            <h5 className="mb-4">Most Preferred Products</h5>
            <div className="row">
                {preferredProducts.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card h-100">
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title">{product.name}</h6>
                                <p className="card-text">{product.description}</p>
                                <div className="mt-auto">
                                    <p className="text-primary font-weight-bold">${product.price.toFixed(2)}</p>
                                    <button 
                                        className="btn btn-primary w-100"
                                        onClick={() => addToCart(product)}
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

export default MostPreferredProducts;
