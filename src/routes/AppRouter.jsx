import React from "react";
import { Routes, Route } from "react-router-dom";
import { DashBoard } from "../components/DashBoard";
import { Login } from "../screens/Login";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<DashBoard/>} />
      </Routes>
    </div>
  );
};
