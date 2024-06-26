import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

const SideNav = ({ onNavItemClick }) => {
  return (
    <div
      className="col-md-3 w-100  rounded-3 mt-4"
      style={{ position: "sticky", left: 0, top: "12vh" }}
    >
      <div className="sticky-top py-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              to="#"
              onClick={() => {
                onNavItemClick("DealsOffers");
              }}
              className="nav-link"
            >
              <i className="bi bi-star"></i> Deals and Offers
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="#"
              onClick={() => {
                onNavItemClick("LatestProducts");
              }}
              className="nav-link"
            >
              <i className="bi bi-box"></i> Latest Products
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="#"
              onClick={() => {
                onNavItemClick("LatestServices");
              }}
              className="nav-link"
            >
              <i className="bi bi-tools"></i> Latest Services
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="#"
              onClick={() => {
                onNavItemClick("Reviews");
              }}
              className="nav-link"
            >
              <i className="bi bi-chat-dots"></i> Reviews
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="#"
              onClick={() => {
                onNavItemClick("MostPreferredProducts");
              }}
              className="nav-link"
            >
              <i className="bi bi-heart"></i> Most Preferred Products
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="#"
              onClick={() => {
                onNavItemClick("MostPreferredServices");
              }}
              className="nav-link"
            >
              <i className="bi bi-lightbulb"></i> Most Preferred Services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
