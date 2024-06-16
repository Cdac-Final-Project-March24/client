import React from "react";

const Profile = () => {
  return (
    <div
      className="mt-2 w-50 rounded-3 w-50 shadow-sm py-4 px-5 d-flex flex-column gap-3"
      style={{ background: "white" }}
    >
      <div className="row gap-3">
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

      <div className="row gap-3">
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

      <div className="row ">
        <textarea
          className="form-control border border-dark"
          rows="7"
          placeholder="Description"
        ></textarea>
      </div>

      <div className="row ">
        <textarea
          className="form-control border border-dark"
          rows="5"
          placeholder="Address"
        ></textarea>
      </div>

      <div className="row gap-3">
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
        <div className="col-12 text-center">
          <button class="btn btn-primary">
            <span>Update Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
