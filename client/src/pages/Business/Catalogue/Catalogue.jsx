import React, { useEffect, useState } from "react";
import CatalogueList from "./CatalogueList";
import CatalogueForm from "./CatalogueForm";
import { getLatestOfferings } from "../../../services/offering";
import { toast } from "react-toastify";

const Catalogue = ({ type }) => {
  const business = JSON.parse(sessionStorage["business"]);
  const [offerings, setOfferings] = useState(null);
  const [currItem, setCurrItem] = useState(-1);
  const [success, setSuccess] = useState(true);
  useEffect(() => {
    setCurrItem(-1);
    (async () => {
      const result = await getLatestOfferings(business.id, type);
      if (result.status === 200) {
        setOfferings(result.data);
      } else {
        toast.error(result.message);
      }
    })();
  }, [success, type]);
  return (
    <>
      <div
        className="container-fluid d-flex gap-2 px-2 my-2"
        style={{ padding: 0, margin: 0 }}
      >
        <div className="w-50">
          <CatalogueList
            offerings={offerings}
            currItem={currItem}
            setCurrItem={setCurrItem}
            type={type}
          />
        </div>
        <div className="w-50">
          <CatalogueForm
            currItem={currItem}
            type={type}
            success={success}
            setSuccess={setSuccess}
          />
        </div>
      </div>
    </>
  );
};

export default Catalogue;
