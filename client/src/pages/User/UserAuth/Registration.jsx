import React, { useEffect, useState } from "react";
import image from "./Logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../../../services/user";
import { toast } from "react-toastify";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const navigate = useNavigate();

  const onSubmit = async () => {
    if (password === confirmPassword) {
      const result = await register(
        name,
        email,
        password,
        contact,
        address,
        city,
        state,
        country,
        zip,
        latitude,
        longitude
      );
      if (result.status === 201) {
        toast.success("Registration success");
        navigate("/");
      } else {
        toast.error(result.message);
      }
    } else {
      toast.error("Passoward and Confirm-password did not match");
    }
  };

  // For getting latitude and longitude
  useEffect(() => {
    // Get user's location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="row w-100">
        {/* Left half for image placeholder */}
        <div className="col-md-6 d-flex justify-content-center align-items-center border-end pe-4">
          <img src={image} width={500} height={500} alt="Placeholder" />
        </div>

        {/* Vertical divider */}
        <div className="col-md-6 d-flex justify-content-center align-items-center ps-4 border-start">
          <div
            className="card p-4 shadow-sm"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <h2 className="text-center mb-4">Registration</h2>
            <div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact No</label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  name="contact"
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmpassword"
                  name="confirmpassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="btn btn-primary btn-block mt-3"
                >
                  Sign Up
                </button>
                <p className="mt-2">
                  Already a user,<Link to="/customer/login">Login Here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
