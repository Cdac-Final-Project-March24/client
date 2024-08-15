import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar1";
import SideNav from "../../components/SideNav";
import DealsOffers from "./DealsOffers";
import LatestProducts from "./LatestProducts";
import LatestServices from "./LatestServices";
import MostPreferredProducts from "./MostPreferredProducts";
import MostPreferredServices from "./MostPreferredServices";
import Reviews from "./Reviews";
import { fetchBusinessDetails } from '../../../../services/business'; // Adjust the path as necessary

const BusinessPage = () => {
  const [componentName, setComponentName] = useState("MostPreferredProducts");
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = useParams().business; // Assuming 'id' is the parameter for business ID

  const handleNavItemClick = (componentName) => {
    setComponentName(componentName);
  };

  const componentRender = () => {
    switch (componentName) {
      case "DealsOffers":
        return <DealsOffers  />;
      case "LatestProducts":
        return <LatestProducts  id={id}/>;
      case "LatestServices":
        return <LatestServices id={id}/>;
      case "MostPreferredProducts":
        return <MostPreferredProducts id={id}/>;
      case "MostPreferredServices":
        return <MostPreferredServices id={id}/>;
      case "Reviews":
        return <Reviews id={id}/>;
      default:
        return <div>Select something from the links.</div>;
    }
  };

  useEffect(() => {
    console.log(id)
    const getBusinessDetails = async () => {
      try {
        const data = await fetchBusinessDetails(id);
        setBusiness(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getBusinessDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img
              src={business?.cover || "https://via.placeholder.com/150"}
              style={{
                height: "60vh",
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
              alt={business?.name || "Business"}
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="fs-4">Business Name: {business?.name || "Loading..."}</div>
          <p style={{ fontWeight: "lighter" }}>
            {business?.address || "Loading address..."} <br />
            {business?.status || "Open Status - Timings, Mon-Fri."} <br />
            <button className="btn btn-info mt-2">Directions</button>
          </p>
        </div>
        <hr />
        <div className="row mt-3">
          <div className="col-md-2">
            <SideNav onNavItemClick={handleNavItemClick} />
          </div>
          <div className="col-md-10 border-start">{componentRender()}</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
