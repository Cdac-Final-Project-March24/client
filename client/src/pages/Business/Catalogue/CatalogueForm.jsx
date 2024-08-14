import React, { useEffect, useState } from "react";
import {
  addOffering,
  getOfferingDetails,
  updateOffering,
} from "../../../services/offering";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CatalogueForm = ({ currItem, type, success, setSuccess }) => {
  const business = JSON.parse(sessionStorage["business"]);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [functionality, setFunctionality] = useState("");
  const [usefulness, setUsefulness] = useState("");
  const [benifit, setBenifit] = useState("");
  const [cover, setCover] = useState(null);

  useEffect(() => {
    // Fetch data if currentitem is present
    setName("");
    setDescription("");
    setPrice(0);
    setFunctionality("");
    setUsefulness("");
    setBenifit("");
    if (currItem != -1) {
      (async () => {
        const result = await getOfferingDetails(currItem);
        //console.log(result);
        if (result.status === 200) {
          setName(result.name);
          setDescription(result.description);
          setPrice(result.price);
          setFunctionality(result.functionality);
          setUsefulness(result.usefulness);
          setBenifit(result.benifit);
        }
      })();
    }
  }, [currItem]);

  const handleSubmit = async () => {
    let result;
    const offering = {
      name,
      description,
      price,
      functionality,
      usefulness,
      benifit,
    };
    if (currItem == -1) {
      result = await addOffering(offering, type, cover, business.id);
    } else {
      result = await updateOffering(offering, type, cover, currItem);
    }
    if (result.status == 201) {
      toast.success("Successfull operation");
      setSuccess(!success);
    } else toast.error(result.message);
  };

  return (
    <div
      className="container d-flex flex-column shadow-sm border p-4 rounded-3 justify-content-between"
      style={{
        background: "white",
        position: "sticky",
        top: 80,
      }}
    >
      <div className="mb-3">
        <label htmlFor="item-name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="item-name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="item-desc" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="item-desc"
          rows="3"
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="item-img" className="form-label">
          Cover Image
        </label>
        <input
          className="form-control"
          type="file"
          id="item-img"
          onChange={(e) => setCover(e.target.files[0])}
        />
      </div>

      <div className="row">
        <div className="mb-3 col">
          <label htmlFor="item-price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="item-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3 col">
          <label htmlFor="item-functionality" className="form-label">
            Functionality
          </label>
          <input
            type="text"
            className="form-control"
            id="item-functionality"
            defaultValue={functionality}
            onChange={(e) => setFunctionality(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="mb-3 col">
          <label htmlFor="item-usefulness" className="form-label">
            Usefulness
          </label>
          <input
            type="text"
            className="form-control"
            id="item-usefulness"
            defaultValue={usefulness}
            onChange={(e) => setUsefulness(e.target.value)}
          />
        </div>

        <div className="mb-3 col">
          <label htmlFor="item-benifit" className="form-label">
            Benifit
          </label>
          <input
            type="text"
            className="form-control"
            id="item-benifit"
            defaultValue={benifit}
            onChange={(e) => setBenifit(e.target.value)}
          />
        </div>
      </div>

      <button className="btn btn-primary text-white" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CatalogueForm;
