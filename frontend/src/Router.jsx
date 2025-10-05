import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Galerie from "./pages/Galerie";
import Layout from "./assets/Layout/Layout";
import AdminPhotos from "./admin/component/AdSlide";
import Offres from "./admin/component/AdOffre";
import AdminTableGalerie from "./admin/component/AdminTableGalerie";
import Pisciculture from "./pages/Pisciculture";
import Formations from "./pages/Formation";
import Maraichage from "./pages/Maraichage";
import Mentorat from "./pages/Mentorat";
import AdminAccueil from "./admin/pageadmin/AdminAccueil";
import AdminMaraichage from "./admin/pageadmin/AdminMaraichage";
import Login from "./admin/component/Login";

const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="galerie" element={<Galerie />} />
          <Route path="adminphoto" element={<AdminPhotos />} />
          <Route path="adminoffre" element={<Offres />} />
          <Route path="admingalerie" element={<AdminTableGalerie />} />

          {/* Offres */}
          <Route path="pisciculture" element={<Pisciculture />} />
          <Route path="formations" element={<Formations />} />
          <Route path="maraichere" element={<Maraichage />} />
          <Route path="mentorat" element={<Mentorat />} />
        </Route>

        {/* Route pour la page admin accueil*/}
        <Route path="/admin" element={<Login />} />

          <Route path="adminaccueil" element={<AdminAccueil />} />
          <Route path="/admin/pageadmin/adminaccueil" element={<AdminAccueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;
