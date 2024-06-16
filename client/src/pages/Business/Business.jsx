import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./Business.css";

const Business = () => {
  return (
    <div>
      <Header />
      <div
        className="container-fluid d-flex "
        style={{ padding: 0, margin: 0 }}
      >
        <div className="" style={{ padding: 0, width: "15vw" }}>
          <NavBar />
        </div>
        <div className="d-flex flex-column align-items-center w-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Business;
