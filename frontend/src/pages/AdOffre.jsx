import React, { useState, useEffect } from "react";
import axios from "axios";

const AdOffre = () => {
  const [tabOffre, setTabOffre] = useState([]);
  const [message, setMessage] = useState("");
  const [titre, setTitre] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const getOffres = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/offres");
      setTabOffre(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement des offres :", error);
    }
  };

  useEffect(() => {
    getOffres();
  }, []);

  //// gestion du formulaire ////
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage("⚠️ Veuillez choisir une image !");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("titre", titre);
    formData.append("description", description);
    console.log(formData);

    try {
      await axios.post("http://localhost:5000/api/offres", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Offre ajoutée avec succès");
      setTitre("");
      setDescription("");
      setImage(null);

      getOffres();
    } catch (error) {
      console.log("Ajout échoué", error);
      setMessage("❌ Erreur lors de l'upload");
    }
  };

  return (
    <div>
      <h2>Administration de la table Offres</h2>

      {message && <p>{message}</p>}

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

      {/* Affichage des offres */}
      <h3>Liste des offres</h3>
      <ul>
        {tabOffre.map((offre) => (
          <li key={offre.id}>
            <h4>{offre.titre}</h4>
            <p>{offre.description}</p>
            <img
              src={`http://localhost:5000${offre.image_url}`}
              alt={offre.titre}
              width="150"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdOffre;
