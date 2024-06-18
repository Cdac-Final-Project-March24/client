import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [location, setLocation] = useState({ area: 'Unknown', city: 'Unknown' });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          area: 'Central Park',
          city: 'New York',
        });
      });
    }
  }, []);

  const topProducts = [
    { name: 'Product 1', description: 'Description of Product 1', image: 'https://via.placeholder.com/150' },
    { name: 'Product 2', description: 'Description of Product 2', image: 'https://via.placeholder.com/150' },
    { name: 'Product 3', description: 'Description of Product 3', image: 'https://via.placeholder.com/150' },
    { name: 'Product 4', description: 'Description of Product 4', image: 'https://via.placeholder.com/150' },
    { name: 'Product 5', description: 'Description of Product 5', image: 'https://via.placeholder.com/150' },
  ];

  const topServices = [
    { name: 'Service 1', description: 'Description of Service 1', image: 'https://via.placeholder.com/150' },
    { name: 'Service 2', description: 'Description of Service 2', image: 'https://via.placeholder.com/150' },
    { name: 'Service 3', description: 'Description of Service 3', image: 'https://via.placeholder.com/150' },
    { name: 'Service 4', description: 'Description of Service 4', image: 'https://via.placeholder.com/150' },
    { name: 'Service 5', description: 'Description of Service 5', image: 'https://via.placeholder.com/150' },
  ];

  const topBusinesses = [
    { name: 'Business 1', description: 'Description of Business 1', image: 'https://via.placeholder.com/150' },
    { name: 'Business 2', description: 'Description of Business 2', image: 'https://via.placeholder.com/150' },
    { name: 'Business 3', description: 'Description of Business 3', image: 'https://via.placeholder.com/150' },
    { name: 'Business 4', description: 'Description of Business 4', image: 'https://via.placeholder.com/150' },
    { name: 'Business 5', description: 'Description of Business 5', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container " style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', padding: '20px', minHeight: '100vh' }}>
     <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4" style={{ borderRadius: '10px' }}>
  <div className="container">
 
    

   
    <div className="collapse navbar-collapse justify-content-center">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <span className="nav-link">
            <i className="fas fa-map-marker-alt me-1"></i> {location.area}, {location.city}
          </span>
        </li>
      </ul>

      <div style={{marginLeft:"300px"}}>
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img height="30" width="30" src="src/Images/Logo.jpeg" className="d-inline-block align-top me-2" alt="" />
        <span className="h4 mb-0">HomeBazzar</span>
      </a>
    </div>

      <form className="d-flex ms-auto">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search for products and services Nearby"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


      <div className="row mb-4">
        <div className="col-12">
          <h2 className="text-center">Top Products</h2>
          <div className="d-flex flex-row flex-nowrap overflow-auto">
            {topProducts.map((product, index) => (
              <div className="card mx-2" style={{ minWidth: '18rem' }} key={index}>
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body" style={{ backgroundColor: 'skyblue' }}>
                  <h5 className="card-title text-primary">{product.name}</h5>
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
                <div className="card-body" style={{ backgroundColor: 'skyblue' }}>
                  <h5 className="card-title text-primary">{service.name}</h5>
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
                <div className="card-body" style={{ backgroundColor: 'skyblue' }}>
                  <h5 className="card-title text-primary">{business.name}</h5>
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
