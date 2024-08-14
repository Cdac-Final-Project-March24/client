import React from "react";
import NavBar from "./components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "./Business.css";

const Business = () => {
  const isRegisterPage = useLocation().pathname.substring(10) === "register";
  return (
    <div>
      {isRegisterPage || <Header />}
      <div
        className="container-fluid d-flex "
        style={{ padding: 0, margin: 0 }}
      >
        <div className="" style={{ padding: 0, width: "15vw" }}>
          {isRegisterPage || <NavBar />}
        </div>
        <div className="d-flex flex-column align-items-center w-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Business;
