import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="shadow-sm" style={{ background: "white", height: "90vh" }}>
      <ul class="nav flex-column fs-5 fw-medium" style={{ gap: "10px" }}>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"orders"}>
            <i class="bi bi-bag-check-fill me-2"></i>
            Orders
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-dark" aria-current="page" to={"products"}>
            <i class="bi bi-list-ul me-2"></i>
            Products
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-dark" aria-current="page" to={"services"}>
            <i class="bi bi-list-ul me-2"></i>
            Services
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-dark" aria-current="page" to={"payments"}>
            <i class="bi bi-credit-card-fill me-2"></i>
            Payments
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-dark" aria-current="page" to={"profile"}>
            <i class="bi bi-person-circle me-2"></i>
            Profile
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-dark" aria-current="page" to={"reviews"}>
            <i class="bi bi-people-fill me-2"></i>
            Reviews
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link link-danger" aria-current="page" to={"/"}>
            <i class="bi bi-box-arrow-right me-2"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
