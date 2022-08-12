import React from "react";
import { Route, Routes } from "react-router-dom";
import BrandAnalytics from "./pages/BrandAnalytics";
import Public from "./pages/Public";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Public />} />
      <Route path="/brand-analytics" element={<BrandAnalytics />} />
    </Routes>
  );
};
