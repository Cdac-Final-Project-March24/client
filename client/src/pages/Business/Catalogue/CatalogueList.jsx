import React, { useState } from "react";

const CatalogueList = ({ offerings, currItem, setCurrItem, type }) => {
  // const [currItem, setCurrItem] = useState(0);
  // const offerings = [
  //   {
  //     name: "Product1",
  //     description:
  //       "Some Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestiae.",
  //     price: "100",
  //   },
  //   {
  //     name: "Product2",
  //     description:
  //       "Some Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestiae.",
  //     price: "200",
  //   },
  //   {
  //     name: "Product3",
  //     description:
  //       "Some Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestiae.",
  //     price: "300",
  //   },
  //   {
  //     name: "Product4",
  //     description:
  //       "Some Description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestiae.",
  //     price: "400",
  //   },
  // ];
  return (
    <div className="d-flex flex-column gap-2">
      <div
        className="shadow-sm border p-4 rounded-3"
        style={{
          background: currItem == -1 ? "var(--primary)" : "white",
          color: currItem == -1 ? "white" : "black",
          height: "15vh",
          cursor: "pointer",
        }}
        onClick={(e) => setCurrItem(-1)}
      >
        <div className="fs-5 text-center">Add new {type}</div>
      </div>
      {offerings &&
        offerings.map((item, index) => {
          return (
            <div
              className="container d-flex shadow-sm border p-4 rounded-3 justify-content-between"
              style={{
                background: currItem == item.id ? "var(--primary)" : "white",
                color: currItem == item.id ? "white" : "black",
                height: "15vh",
                cursor: "pointer",
              }}
              key={index}
              onClick={(e) => setCurrItem(item.id)}
            >
              <div className="d-flex w-75">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-circle border border-primary"
                  style={{ height: "100%", aspectRatio: "1" }}
                />
                <div className=" ms-3 overflow-hidden">
                  <div className="fs-5">{item.name}</div>
                  <div className="fs-6 fw-light">{item.description}</div>
                </div>
              </div>
              <div className="align-self-center text-end ">{item.price}</div>
            </div>
          );
        })}
    </div>
  );
};

export default CatalogueList;
