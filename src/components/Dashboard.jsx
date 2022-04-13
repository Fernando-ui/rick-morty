import React from "react";
import nav from "../sass/layout/navBar.module.scss";
import imgRick from "../assets/Rick_and_Morty.webp";

export const Dashboard = () => {
  return (
    <div>
      <nav className={`${nav.nav}`}>
        <div>
          <img className={nav.nav__imgRick} src={imgRick} alt="" />
        </div>

        <div className={nav.nav__nav}>
          <div className={nav.nav__item}>inicio</div>
          <div className={nav.nav__item}>Episodes</div>
          <div className={nav.nav__item}>Characteres</div>
          <div className={nav.nav__item}>locations</div>
          <div className={nav.nav__item}>Search</div>
        </div>

        <div className={`${nav.nav__item} ${nav.nav__item_search}`}>logout</div>
      </nav>
    </div>
  );
};
