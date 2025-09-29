import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Layout from "./assets/Layout/Layout";
import AdminPhotos from "./pages/AdminPhoto";
import Offres from "./pages/AdOffre";
import AdminTableGalerie from "./pages/AdminTableGalerie";
import Pisciculture from "./pages/Pisciculture";
import Formation from "./pages/Formation";
import Maraichage from "./pages/Maraichage";
import Mentorat from "./pages/Mentorat";
import Galerie from "./pages/Galerie";
import Contact from "./components/Contact";
import Equipe from "./pages/AdiminEquipe";

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
          <Route path="Pisciculture" element={<Pisciculture />} />
          <Route path="Formations" element={<Formation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="mentorat" element={<Mentorat />} />
          <Route path="pisciculturmaraichère" element={<Maraichage />} />
          <Route path="equipe" element={<Equipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
