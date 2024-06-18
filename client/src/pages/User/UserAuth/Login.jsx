import React from 'react';


export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
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
                    <center>
                    <button type="submit" className="btn btn-primary btn-block mt-3">Sign In</button>
                    </center>
                    
                </form>
            </div>
        </div>
    );
}
