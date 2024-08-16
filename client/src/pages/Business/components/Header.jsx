import React from "react";
import { Link } from "react-router-dom";

const Header = ({ business }) => {
  return (
    <div
      className="container-fluid shadow-sm d-flex align-items-center justify-content-between"
      style={{
        background: "white",
        height: "10vh",
        position: "sticky",
        top: 0,
      }}
    >
      <Link to="/customer">
        <img
          src="/logo.png"
          className="img-fluid"
          alt=""
          style={{ height: "80px" }}
        />
      </Link>
      <div className="d-flex align-items-center">
        <i className="bi bi-bell fs-5 me-3"></i>
        <i className="bi bi-person-circle me-2 fs-3"></i>
        <div style={{ color: "var(--primary)" }}>
          {business !== null ? business.name : ""}
        </div>
      </div>
    </div>
  );
};

export default Header;
