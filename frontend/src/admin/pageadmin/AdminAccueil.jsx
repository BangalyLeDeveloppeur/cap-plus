// src/pages/AdminAccueil.js
import React from "react";
import AdminLayout from "../Layout/AdminLayout";
import AdminPhotos from "../component/AdSlide";
import AdOffre from "../component/AdOffre";
import AdminFormation from "../component/AdmineFormation";

const AdminAccueil = () => {
  return (
    <div>
      <h1 className="titre">Panneau d'Administration CAP-PLUS</h1>
      <div className="admin-grid">
        <div className="admin-grid-conteneur">

        <section>
          <AdminPhotos />
        </section>

        <section>
          <AdOffre />
        </section>
        <section>
          <AdminFormation />
        </section>
        </div>
        <section>
          <AdminLayout />
        </section>
      </div>
    </div>
  );
};

export default AdminAccueil;
