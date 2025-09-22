import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Layout from "./assets/Layout/Layout";
import AdminPhotos from "./pages/AdminPhoto";
import Offres from "./pages/AdOffre";
import AdminTableGalerie from "./pages/AdminTableGalerie";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Apropos" element={<Apropos />} />
          <Route path="AdminPhoto" element={<AdminPhotos />} />
          <Route path="AdminOffre" element={<Offres />} />
          <Route path="AdminGalerie" element={<AdminTableGalerie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
