import React from 'react';


export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Registration</h2>
                <form>
                    

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="name" className="form-control" id="name" name="name" required />
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
                        <label htmlFor="adharno">Aadhar Number </label>
                        <input type="number" className="form-control" id="adharno" name="adharno" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact">Contact No</label>
                        <input type="number" className="form-control" id="contact" name="contact" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" required />
                    </div>
                    <center>
                        <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
                    </center>

                </form>
            </div>
        </div>
    );
}
