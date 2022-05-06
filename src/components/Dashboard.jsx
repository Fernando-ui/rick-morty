import React from "react";
import { NavBar } from "./ui/nav/NavBar";
import { Routes, Route } from "react-router-dom";
import { Episodes } from "./Episodes";
import { Characteres } from "./Characteres";
import { Locations } from "./Locations";
import { Search } from "./Search";
import { Home } from "./Home";
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
