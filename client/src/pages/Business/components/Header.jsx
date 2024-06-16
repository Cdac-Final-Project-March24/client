import React from "react";

const Header = () => {
  return (
    <div
      className="container-fluid shadow-sm d-flex align-items-center"
      style={{
        background: "white",
        height: "10vh",
        color: "var(--primary)",
        position: "sticky",
        top: 0,
      }}
    >
      <h3>Home Business</h3>
    </div>
  );
};

export default Header;
