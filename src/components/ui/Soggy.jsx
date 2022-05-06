import { useState } from "react";
import "../../sass/components/Soggy.scss";

export const Soggy = ({ currentPage }) => {
  const handleGetNumber = (e) => {
    const numberOfPage =
      e.target.classList[0][e.target.classList[0].length - 1];
  };

  return (
    <>
      <div className="soggy">
        <span className="soggy__current">
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current ${
              currentPage === 1 ? "soggy__current-active" : ""
            }`}
          >
            1
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-2 ${
              currentPage === 2 ? "soggy__current-active" : ""
            }`}
          >
            2
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-3 ${
              currentPage === 3 ? "soggy__current-active" : ""
            }`}
          >
            3
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-4 ${
              currentPage === 4 ? "soggy__current-active" : ""
            }`}
          >
            4
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-5 ${
              currentPage === 5 ? "soggy__current-active" : ""
            }`}
          >
            5
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-6 ${
              currentPage === 6 ? "soggy__current-active" : ""
            }`}
          >
            6
          </span>
          <span
            onClick={(e) => handleGetNumber(e)}
            className={`soggy__current-7 ${
              currentPage === 7 ? "soggy__current-active" : ""
            }`}
          >
            7
          </span>
        </span>
      </div>
    </>
  );
};
