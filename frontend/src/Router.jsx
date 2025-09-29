import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Layout from "./assets/Layout/Layout";
import AdminPhotos from "./pages/AdminPhoto";
import Offres from "./pages/AdOffre";
import AdminTableGalerie from "./pages/AdminTableGalerie";
import Pisciculture from "./pages/Pisciculture";
import Formations from "./pages/Formation";
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
          <Route path="apropos" element={<Apropos />} />
          <Route path="adminphoto" element={<AdminPhotos />} />
          <Route path="adminoffre" element={<Offres />} />
          <Route path="admingalerie" element={<AdminTableGalerie />} />

          {/* Offres */}
          <Route path="pisciculture" element={<Pisciculture />} />
          <Route path="formations" element={<Formations />} />
          <Route path="maraichere" element={<Maraichage />} />
          <Route path="mentorat" element={<Mentorat />} />

          {/* Autres */}
          <Route path="contact" element={<Contact />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="equipe" element={<Equipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
