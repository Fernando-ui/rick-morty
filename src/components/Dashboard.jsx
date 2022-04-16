import React from "react";
import { NavBar } from "./nav/NavBar";
import { Routes, Route } from "react-router-dom";
import { Episodes } from "./Episodes";
import { Characteres } from "./Characteres";
import { Locations } from "./Locations";
import { Search } from "./Search";
import { Home } from "./Home";

export const DashBoard = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="home" element={<Home/>}/>
        <Route path="episodes" element={<Episodes />} />
        <Route path="characteres" element={<Characteres />} />
        <Route path="locations" element={<Locations />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
};
