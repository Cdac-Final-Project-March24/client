import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const pathName = useLocation().pathname.substring(10);
  const navItems = [
    {
      name: "Orders",
      icon: "bi bi-bag-check-fill",
    },
    {
      name: "Products",
      icon: "bi bi-list-ul",
    },
    {
      name: "Services",
      icon: "bi bi-list-ul",
    },
    {
      name: "Payments",
      icon: "bi bi-credit-card-fill",
    },
    {
      name: "Profile",
      icon: "bi bi-person-circle",
    },
    {
      name: "Reviews",
      icon: "bi bi-people-fill",
    },
  ];
  return (
    <div
      className="shadow-sm  d-flex flex-column align-items-center"
      style={{
        background: "white",
        height: "90vh",
        position: "sticky",
        left: 0,
        top: "10vh",
      }}
    >
      <ul className="nav flex-column fs-6 fw-medium" style={{ gap: "10px" }}>
        {navItems.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <Link
                className={
                  item.name.toLowerCase() == pathName
                    ? "nav-link active"
                    : "nav-link link-dark"
                }
                aria-current="page"
                to={item.name.toLowerCase()}
              >
                <i className={item.icon + " me-2"}></i>
                {item.name}
              </Link>
            </li>
          );
        })}

        <li className="nav-item">
          <Link className="nav-link link-danger" aria-current="page" to={"/"}>
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
