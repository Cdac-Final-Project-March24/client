import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import "./SideNav.css"

const SideNav = ({ onNavItemClick }) => {

    const[activeLink,setActiveLink] = useState("");


    return (
        <div className="col-md-5">
            <div className="sticky-top pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link to="#" onClick={() => { setActiveLink("Deals and Offers");onNavItemClick("DealsOffers") }} className={`nav-link ${(activeLink=="Deals and Offers")?'active':''}`}>
                            <i className="bi bi-star"></i> Deals and Offers
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="#" onClick={() => { setActiveLink("Latest Products");onNavItemClick("LatestProducts") }} className={`nav-link ${(activeLink=="Latest Products")?'active':''}`}>
                            <i className="bi bi-box"></i> Latest Products
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="#" onClick={() => { setActiveLink("Latest Services");onNavItemClick("LatestServices") }} className={`nav-link ${(activeLink=="Latest Services")?'active':''}`}>
                            <i className="bi bi-tools"></i> Latest Services
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="#" onClick={() => {setActiveLink("Reviews"); onNavItemClick("Reviews") }} className={`nav-link ${(activeLink=="Reviews")?'active':''}`}>
                            <i className="bi bi-chat-dots"></i> Reviews
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="#" onClick={() => { setActiveLink("Most Preferred Products");onNavItemClick("MostPreferredProducts") }} className={`nav-link ${(activeLink=="Most Preferred Products")?'active':''}`}>
                            <i className="bi bi-heart"></i> Most Preferred Products
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="#" onClick={() => { setActiveLink("Most Preferred Services");onNavItemClick("MostPreferredServices"); }}className={`nav-link ${(activeLink=="Most Preferred Services")?'active':''}`}>
                            <i className="bi bi-lightbulb"></i> Most Preferred Services
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideNav;
