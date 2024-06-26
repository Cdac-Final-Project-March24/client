import React, { useState } from "react";
import ReviewList from "./ReviewList";
import ReviewWindow from "./ReviewWindow";

const Reviews = () => {
  return (
    <>
      <div
        className="container-fluid d-flex gap-2 px-2 my-2"
        style={{ padding: 0, margin: 0 }}
      >
        <div className="w-50">
          <ReviewList />
        </div>
        <div className="w-50">
          <ReviewWindow />
        </div>
      </div>
    </>
  );
};

export default Reviews;
