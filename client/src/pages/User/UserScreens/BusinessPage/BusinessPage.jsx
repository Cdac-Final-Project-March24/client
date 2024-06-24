
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <img
                            src="https://via.placeholder.com/150"
                            style={{ height: "350px", width: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                            alt=""
                        />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="text-center mt-3">
                    <h3>Business Name: {business}</h3>
                    <p style={{ fontWeight: "lighter" }}>
                        Product1, Product2, Product3, Product4, Product5.
                        <br />
                        Business Address, Locality, City. <br />
                        Open Status - Timings, Mon-Fri. <br />
                        <button className="btn btn-info mt-2">Directions</button>
                    </p>
                </div>
                <div className="row mt-4">
                    <div className="col-md-5">
                        <SideNav onNavItemClick={handleNavItemClick} />
                    </div>
                    <div className="col-md-7">
                        {componentRender()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessPage;


