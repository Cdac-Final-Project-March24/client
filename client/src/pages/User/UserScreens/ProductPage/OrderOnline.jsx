import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderOnline = () => {
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [homeDelivery, setHomeDelivery] = useState(false);

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleHomeDeliveryChange = (e) => {
        setHomeDelivery(e.target.checked);
    };

    const handleSubmit = () => {
        // Handle submit logic, e.g., add to cart
        console.log('Address:', address);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Home Delivery:', homeDelivery);
        // Add more logic as needed
    };

    return (
        <div className="container my-4">
            <h5 className="mb-4">Order Online</h5>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                value={address} 
                                onChange={handleAddressChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                value={email} 
                                onChange={handleEmailChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                id="phone" 
                                value={phone} 
                                onChange={handlePhoneChange} 
                                required 
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input 
                                type="checkbox" 
                                className="form-check-input" 
                                id="homeDelivery" 
                                checked={homeDelivery} 
                                onChange={handleHomeDeliveryChange} 
                            />
                            <label className="form-check-label" htmlFor="homeDelivery">Home Delivery</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderOnline;
