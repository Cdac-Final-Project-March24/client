import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ReviewList = () => {
  const [currItem, setCurrItem] = useState(0);
  const list = [
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
  const starRating = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };
  return (
    <div className="d-flex flex-column gap-2">
      {list.map((item, index) => {
        return (
          <div
            className="container d-flex shadow-sm border p-4 rounded-3 justify-content-between"
            style={{
              background: currItem == index ? "var(--primary)" : "white",
              color: currItem == index ? "white" : "black",
              height: "15vh",
              cursor: "pointer",
            }}
            key={index}
            onClick={(e) => setCurrItem(index)}
          >
            <div className=" ms-3 overflow-hidden">
              <div className="fs-5">{item.name}</div>
              <div className="fs-6 fw-light">{item.comment}</div>

              <div
                className="d-flex justify-content-between align-items-center"
                style={{
                  fontSize: "1rem",
                  color: "#999",
                }}
              >
                <span style={{ color: "#f39c12" }}>
                  {starRating(item.rating)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
