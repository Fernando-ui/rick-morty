import React from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./ui/nav/NavBar";
import { Episodes } from "../screens/Episodes";
import { Characteres } from "./characteres/Characteres";
import { Locations } from "./Locations/Locations";
import { Search } from "./search/Search";
import { Home } from "../screens/Home";
import { CharacterEpisode } from "./CharacterEpisode";

export const DashBoard = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="home/character/:character" element={<CharacterEpisode />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="characteres" element={<Characteres />} />
        <Route path="locations" element={<Locations />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
};
