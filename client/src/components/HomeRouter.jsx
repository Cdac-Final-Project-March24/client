import React from "react";
import { Route, Routes } from "react-router-dom";
import Business from "../pages/Business/Business";
import NavBar from "../pages/Business/components/NavBar";
import Orders from "../pages/Business/Orders/Orders";
import Payments from "../pages/Business/Payments/Payments";

const HomeRouter = () => {
  return (
    <div>
      <Routes>
        {/* Home route */}
        <Route path="/" element={"Login page"} />

        {/* Customer side routes */}
        <Route path="customer">
          <Route path="" element={"Customer Home"} />
          <Route path="listing" element={"Listing of products or services"} />
          {/* Dynamic routes */}
          <Route path=":business">
            <Route path="" element={"Business home"} />
            <Route path="service/:service" element={"Service home"} />
            <Route path="product/:product" element={"Product home"} />
          </Route>
          <Route path="cart" element={"Customer Cart"} />
          <Route path="checkout" element={"Customer Checkout"} />
        </Route>

        {/* Business side rutes */}
        <Route path="business" element={<Business />}>
          <Route path="signup" element={"Business signup"} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={"Business Products List"} />
          <Route path="services" element={"Business Services List"} />
          <Route path="add-product" element={"Business add product page"} />
          <Route path="add-service" element={"Business add service page"} />
          <Route path="payments" element={"Business Payments page"} />
          <Route path="profile" element={"Business profile page"} />
          <Route path="reviews" element={"Business reviews page"} />
        </Route>
      </Routes>
    </div>
  );
};

export default HomeRouter;
