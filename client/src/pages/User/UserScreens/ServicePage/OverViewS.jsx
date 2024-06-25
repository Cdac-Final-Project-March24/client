import React from 'react';


const serviceDetails = {
    name: 'Service Name',
    description: 'This is a detailed description of the service. It includes features, specifications, and benefits.',
    benefits: [
        'Benefit 1: Describe the first benefit of the service.',
        'Benefit 2: Explain another benefit of the service.',
        'Benefit 3: Highlight a key advantage or unique feature.',
    ],
    customerRating: 4.2,
    functionality: 'Explain the basic functionality and use cases of the service.',
    usefulness: 'Discuss how the service solves customer problems or improves their experience.',
};

const ServiceOverview = () => {
    return (
        <div className="container my-4">
            <h5 className="mb-4">{serviceDetails.name} Overview</h5>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title">Service Description</h6>
                    <p className="card-text">{serviceDetails.description}</p>

                    <h6 className="card-title mt-4">Key Benefits</h6>
                    <ul className="list-group">
                        {serviceDetails.benefits.map((benefit, index) => (
                            <li className="list-group-item" key={index}>{benefit}</li>
                        ))}
                    </ul>

                    <div className="mt-4">
                        <h6 className="card-title">Customer Rating</h6>
                        <div className="d-flex align-items-center">
                            <div className="mr-2">
                                {renderStars(serviceDetails.customerRating)}
                            </div>
                            <span>({serviceDetails.customerRating.toFixed(1)})</span>
                        </div>
                    </div>

                    <h6 className="card-title mt-4">Functionality</h6>
                    <p className="card-text">{serviceDetails.functionality}</p>

                    <h6 className="card-title mt-4">Usefulness</h6>
                    <p className="card-text">{serviceDetails.usefulness}</p>
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

export default ServiceOverview;
