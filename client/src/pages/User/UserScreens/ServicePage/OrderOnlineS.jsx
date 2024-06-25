import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceOrderOnline = () => {
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleTimeSlotChange = (slot) => {
        setSelectedTimeSlot(slot);
    };

    const handleSubmit = () => {
        // Handle submit logic, e.g., book service
        console.log('Address:', address);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Selected Time Slot:', selectedTimeSlot);
        // Add more logic as needed
    };

    const timeSlots = [
        { id: 1, slot: 'Morning (8:00 AM - 12:00 PM)' },
        { id: 2, slot: 'Afternoon (12:00 PM - 4:00 PM)' },
        { id: 3, slot: 'Evening (4:00 PM - 8:00 PM)' },
    ];

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
                        <div className="mb-3">
                            <label className="form-label d-block">Available Time Slots</label>
                            {timeSlots.map((slot) => (
                                <div className="form-check form-check-inline" key={slot.id}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="timeSlot"
                                        id={`slot-${slot.id}`}
                                        value={slot.slot}
                                        checked={selectedTimeSlot === slot.slot}
                                        onChange={() => handleTimeSlotChange(slot.slot)}
                                    />
                                    <label className="form-check-label" htmlFor={`slot-${slot.id}`}>
                                        {slot.slot}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button type="submit" className="btn btn-primary">Book Service</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceOrderOnline;