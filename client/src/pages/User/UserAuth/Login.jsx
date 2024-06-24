import React from 'react';
import image from './Logo.jpeg'
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="container">
            <div className="row">
              
                <div className="col-md-6 d-flex justify-content-center align-items-center border-end pe-4">
                    <img src={image} height={500} width={500} className="img-fluid" alt="Placeholder" />
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center ps-4">
                    <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                        <h2 className="text-center mb-4">Login</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" required />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-block mt-3">Sign In</button>
                                <p className='mt-2'>Not registered yet,<Link to="/customer/register">Register Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
