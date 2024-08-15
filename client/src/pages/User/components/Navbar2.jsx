import { useState, useEffect } from "react";
import image from "../../../Images/Logo.jpeg";
import adminImage from "../../../Images/profile.png";
import { Link } from "react-router-dom";

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
            <Link to="/customer" className="navbar-brand d-flex align-items-center" href="#">
              <img height="50" width="50" src={image} alt="Logo" />
              <span className="h4 mb-0">HomeBazzar</span>
            </Link>
          </div>

          <div className="ms-auto d-flex align-items-center">
            <span className="me-3">Welcome, Admin</span>
            <img
              src={adminImage}
              alt="Admin"
              height={40}
              width={40}
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

