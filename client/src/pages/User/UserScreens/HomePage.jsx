import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar1";
import Slider from "react-slick";
import {
  fetchTopProducts,
  fetchTopServices,
  fetchTopBusinesses,
} from "../../../services/homePageService";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [topProducts, setTopProducts] = useState([]);
  const [topServices, setTopServices] = useState([]);
  const [topBusinesses, setTopBusinesses] = useState([]);
  const [latitude, setLatitude] = useState(18.5827328); // Initialize latitude
  const [longitude, setLongitude] = useState(73.8852864); // Initialize longitude

  useEffect(() => {
    // Function to get user's location
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.warn("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (latitude && longitude) {
        try {
          const products = await fetchTopProducts(latitude, longitude);
          const services = await fetchTopServices(latitude, longitude);
          const businesses = await fetchTopBusinesses(latitude, longitude);
          setTopProducts(products);
          setTopServices(services);
          setTopBusinesses(businesses);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [latitude, longitude]);

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      className="container"
      style={{ borderRadius: "10px", minHeight: "100vh" }}
    >
      <Navbar />
      <div className="row my-4">
        <div className="col-12">
          <h2 className="text-center mb-4">Top Products</h2>
          <div className="slider-container">
            <Slider {...settings}>
              {topProducts.map((product) => (
                <Link
                  to={`/customer/listing/product/${product.name}`}
                  key={product.id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="px-3">
                    <div className="card overflow-hidden">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                        style={{ aspectRatio: "1 / 1" }}
                      />
                      <div
                        className="card-body"
                        style={{ backgroundColor: "skyblue" }}
                      >
                        <h5 className="card-title text">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Top Services</h2>
          <div className="slider-container">
            <Slider {...settings}>
              {topServices.map((service) => (
                <Link
                  to={`/customer/listing/service/${service.name}`}
                  key={service.id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="px-3">
                    <div className="card overflow-hidden">
                      <img
                        src={service.image}
                        className="card-img-top"
                        alt={service.name}
                        style={{ aspectRatio: "1 / 1" }}
                      />
                      <div
                        className="card-body"
                        style={{ backgroundColor: "skyblue" }}
                      >
                        <h5 className="card-title text">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="row mt-5 pb-5">
        <div className="col-12">
          <h2 className="text-center mb-4">Top Businesses</h2>
          <div className="row">
            {topBusinesses.map((business) => (
              <div className="col-md-3 col-sm-1 mb-5">
                <Link
                  to={`/customer/${business.id}`}
                  key={business.id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="card overflow-hidden">
                    <img
                      src={business.cover}
                      className="card-img-top"
                      alt={business.name}
                      style={{ aspectRatio: "16 / 9" }}
                    />
                    <div
                      className="card-body"
                      style={{ backgroundColor: "skyblue" }}
                    >
                      <h5 className="card-title text">{business.name}</h5>
                      <p className="card-text">{business.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
