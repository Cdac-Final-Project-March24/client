import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBusiness, updateBusiness } from "../../../services/business";

const Profile = ({ business, setBusiness }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState(null);

  const onSubmit = async () => {
    const result = await updateBusiness(business.id, name, description, cover);
    if (result.status === 201) {
      toast.success("Business Updated Successfully");
      const result = await getBusiness();
      if (result.status === 200) setBusiness(result.data);
    }
  };

  useEffect(() => {
    if (business !== null) {
      setName(business.name);
      setDescription(business.description);
    }
  }, [business]);

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
          defaultValue={name}
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
          defaultValue={description}
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
            <span>Update Business</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
