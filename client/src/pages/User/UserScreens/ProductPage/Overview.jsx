import React from 'react';


const productDetails = {
    name: 'Product Name',
    description: 'This is a detailed description of the product. It includes features, specifications, and benefits.',
    benefits: [
        'Benefit 1: Describe the first benefit of the product.',
        'Benefit 2: Explain another benefit of the product.',
        'Benefit 3: Highlight a key advantage or unique feature.',
    ],
    customerRating: 4.5,
    functionality: 'Explain the basic functionality and use cases of the product.',
    usefulness: 'Discuss how the product solves customer problems or improves their experience.',
};

const OverView = () => {
    return (
        <div className="container my-4">
            <h5 className="mb-4">{productDetails.name} Overview</h5>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title">Product Description</h6>
                    <p className="card-text">{productDetails.description}</p>

                    <h6 className="card-title mt-4">Key Benefits</h6>
                    <ul className="list-group">
                        {productDetails.benefits.map((benefit, index) => (
                            <li className="list-group-item" key={index}>{benefit}</li>
                        ))}
                    </ul>

                    <div className="mt-4">
                        <h6 className="card-title">Customer Rating</h6>
                        <div className="d-flex align-items-center">
                            <div className="mr-2">
                                {renderStars(productDetails.customerRating)}
                            </div>
                            <span>({productDetails.customerRating.toFixed(1)})</span>
                        </div>
                    </div>

                    <h6 className="card-title mt-4">Functionality</h6>
                    <p className="card-text">{productDetails.functionality}</p>

                    <h6 className="card-title mt-4">Usefulness</h6>
                    <p className="card-text">{productDetails.usefulness}</p>
                </div>
            </div>
        </div>
    );
};

const renderStars = (rating) => {
    const starsTotal = 5;
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = starsTotal - fullStars - halfStars;

    const starArray = [];
    for (let i = 0; i < fullStars; i++) {
        starArray.push(<i key={i} className="bi bi-star-fill" style={{ color: '#f39c12' }}></i>);
    }
    for (let i = 0; i < halfStars; i++) {
        starArray.push(<i key={i + fullStars} className="bi bi-star-half" style={{ color: '#f39c12' }}></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
        starArray.push(<i key={i + fullStars + halfStars} className="bi bi-star" style={{ color: '#f39c12' }}></i>);
    }

    return starArray;
};

export default OverView;
