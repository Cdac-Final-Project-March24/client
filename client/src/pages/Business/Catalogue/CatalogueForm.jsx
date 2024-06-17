import React from "react";

const CatalogueForm = () => {
  return (
    <div
      className="container d-flex flex-column shadow-sm border p-4 rounded-3 justify-content-between"
      style={{
        background: "white",
      }}
    >
      <div class="mb-3">
        <label for="item-name" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="item-name"
          placeholder="Product1"
        />
      </div>
      <div class="mb-3">
        <label for="item-desc" class="form-label">
          Description
        </label>
        <textarea class="form-control" id="item-desc" rows="3"></textarea>
      </div>
      <div class="mb-3">
        <label for="item-img" class="form-label">
          Cover Image
        </label>
        <input class="form-control" type="file" id="item-img" />
      </div>
      <div class="mb-3">
        <label for="item-price" class="form-label">
          Price
        </label>
        <input
          type="number"
          class="form-control"
          id="item-price"
          placeholder="100"
        />
      </div>
      <button className="btn btn-primary text-white">Submit</button>
    </div>
  );
};

export default CatalogueForm;
