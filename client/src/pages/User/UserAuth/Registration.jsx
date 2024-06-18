import React from 'react';
import image from './Logo.jpeg'

export default function Login() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="row w-100">
                {/* Left half for image placeholder */}
                <div className="col-md-6 d-flex justify-content-center align-items-center border-end pe-4">
                    <img src={image} width={500} height={500} alt="Placeholder" />
                </div>

                {/* Vertical divider */}
                <div className="col-md-6 d-flex justify-content-center align-items-center ps-4 border-start">
                    <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                        <h2 className="text-center mb-4">Registration</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" name="address" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adharno">Aadhar Number</label>
                                <input type="number" className="form-control" id="adharno" name="adharno" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact No</label>
                                <input type="tel" className="form-control" id="contact" name="contact" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmpassword">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" required />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
