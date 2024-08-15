import React from "react";

const Order = ({ order }) => {
  return (
    <div
      className="container row shadow-sm border p-4 rounded-3"
      style={{ background: "white" }}
    >
      <div className="col border-end">
        <h5>Id: {order.id}</h5>
        <div className="fs-5">Customer: {order.customerName}</div>
        <div className="fw-light">Address: {order.address}</div>
        <div className="fw-light">Date: {order.createdOn}</div>
      </div>
      <div className="col border-end">
        {order.subOrder.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col">
                {item.offering.name} * {item.quantity}
              </div>
              <div className="col">{item.offering.price * item.quantity}/-</div>
            </div>
          );
        })}
        {/* <div className="row">
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
        </div> */}
        <button className="btn btn-primary w-100 mt-2">Ready</button>
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
