import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Navbar2";
import {
  fetchAllBusinesses,
  softDeleteBusiness,
  softRestoreBusiness,
} from "../../../services/admin"; // Import service functions
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch initial list of businesses
    const getBusinesses = async () => {
      try {
        const data = await fetchAllBusinesses();
        setBusinesses(data);
      } catch (error) {
        navigate("/customer");
      } finally {
        setLoading(false);
      }
    };

    getBusinesses();
  }, []);

  const handleBlock = async (id) => {
    try {
      const { data, status } = await softDeleteBusiness(id);
      if (status === 200) {
        setBusinesses((prevBusinesses) =>
          prevBusinesses.map((business) =>
            business.id === id ? { ...business, isBlocked: true } : business
          )
        );
        toast.error("Business Blocked Successfully");
      } else {
        toast.error(data || "Failed to block business");
      }
    } catch (error) {
      toast.error("An error occurred while blocking the business");
    }
  };

  const handleUnblock = async (id) => {
    try {
      const { data, status } = await softRestoreBusiness(id);
      if (status === 200) {
        setBusinesses((prevBusinesses) =>
          prevBusinesses.map((business) =>
            business.id === id ? { ...business, isBlocked: false } : business
          )
        );
        toast.success("Business Unblocked Successfully");
      } else {
        toast.error(data || "Failed to unblock business");
      }
    } catch (error) {
      toast.error("An error occurred while unblocking the business");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <NavBar />
      <div
        className="container mt-5"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1 className="text-center mb-4" style={{ color: "#343a40" }}>
          Admin Page
        </h1>
        {businesses.length === 0 ? (
          <div className="text-center">
            <p>No businesses yet to manage</p>
          </div>
        ) : (
          <div className="row">
            {businesses.map((business) => (
              <div className="col-md-4 mb-4" key={business.id}>
                <div
                  className="card"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    opacity: business.isBlocked ? 0.5 : 1,
                  }}
                >
                  <img
                    src={business.cover}
                    className="card-img-top"
                    alt={business.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderTopLeftRadius: "8px",
                      borderTopRightRadius: "8px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#495057" }}>
                      {business.name}
                    </h5>
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-danger"
                        style={{ width: "48%", borderRadius: "4px" }}
                        disabled={business.isBlocked}
                        onClick={() => handleBlock(business.id)}
                      >
                        Block
                      </button>
                      <button
                        className="btn btn-success"
                        style={{ width: "48%", borderRadius: "4px" }}
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
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default Admin;
