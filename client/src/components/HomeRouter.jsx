import React from "react";
import { Route, Routes } from "react-router-dom";
import Business from "../pages/Business/Business";
import Orders from "../pages/Business/Orders/Orders";
import Login from "../pages/User/UserAuth/Login";
import Register from "../pages/User/UserAuth/Registration"
import Home from "../pages/User/UserScreens/HomePage";
import ProductListPage from "../pages/User/UserScreens/ProductListPage";
import ServiceListPage from "../pages/User/UserScreens/ServiceListPage";
import BusinessPage from "../pages/User/UserScreens/BusinessPage/BusinessPage";
import ProductPage from "../pages/User/UserScreens/ProductPage/ProductPage"
import ServicePage from "../pages/User/UserScreens/ServicePage/ServicePage";
import Cart from "../pages/User/UserScreens/Cart"
import CheckOut from "../pages/User/UserScreens/Checkout/Checkout"
const HomeRouter = () => {
  return (
    <div>
      <Routes>
        {/* Home route */}
        <Route path="/" element={"Home Page to be decided"} />
        <Route path='/register' element={"Register Page to be Decided"} />
        {/* Customer side routes */}
        <Route path="customer">
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path="listing">
            <Route path="ProductList" element={<ProductListPage />} />
            <Route path="ServiceList" element={<ServiceListPage />} />
          </Route>
          {/* Dynamic routes */}
          <Route path=":business">
            <Route path="" element={<BusinessPage/>} />
            <Route path="service/:service" element={<ServicePage/>} />
            <Route path="product/:product" element={<ProductPage/>} />
          </Route>
          <Route path="cart" element={<Cart/>} />
          <Route path="checkout" element={<CheckOut/>} />
        </Route>

        {/* Business side rutes */}
        <Route path="business" element={<Business />}>
          <Route path="signup" element={"Business signup"} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={"Business Products List"} />
          <Route path="services" element={"Business Services List"} />
          <Route path="add-product" element={"Business add product page"} />
          <Route path="add-service" element={"Business add service page"} />
          <Route path="payments" element={"Business payments page"} />
          <Route path="profile" element={"Business profile page"} />
          <Route path="reviews" element={"Business reviews page"} />
        </Route>
      </Routes>
    </div>
  );
};

export default HomeRouter;
