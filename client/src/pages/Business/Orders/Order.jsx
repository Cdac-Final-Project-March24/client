import React, { useState } from "react";
import { changeOrderStatus } from "../../../services/order";
import { toast } from "react-toastify";

const Order = ({ id, customerName, address, createdOn, subOrder, status }) => {
  const statusArr = ["PENDING", "CONFIRMED", "DISPATCHED", "DELIVERED"];
  const [newStatus, setNewStatus] = useState(statusArr.indexOf(status));

  const calculateTotal = () => {
    return subOrder !== undefined
      ? subOrder
          .reduce(
            (acc, item) =>
              acc + parseFloat(item.quantity * item.offering.price),
            0
          )
          .toFixed(2)
      : 0;
  };

  const changeStatus = async () => {
    if (newStatus < 3) {
      const result = await changeOrderStatus(id, statusArr[newStatus + 1]);
      if (result.status === 201) {
        toast.success("Order Status changed");
        setNewStatus(newStatus + 1);
      } else console.error(result.message);
    } else toast.warn("Order already delivered");
  };

  return (
    <div
      className="container row shadow-sm border p-4 rounded-3"
      style={{ background: "white" }}
    >
      <div className="col border-end">
        <h5>Id: {id}</h5>
        <div className="fs-5">Customer: {customerName}</div>
        <div className="fw-light">Address: {address}</div>
        <div className="fw-light">Date: {createdOn}</div>
      </div>
      <div className="col border-end">
        {subOrder.map((item, index) => {
          return (
            <div className="row" key={index}>
              <div className="col">
                {item.offering.name} * {item.quantity}
              </div>
              <div className="col">{item.offering.price * item.quantity}/-</div>
            </div>
          );
        })}
        <div className="row fw-medium">
          <div className="col">Total bill</div>
          <div className="col">{calculateTotal()}</div>
        </div>
        <button className="btn btn-primary w-100 mt-2" onClick={changeStatus}>
          Ready
        </button>
      </div>
      <div className="col">
        <div
          style={statusArr[newStatus] === "PENDING" ? { color: "green" } : {}}
        >
          <i className="bi bi-check-circle-fill me-2"></i>
          Pending
        </div>
        <div
          style={statusArr[newStatus] === "CONFIRMED" ? { color: "green" } : {}}
        >
          <i className="bi bi-check-circle-fill me-2"></i>
          Confirmed
        </div>
        <div
          style={
            statusArr[newStatus] === "DISPATCHED" ? { color: "green" } : {}
          }
        >
          <i className="bi bi-check-circle-fill me-2"></i>
          Dispatched
        </div>
        <div
          style={statusArr[newStatus] === "DELIVERED" ? { color: "green" } : {}}
        >
          <i className="bi bi-check-circle-fill me-2"></i>
          Delivered
        </div>
      </div>
    </div>
  );
};

export default Order;
