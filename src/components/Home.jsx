import React from "react";
import HomeLayout from "../sass/layout/Inicio.module.scss";

export const Home = () => {
  return (
    <>
      <div className={HomeLayout.container}>
        <div
          className={`${HomeLayout.container__locations} ${HomeLayout.container__episodes}`}
        >
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              Episodes
            </div>
            <div> </div>
          </div>
        </div>
        <div className={`${HomeLayout.container__locations}`}>
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              Characteres
            </div>
            <div>Cards Characteres</div>
          </div>
        </div>
        <div className={`${HomeLayout.container__locations}`}>
          <div className={`${HomeLayout.container__flex}`}>
            <div className={`${HomeLayout.container__flex__title}`}>
              Locations
            </div>
            <div>Cards Locations</div>
          </div>
        </div>
      </div>
    </>
  );
};
