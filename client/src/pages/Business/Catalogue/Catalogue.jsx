import React from "react";
import CatalogueList from "./CatalogueList";
import CatalogueForm from "./CatalogueForm";

const Catalogue = () => {
  return (
    <>
      <button className="btn btn-outline-primary align-self-start ms-2 mt-2">
        Add
      </button>
      <div
        className="container-fluid d-flex gap-2 px-2 my-2"
        style={{ padding: 0, margin: 0 }}
      >
        <div className="w-50">
          <CatalogueList />
        </div>
        <div className="w-50">
          <CatalogueForm />
        </div>
      </div>
    </>
  );
};

export default Catalogue;
