import React from "react";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Excellent service and very friendly staff!",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great experience, but the waiting time was a bit long.",
  },
  {
    name: "Alice Johnson",
    rating: 3,
    comment: "Average service, could be improved.",
  },
  {
    name: "Michael Brown",
    rating: 5,
    comment: "Outstanding quality and prompt service!",
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const starRating = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="container my-4">
      <h5 className="mb-4">Customer Reviews</h5>
      {reviews.map((review, index) => (
        <div
          className="card mb-3"
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <div className="card-body">
            <h6
              className="card-title"
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {review.name}
            </h6>
            <p
              className="card-text"
              style={{
                fontSize: "1rem",
                color: "#666",
              }}
            >
              {review.comment}
            </p>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "1rem",
                color: "#999",
              }}
            >
              <span style={{ color: "#f39c12" }}>
                {starRating(review.rating)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
