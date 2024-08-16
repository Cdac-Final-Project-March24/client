import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Business from "../pages/Business/Business";
import Orders from "../pages/Business/Orders/Orders";

import Profile from "../pages/Business/Profile/Profile";
import Payment from "../pages/Business/Payment/Payment";
import Catalogue from "../pages/Business/Catalogue/Catalogue";

import Login from "../pages/User/UserAuth/Login";
import Register from "../pages/User/UserAuth/Registration";
import Home from "../pages/User/UserScreens/HomePage";
import ProductListPage from "../pages/User/UserScreens/ProductListPage";
import ServiceListPage from "../pages/User/UserScreens/ServiceListPage";
import BusinessPage from "../pages/User/UserScreens/BusinessPage/BusinessPage";
import ProductPage from "../pages/User/UserScreens/ProductPage/ProductPage";
import ServicePage from "../pages/User/UserScreens/ServicePage/ServicePage";
import Cart from "../pages/User/UserScreens/Cart";
import CheckOut from "../pages/User/UserScreens/Checkout/Checkout";
import Reviews from "../pages/Business/Reviews/Reviews";
import UserProfile from "../pages/User/UserScreens/UserProfile";
import Admin from "../pages/User/components/Admin";
import ProtectedRoute from "./ProtectedRoute";
import RegisterBusiness from "../pages/Business/Register/RegisterBusiness";

const HomeRouter = () => {
  const [business, setBusiness] = useState(null);
  return (
    <div>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        {/* Customer side routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="customer">
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="listing">
              {/* Dynamic Routes */}
              <Route path="product/:product" element={<ProductListPage />} />
              <Route path="service/:service" element={<ServiceListPage />} />
            </Route>
            {/* Dynamic routes */}
            <Route path=":business">
              <Route path="" element={<BusinessPage />} />
              <Route path="service/:service" element={<ServicePage />} />
              <Route path="product/:product" element={<ProductPage />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
          {/* Business side rutes */}
          <Route
            path="business"
            element={<Business setBusiness={setBusiness} business={business} />}
          >
            <Route path="register" element={<RegisterBusiness />} />
            <Route path="orders" element={<Orders business={business} />} />
            <Route
              path="products"
              element={<Catalogue type={"product"} business={business} />}
            />
            <Route
              path="services"
              element={<Catalogue type={"service"} business={business} />}
            />
            <Route path="payments" element={<Payment />} />
            <Route path="profile" element={<Profile business={business} />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default HomeRouter;
