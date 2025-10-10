// src/component/AdminFormation.js
import React, { useState, useEffect } from "react";
import { useContent } from "./Context";

const AdminFormation = () => {
  const { contents, updateContent } = useContent();
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });
  const [message, setMessage] = useState("");

  // Charger les données actuelles
  useEffect(() => {
    if (contents.formation) {
      setFormData(contents.formation);
    } else {
      // Valeurs par défaut
      setFormData({
        title: "Formation",
        description: `Vous êtes passionné par la pisciculture ? Alors, bienvenue chez
        CAP-PLUS. Nous sommes convaincus que le partage du savoir est la clé
        pour construire un avenir durable. À travers nos formations en
        pisciculture et en agriculture, nous offrons des compétences pratiques
        et concrètes, de l'élevage du tilapia, du tilapia rouge et du silure,
        jusqu'à la production maraîchère. Notre mission est claire : accompagner
        les passionnés, les jeunes entrepreneurs et les professionnels dans le
        développement de leur activité grâce à des techniques modernes,
        rentables et respectueuses de l'environnement. Avec CAP-PLUS,
        formez-vous aujourd'hui pour réussir demain.`
      });
    }
  }, [contents.formation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContent("formation", formData);
    setMessage("Contenu de la formation sauvegardé avec succès!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="admin-section">
      <h1 className="titre">Section Formation</h1>
      
      {message && (
        <div className="admin-message success">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Titre de la section:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Titre de la section formation"
          />
        </div>

        <div className="form-group">
          <label>Description/Paragraphe:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="8"
            className="form-control"
            placeholder="Contenu du paragraphe de formation..."
          />
        </div>

        <button type="submit" className="btn-save">
          Sauvegarder
        </button>
      </form>

    </section>
  );
};

export default AdminFormation;