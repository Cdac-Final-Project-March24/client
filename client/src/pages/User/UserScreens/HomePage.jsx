import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
        const [location, setLocation] = useState({ latitude: null, longitude: null });
      
        useEffect(() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            });
          }
        }, []);

  const topProducts = [
    { name: 'Product 1', description: 'Description of Product 1', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', description: 'Description of Product 2', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', description: 'Description of Product 3', image: 'https://via.placeholder.com/150' },
    { name: 'Product 4', description: 'Description of Product 3', image: 'https://via.placeholder.com/150' },
    { name: 'Product 5', description: 'Description of Product 3', image: 'https://via.placeholder.com/150' },
  ];

  const topServices = [
    { name: 'Service 1', description: 'Description of Service 1', image: 'https://via.placeholder.com/150' },
    { name: 'Service 2', description: 'Description of Service 2', image: 'https://via.placeholder.com/150' },
    { name: 'Service 3', description: 'Description of Service 3', image: 'https://via.placeholder.com/150' },
    { name: 'Service 4', description: 'Description of Service 3', image: 'https://via.placeholder.com/150' },
    { name: 'Service 5', description: 'Description of Service 3', image: 'https://via.placeholder.com/150' },
  ];

  const topBusinesses = [
    { name: 'Business 1', description: 'Description of Business 1', image: 'https://via.placeholder.com/150' },
    { name: 'Business 2', description: 'Description of Business 2', image: 'https://via.placeholder.com/150' },
    { name: 'Business 3', description: 'Description of Business 3', image: 'https://via.placeholder.com/150' },
    { name: 'Business 4', description: 'Description of Business 4', image: 'https://via.placeholder.com/150' },
    { name: 'Business 5', description: 'Description of Business 5', image: 'https://via.placeholder.com/150' },
  ];

  return (


    <div className="container mt-4">
    {/* Navbar with Logo */}
    <nav className="navbar navbar-light bg-light mb-4">
        <center>
        <a className="navbar-brand" href="#">
        <img src="https://via.placeholder.com/50" width="30" height="30" className="d-inline-block align-top" alt="" />
        HomeBazzar
      </a> 
      </center>
    </nav>

    <div className="row mb-4">
      <div className="col-12 col-md-4 mb-3">
        <div className="p-3 border rounded">
          <h5>Current Location</h5>
          {location.latitude && location.longitude ? (
            <p>
              Latitude: {location.latitude} <br />
              Longitude: {location.longitude}
            </p>
          ) : (
            <p>Fetching location...</p>
          )}
        </div>
      </div>
      <div className="col-12 col-md-8 mb-3">
        <div className="p-3 border rounded">
          <h5>Search</h5>
          <input
            type="text"
            className="form-control"
            placeholder="Search for products and services NEARBY"
          />
        </div>
      </div>
    </div>
    
    <div className="row mb-4">
      <div className="col-12">
        <h2 className="text-center">Top Products</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {topProducts.map((product, index) => (
            <div className="card mx-2" style={{ minWidth: '18rem' }} key={index}>
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="row mb-4">
      <div className="col-12">
        <h2 className="text-center">Top Services</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {topServices.map((service, index) => (
            <div className="card mx-2" style={{ minWidth: '18rem' }} key={index}>
              <img src={service.image} className="card-img-top" alt={service.name} />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="row mb-4">
      <div className="col-12">
        <h2 className="text-center">Top Businesses</h2>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {topBusinesses.map((business, index) => (
            <div className="card mx-2" style={{ minWidth: '18rem' }} key={index}>
              <img src={business.image} className="card-img-top" alt={business.name} />
              <div className="card-body">
                <h5 className="card-title">{business.name}</h5>
                <p className="card-text">{business.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
