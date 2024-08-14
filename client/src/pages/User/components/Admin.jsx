import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './Navbar2';

const Admin = () => {
  const initialBusinesses = [
    { id: 1, image: 'https://via.placeholder.com/300x200', title: 'Business 1', isBlocked: false },
    { id: 2, image: 'https://via.placeholder.com/300x200', title: 'Business 2', isBlocked: false },
    { id: 3, image: 'https://via.placeholder.com/300x200', title: 'Business 3', isBlocked: false },
    { id: 4, image: 'https://via.placeholder.com/300x200', title: 'Business 4', isBlocked: false },
    { id: 5, image: 'https://via.placeholder.com/300x200', title: 'Business 5', isBlocked: false },
    { id: 6, image: 'https://via.placeholder.com/300x200', title: 'Business 6', isBlocked: false }
  ];

  const [businesses, setBusinesses] = useState(initialBusinesses);

  const handleBlock = (id) => {
    setBusinesses(businesses.map(business => 
      business.id === id ? { ...business, isBlocked: true } : business
    ));
    toast.error('Business Blocked Successfully');
  };

  const handleUnblock = (id) => {
    setBusinesses(businesses.map(business => 
      business.id === id ? { ...business, isBlocked: false } : business
    ));
    toast.success('Business Unblocked Successfully');
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5" style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <h1 className="text-center mb-4" style={{ color: '#343a40' }}>Admin Page</h1>
        <div className="row">
          {businesses.map((business) => (
            <div className="col-md-4 mb-4" key={business.id}>
              <div className="card" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', opacity: business.isBlocked ? 0.5 : 1 }}>
                <img
                  src={business.image}
                  className="card-img-top"
                  alt={business.title}
                  style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#495057' }}>{business.title}</h5>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-danger"
                      style={{ width: '48%', borderRadius: '4px' }}
                      disabled={business.isBlocked}
                      onClick={() => handleBlock(business.id)}
                    >
                      Block
                    </button>
                    <button
                      className="btn btn-success"
                      style={{ width: '48%', borderRadius: '4px' }}
                      disabled={!business.isBlocked}
                      onClick={() => handleUnblock(business.id)}
                    >
                      Unblock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Admin;
