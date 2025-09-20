import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const adminOffre = () => {
  const [tabOffre, setTabOffe] = useState([]);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  const getOffres = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/offres");
      return res.data;
    } catch (error) {
      console.error("Erreur lors du chargement des photos :", error);
    }
  };

  useEffect(() => {
    getOffres();
  }, []);

  ////gestion du formulaire /////
  const handleSubmit = () => {
    e.preventDefaul();
    if (!image) {
      setMessage("Attention veillez choisir une image !");
      return;
    }
///recuperer les données sur le formulaire///


  };

  return (
    <div>
      <h2>Administration de la table offre</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description :</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Image :</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <button type="submit">Ajouter</button>
      </form>

      {message && <p>{message}</p>}

      <h3>Photos enregistrées :</h3>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img
              src={`http://localhost:5000${photo.image_url}`}
              alt={photo.description}
              width="150"
            />
            <p>{photo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default adminOffre;
