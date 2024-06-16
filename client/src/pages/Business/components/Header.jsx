import React from "react";

const Header = () => {
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
      <img
        src="/logo.png"
        className="img-fluid"
        alt=""
        style={{ height: "80px" }}
      />
      <div className="d-flex align-items-center">
        <i class="bi bi-bell fs-5 me-3"></i>
        <i class="bi bi-person-circle me-2 fs-3"></i>
        <div style={{ color: "var(--primary)" }}>Business name</div>
      </div>
    </div>
  );
};

export default Header;
