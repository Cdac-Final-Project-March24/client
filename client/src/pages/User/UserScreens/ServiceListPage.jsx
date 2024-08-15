import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar1";
import { fetchRelatedBusinesses } from '../../../services/offering'; // Import the service method

const ServiceListPage = () => {
    const { service } = useParams(); // Get the service name from URL params
    const [businesses, setBusinesses] = useState([]); // State to store businesses
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const loadBusinesses = async () => {
            try {
                const fetchedBusinesses = await fetchRelatedBusinesses(service);
                setBusinesses(fetchedBusinesses);
            } catch (err) {
                setError('Failed to fetch businesses.');
            } finally {
                setLoading(false);
            }
        };

        loadBusinesses();
    }, [service]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Best Results for Service: {service}</h1>
                <div className="row mt-2">
                    {businesses.map((business, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={business.cover} className="card-img-top" alt={business.name} />
                                <div className="card-body" style={{ backgroundColor: "skyblue" }}>
                                    <h5 className="card-title">{business.name}</h5>
                                    <p className="card-text">{business.description}</p>
                                    <a href={`/customer/${business.name}`} className="btn btn-primary">Go to {business.name} page</a>
                                </div>
                            </div>
                        </div>
                    ))}
                     
                </div>
            </div>
        </>
    );
};

export default ServiceListPage;
