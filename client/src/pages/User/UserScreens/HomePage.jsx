import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar1';
import Slider from 'react-slick';

const Home = () => {
  const topProducts = [
    { id: 1, name: "Product 1", description: "Description of Product 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", description: "Description of Product 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", description: "Description of Product 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", description: "Description of Product 4", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", description: "Description of Product 5", image: "https://via.placeholder.com/150" },
  ];

  const topServices = [
    { id: 1, name: "Service 1", description: "Description of Service 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Service 2", description: "Description of Service 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Service 3", description: "Description of Service 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Service 4", description: "Description of Service 4", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Service 5", description: "Description of Service 5", image: "https://via.placeholder.com/150" },
  ];

  const topBusinesses = [
    { id: 1, name: "Business 1", description: "Description of Business 1", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Business 2", description: "Description of Business 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Business 3", description: "Description of Business 3", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Business 4", description: "Description of Business 4", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Business 5", description: "Description of Business 5", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Business 6", description: "Description of Business 6", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Business 7", description: "Description of Business 7", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Business 8", description: "Description of Business 8", image: "https://via.placeholder.com/150" },
  ];

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
    <div className="container" style={{ borderRadius: "10px", minHeight: "100vh" }}>
      <Navbar />
      <div className="row my-4">
        <div className="col-12">
          <h2 className="text-center mb-4">Top Products</h2>
          <div className="slider-container">
            <Slider {...settings}>
              {topProducts.map((product) => (
                <Link to={`listing/product/${product.name}`} key={product.id} style={{ textDecoration: 'none' }}>
                  <div className="px-3">
                    <div className="card overflow-hidden">
                      <img src={product.image} className="card-img-top" alt={product.name} />
                      <div className="card-body" style={{ backgroundColor: "skyblue" }}>
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
                <Link to={`listing/service/${service.name}`} key={service.id} style={{ textDecoration: 'none' }}>
                  <div className="px-3">
                    <div className="card overflow-hidden">
                      <img src={service.image} className="card-img-top" alt={service.name} />
                      <div className="card-body" style={{ backgroundColor: "skyblue" }}>
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
          <div className="d-flex gap-4 justify-content-between flex-wrap">
            {topBusinesses.map((business) => (
              <Link to={`${business.name}`} key={business.id} style={{ textDecoration: 'none' }}>
                <div className="card overflow-hidden" style={{ minWidth: "18rem" }}>
                  <img src={business.image} className="card-img-top" alt={business.name} />
                  <div className="card-body" style={{ backgroundColor: "skyblue" }}>
                    <h5 className="card-title text">{business.name}</h5>
                    <p className="card-text">{business.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
