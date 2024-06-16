import "./Payment.css";
import React from "react";

const Payment = () => {
    return (
<>

<div class="row">
  <div class="col"></div>
  <div class="col-8 mt-5">
    <table class="table table-bordered border-black table-hover table-striped">
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
  
  </div>
  <div class="col"></div>
</div>

<div class="row">
  <div class="col">
  </div>
  <div class="col">  
  </div>
  <div class="col">
    <button type="button button-hover" class="btn btn-info">Total</button>
   </div> 
</div> 


</>
  );
};

export default Payment;
