import React from "react";

const ReviewWindow = () => {
  return (
    <div
      className="container d-flex flex-column shadow-sm border p-4 rounded-3 justify-content-between"
      style={{
        background: "white",
      }}
    >
      <div class="mb-3">
        <label for="item-desc" class="form-label">
          Reply
        </label>
        <textarea class="form-control" id="item-desc" rows="3"></textarea>
      </div>

      <button className="btn btn-primary text-white">Submit</button>
    </div>
  );
};

export default ReviewWindow;
