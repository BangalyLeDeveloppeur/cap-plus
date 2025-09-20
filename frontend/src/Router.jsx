import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Layout from "./assets/Layout/Layout";
import AdminPhotos from "./pages/AdminPhoto";
import AdminOffre from "./pages/adminOffre";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Apropos" element={<Apropos />} />
          <Route path="AdminPhoto" element={<AdminPhotos />} />
          <Route path="AdminOffre" element={<AdminOffre/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
