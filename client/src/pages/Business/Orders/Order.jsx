import React from "react";

const Order = () => {
  return (
    <div
      className="container row shadow-sm border p-4 rounded-3"
      style={{ background: "white" }}
    >
      <div className="col border-end">
        <h5>Id: 111111</h5>
        <div className="fs-5">Customer: Customer name</div>
        <div className="fw-light">
          Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus, cupiditate.
        </div>
        <div className="fw-light">Date: 02/02/2024</div>
      </div>
      <div className="col border-end">
        <div className="row">
          <div className="col">Order 1</div>
          <div className="col">900/-</div>
        </div>
        <div className="row">
          <div className="col">Order 2</div>
          <div className="col">900/-</div>
        </div>
        <div className="row">
          <div className="col">Order 3</div>
          <div className="col">900/-</div>
        </div>
        <hr />
        <div className="row fw-medium">
          <div className="col">Total bill</div>
          <div className="col">900/-</div>
        </div>
        <button className="btn btn-secondary w-100 mt-2">Ready</button>
      </div>
      <div className="col">
        <div style={{ color: "green" }}>
          <i class="bi bi-check-circle-fill me-2"></i>
          Pending
        </div>
        <div>
          <i class="bi bi-check-circle-fill me-2"></i>
          Confirmed
        </div>
        <div>
          <i class="bi bi-check-circle-fill me-2"></i>
          Delivered
        </div>
      </div>
    </div>
  );
};

export default Order;
