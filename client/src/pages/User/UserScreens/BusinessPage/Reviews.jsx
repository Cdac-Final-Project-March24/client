import React, { useState, useEffect } from 'react';
import { getReviews } from '../../../../services/business'; // Adjust the path as needed

const Review = ({ id }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data, status } = await getReviews(id);
                if (status === 200) {
                    setReviews(data);
                } else {
                    setError('Failed to fetch reviews');
                }
            } catch (error) {
                setError('Failed to fetch reviews');
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [id]);

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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

export default Review;
