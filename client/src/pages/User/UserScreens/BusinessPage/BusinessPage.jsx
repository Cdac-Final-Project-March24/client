import Navbar from "../../components/Navbar1";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SideNav from "../../components/SideNav";
import DealsOffers from "./DealsOffers";
import LatestProducts from "./LatestProducts";
import LatestServices from "./LatestServices";
import MostPreferredProducts from "./MostPreferredProducts";
import MostPreferredServices from "./MostPreferredServices";
import Reviews from "./Reviews";

const BusinessPage = () => {
  const [componentName, setComponentName] = useState("MostPreferredProducts");
  const { business } = useParams();

  const handleNavItemClick = (componentName) => {
    setComponentName(componentName);
  };

  const componentRender = () => {
    switch (componentName) {
      case "DealsOffers":
        return <DealsOffers />;
      case "LatestProducts":
        return <LatestProducts />;
      case "LatestServices":
        return <LatestServices />;
      case "MostPreferredProducts":
        return <MostPreferredProducts />;
      case "MostPreferredServices":
        return <MostPreferredServices />;
      case "Reviews":
        return <Reviews />;
      default:
        return <div>Select something from the links.</div>;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img
              src="https://via.placeholder.com/150"
              style={{
                height: "60vh",
                width: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
              alt=""
            />
          </div>
        </div>
        <div className=" mt-3">
          <div className="fs-4">Business Name: {business}</div>
          <p style={{ fontWeight: "lighter" }}>
            Business Address, Locality, City. <br />
            Open Status - Timings, Mon-Fri. <br />
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
