import React from "react";
import HomeLayout from "../../sass/layout/Inicio.module.scss";
import { CardLocations } from "./CardLocations";
import "../../sass/components/arrowButton.scss";


export const Locations = () => {
  return (
    <>
      <div
        className={`${HomeLayout.container__locations} ${HomeLayout.container__episodes}`}
      >
        <div className={`${HomeLayout.container__flex}`}>
          <div className={`${HomeLayout.container__flex__title}`}>
            Locations
            <hr />
          </div>
          <div className="container__arrow container__arrow-left">
            <svg
              onClick={(e) => handleMove(e)}
              className="container__button-left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-t="angle-left-svg"
              aria-labelledby="angle-svg"
              aria-hidden="true"
              role="img"
            >
              <title id="angle-svg">Before</title>
              <path
                className="container__button-left"
                d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
              ></path>
            </svg>
          </div>
          {/* Aqui va la tarjeta */}
          <CardLocations />
          <div className="container__arrow container__arrow-right">
            <svg
              onClick={(e) => handleMove(e)}
              className="container__button-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-t="angle-left-svg"
              aria-labelledby="angle-svg"
              aria-hidden="true"
              role="img"
            >
              <title id="angle-svg">Next</title>
              <path
                className="container__button-right"
                d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
