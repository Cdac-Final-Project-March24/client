import "./Payment.css";
import React from "react";

const Payment = () => {
  return (
    <div
      className="mt-5 p-5 rounded-3 w-50 shadow-sm d-flex flex-column align-items-center"
      style={{ background: "white" }}
    >
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Date</th>
            <th scope="col">Customer</th>
            <th scope="col">Payment Received</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>1/1/2024</td>
            <td>Shaunak</td>
            <td>100</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2/2/2024</td>
            <td>Vishal</td>
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>3/3/2024</td>
            <td>Shekhar</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
      <div className="">Total = 600</div>
    </div>
  );
};

export default Payment;
