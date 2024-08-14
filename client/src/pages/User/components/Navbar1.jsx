import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        const { latitude, longitude } = position.coords;

        // Fetch location data from a reverse geocoding API
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
          .then(response => response.json())
          .then(data => {
            // Set the city and state from the response
            setLocation({
              area: data.locality || "Unknown",
              city: data.principalSubdivision || "Unknown"
            });
          })
          .catch(error => {
            console.error("Error fetching location data:", error);
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link">
                <i className="fas fa-map-marker-alt me-1"></i> {location.area}, {location.city}
              </span>
            </li>
          </ul>

          <div style={{ marginLeft: "300px" }}>
            <Link to="/customer" className="navbar-brand d-flex align-items-center" >
              <img height="50" width="50" src={image} alt="Logo" />
              <span className="h4 mb-0">HomeBazzar</span>
            </Link>
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
            <div className="d-flex align-items-center text-decoration-none">
              <Link to="/customer/profile">
              <img
                src={image2}
                alt="Profile"
                height={40}
                width={40}
                className="rounded-circle me-2"
              />
              </Link>
              <Link to="/customer/cart" style={{ textDecoration: 'none' }}><span >Your Cart</span></Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
