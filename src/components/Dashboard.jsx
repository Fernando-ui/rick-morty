import React from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./ui/nav/NavBar";
import { Episodes } from "./episodes/EpisodesScreen";
import { Characteres } from "./characteres/CharacteresScreen";
import { Locations } from "./Locations/LocationsScreen";
import { Home } from "./home/HomeScreen";
import { CharacterEpisode } from "./CharacterEpisode";

export const DashBoard = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="characteres" element={<Characteres />} />
        <Route path="locations" element={<Locations />} />
      </Routes>
    </>
  );
};
