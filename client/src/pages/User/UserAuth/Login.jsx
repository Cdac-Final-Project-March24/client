import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/user";
import image from "./Logo.jpeg";
import { toast } from "react-toastify";

export default function Login({ setBusiness }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Clear session and local storage on login
  useEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
  }, []);

  // get the navigate object
  const navigate = useNavigate();
  const onLogin = async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    localStorage.clear();
    setBusiness(null);
    // client side validation
    if (email.length === 0) {
      toast.warning("enter email");
    } else if (password.length === 0) {
      toast.warning("enter password");
    } else {
      const result = await login(email, password);
      console.log(result);
      if (result.status === 201) {
        // read the token
        // set the data in session storage
        sessionStorage.setItem("token", result["jwt"]);
        sessionStorage.setItem("email", result["email"]);

        toast.success("welcome to the application");
        navigate("/customer");
      } else {
        toast.error("invalid email or password");
      }
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center border-end pe-4">
            <img
              src={image}
              height={500}
              width={500}
              className="img-fluid"
              alt="Placeholder"
            />
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center ps-4">
            <div
              className="card p-4 shadow-sm"
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <h2 className="text-center mb-4">Login</h2>
              <div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-3"
                    onClick={onLogin}
                  >
                    Sign In
                  </button>
                  <p className="mt-2">
                    Not registered yet,
                    <Link to="/register">Register Here</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
