import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";

export const AppRouter = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
};
