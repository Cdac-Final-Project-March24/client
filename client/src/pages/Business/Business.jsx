import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import "./Business.css";
import { getBusiness } from "../../services/business";

const Business = () => {
  const isRegisterPage = useLocation().pathname.substring(10) === "register";
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const result = await getBusiness();
      if (result !== 200) navigate("/business/register");
    })();
  }, []);

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
