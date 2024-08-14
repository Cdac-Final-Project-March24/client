import React, { useState } from "react";
import { toast } from "react-toastify";
import { register } from "../../../services/business";
import { useNavigate } from "react-router-dom";

const RegisterBusiness = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async () => {
    if (name.length === 0) toast.warn("Name required");
    else if (description.length === 0) toast.warn("Description required");
    else if (cover == null) toast.warn("Cover image required");
    else {
      const result = await register(name, description, cover);
      if (result.status === 201) {
        toast.success("Business Created Successfully");
        navigate("orders");
      }
    }
  };
  return (
    <div
      className="mt-2 w-50 rounded-3 w-50 shadow-sm py-4 px-5 d-flex flex-column gap-3"
      style={{ background: "white" }}
    >
      <div className="row">
        <label for="name" class="form-label">
          Business Name
        </label>
        <input
          type="text"
          className="form-control border border-dark"
          placeholder="Business Name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="row ">
        <label for="description" class="form-label">
          Description
        </label>
        <textarea
          className="form-control border border-dark"
          id="description"
          rows="7"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div class="row">
        <label for="item-img" class="form-label">
          Cover Image
        </label>
        <input
          class="form-control"
          type="file"
          id="item-img"
          onChange={(e) => setCover(e.target.files[0])}
        />
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <button onClick={onSubmit} class="btn btn-primary">
            <span>Register Business</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterBusiness;
