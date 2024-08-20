import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../Images/Logo.jpeg";
import image2 from "../../../Images/profile.png";

const Navbar = () => {
  const [location, setLocation] = useState({
    area: "Unknown",
    city: "Unknown",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        // Fetch location data from a reverse geocoding API
        fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        )
          .then((response) => response.json())
          .then((data) => {
            // Set the city and state from the response
            setLocation({
              area: data.locality || "Unknown",
              city: data.principalSubdivision || "Unknown",
            });
          })
          .catch((error) => {
            console.error("Error fetching location data:", error);
          });
      });
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (searchQuery.trim()) {
      // Navigate to the search results page with the query
      navigate(`/customer/listing/product/${searchQuery.trim()}`);
    }
  };

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
                <i className="fas fa-map-marker-alt me-1"></i> {location.area},{" "}
                {location.city}
              </span>
            </li>
          </ul>

          <div style={{ marginLeft: "300px" }}>
            <Link
              to="/customer"
              className="navbar-brand d-flex align-items-center"
            >
              <img
                src="/logo.png"
                className="img-fluid"
                alt=""
                height={60}
                width={60}
              />
              <span className="h4 mb-0">HomeBazzar</span>
            </Link>
          </div>

          <form className="d-flex ms-auto ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products and services Nearby"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-primary" onClick={handleSearch}>
              Search
            </button>
          </form>
          <div className="ms-3">
            <div className="d-flex align-items-center text-decoration-none">
              <Link to="/customer/profile">
                <i className="bi bi-person-circle me-3 fs-3"></i>
              </Link>
              <Link to="/customer/cart" style={{ textDecoration: "none" }}>
                <span className="me-3 fs-3">
                  <i className="bi bi-cart-fill"></i>
                </span>
              </Link>
              <Link to="/business/orders" style={{ textDecoration: "none" }}>
                <span> Your Business</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
