import React from "react";
import AdminLayout from "../Layout/AdminLayout";
import AdminPhotos from "../component/AdSlide";
import AdOffre from "../component/AdOffre";

const AdminAccueil = () => {
  return (
    <div>
      <h1>Bienvenue sur la page admine</h1>
      <AdminLayout />
      <AdminPhotos />
      <AdOffre />
    </div>
  );
};

export default AdminAccueil;
