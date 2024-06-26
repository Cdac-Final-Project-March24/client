import { useState, useEffect } from "react";
import image from "../../../Images/Logo.jpeg";
import image2 from "../../../Images/profile.png";
const Navbar = () => {
  const [location, setLocation] = useState({
    area: "Unknown",
    city: "Unknown",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          area: "Central Park",
          city: "New York",
        });
      });
    }
  }, []);
  return (
    <nav
      className="navbar container shadow-sm navbar-expand-lg navbar-light bg-light mb-4 sticky-top"
      style={{ borderRadius: "10px" }}
    >
      <div className="container">
        <div className="collapse navbar-collapse justify-content-center">
        <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              </button>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link">
                <i className="fas fa-map-marker-alt me-1"></i> {location.area},{" "}
                {location.city}
              </span>
            </li>
          </ul>

          <div style={{ marginLeft: "300px" }}>
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img height="50" width="50" src={"/logo.png"} />
              <span className="h4 mb-0">HomeBazzar</span>
            </a>
          </div>

          <form className="d-flex ms-auto ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products and services Nearby"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <div className="ms-2">
            <img
              src={image2}
              alt=""
              height={40}
              width={40}
              className="rounded-circle"
            />{" "}
            UserName
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
