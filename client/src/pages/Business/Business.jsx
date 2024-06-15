import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Business = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid row ">
        <div className="col-2" style={{ padding: 0 }}>
          <NavBar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Business;
