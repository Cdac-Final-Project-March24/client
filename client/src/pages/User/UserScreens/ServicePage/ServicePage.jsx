import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar1";
import { useState } from "react";
import OverView from "../ProductPage/Overview";
import Review from "../ProductPage/Review";
import OrderOnline from "../ProductPage/OrderOnline";

const ServicePage = () => {

    const [componentName, setComponentName] = useState("OverView")

    const MyComponent = (Name) => {
        setComponentName(Name);
    }

    const renderComponent = () => {
        switch (componentName) {
            case "OverView":
                return (
                    <OverView />
                )

            case "Review":
                return (
                    <Review />
                )


            case "OrderOnline":
                return (
                    <OrderOnline />
                )
        }
    }



    const { service } = useParams();
    return (
        <div>
            <Navbar />
            <h1 style={{ textAlign: "center" }}>Service Page for Service: {service}</h1>
            <div className="container">
                <div className="row mt-5">
                    <div className="col md-1"></div>
                    <div className="col md-10 d-flex">
                        <img src="https://via.placeholder.com/150" width={250} height={200} alt="" />
                        <div className="ms-5">
                            <h5>Service Name</h5>
                            <p style={{ fontWeight: "lighter" }}>Providers Name</p>
                            <p style={{ fontWeight: "lighter" }}>Providers Address</p>
                            <p style={{ fontWeight: "lighter" }}>Availability Status</p>

                            <p style={{ fontWeight: "lighter" }}>Close Time </p>
                            <p style={{ fontWeight: "lighter" }}>Weekly Info</p>
                        </div>
                    </div>
                    <div className="col md-1"></div>
                </div>

                <div className="row mt-2">
                    <div className="col md-2"></div>
                    <div className="col md-8">
                        <div>
                            <div className="btn-group">
                                <button className="btn btn-light ms-2" onClick={() => { MyComponent("OverView") }}>OverView</button>
                                <button className="btn btn-light ms-2" onClick={() => { MyComponent("OrderOnline") }}>Order Online</button>
                                <button className="btn btn-light ms-2" onClick={() => { MyComponent("Review") }}>Service Reviews</button>
                            </div>
                        </div>
                    </div>
                    <div className="col md-2"></div>
                </div>
                <div className="row mt-2">{renderComponent()}</div>
            </div>
        </div>
    )
}

export default ServicePage;

