import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const reviews = [
    {
        id: 1,
        name: 'John Doe',
        rating: 4,
        comment: 'Great service, very professional!',
    },
    {
        id: 2,
        name: 'Jane Smith',
        rating: 5,
        comment: 'Excellent service, exceeded my expectations.',
    },
    {
        id: 3,
        name: 'Alice Johnson',
        rating: 3,
        comment: 'Average service, could be better.',
    },
    {
        id: 4,
        name: 'Michael Brown',
        rating: 5,
        comment: 'Highly recommended! Fast and reliable.',
    },
    // Add more reviews as needed
];

const ServiceReview = () => {
    return (
        <div className="container my-4">
            <h5 className="mb-4">Product Reviews</h5>
            {reviews.map((review) => (
                <div className="card mb-3" key={review.id}>
                    <div className="card-body">
                        <h6 className="card-title">{review.name}</h6>
                        <div className="d-flex align-items-center mb-2">
                            <div className="mr-2">
                                {renderStars(review.rating)}
                            </div>
                            <span>({review.rating})</span>
                        </div>
                        <p className="card-text">{review.comment}</p>
                    </div>
                </div>
            ))}
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

export default ServiceReview;
