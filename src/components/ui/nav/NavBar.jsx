import React from "react";
import { Link  } from "react-router-dom";

import nav from "../../../sass/layout/navBar.module.scss";
import imgRick from "../../../assets/Rick_and_Morty.webp";

export const NavBar = () => {
  return (
    <nav className={`${nav.nav}`}>
      <Link to="home">
        <div>
          <img className={nav.nav__imgRick} src={imgRick} alt="" />
        </div>
      </Link>
      <div className={nav.nav__nav}>
        <Link  to="/home">
          <div className={nav.nav__item}>home</div>
        </Link>
        <Link  to="/episodes">
          <div className={nav.nav__item}>Episodes</div>
        </Link>
        <Link  to="/characteres">
          <div className={nav.nav__item}>Characteres</div>
        </Link>
        <Link  to="/locations">
          <div className={nav.nav__item}>locations</div>
        </Link>
        <Link  to="/search">
          <div className={nav.nav__item}>Search</div>
        </Link>
      </div>

      <div className={`${nav.nav__item} ${nav.nav__item_search}`}>logout</div>
    </nav>
  );
};
