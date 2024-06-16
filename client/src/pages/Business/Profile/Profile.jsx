import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="container d-flex flex-column gap-5">
        <div className="row mt-5 mb-1" >
          <div className="col p-0">
            <input
              type="text"
              className="form-control border border-dark"
              placeholder="Name of Business"
            />
          </div>
          <div className="col p-0 input-spacing">
            <input
              type="email"
              className="form-control border border-dark"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="row marg-bottom">
          <div className="col p-0">
            <input
              type="text"
              className="form-control border border-dark"
              placeholder="Mobile"
            />
          </div>
          <div className="col p-0 input-spacing ">
            <input
              type="text"
              className="form-control border border-dark"
              placeholder="Owner Name"
            />
          </div>
        </div>

        <div className="row marg-bottom"> 
          <textarea
            className="form-control border border-dark"
            rows="7"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="row marg-bottom">
          <textarea
            className="form-control border border-dark"
            rows="5"
            placeholder="Address"
          ></textarea>
        </div>

        <div className="row">
          <div className="col p-0">
            <input
              type="password"
              className="form-control border border-dark"
              placeholder="Password"
            />
          </div>
          <div className="col p-0 input-spacing">
            <input
              type="password"
              className="form-control border border-dark"
              placeholder="Confirm Password"
            />
          </div>
        </div>

      <div className="row">
        <div className="col">
        </div>
        <div className="col">
        </div>
        <div className="col">
                 <button class="button"><span>Add Profile</span></button>
        </div>
        <div className="col">
        </div>
        <div className="col">
        </div>
        
      
      </div>
      
      </div>

    </>
  );
};

export default Profile;
