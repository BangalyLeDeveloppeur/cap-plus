import React, { useState, useEffect } from "react";
import axios from "axios";
////Déclaration de mes states////
const AdminEquipe = () => {
  const [tabEquipe, setTabEquipe] = useState([]);
  const [role, setRole] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  ///me permet d'exécuté une quant le composant est monté autrement dit charger mes photos////

  useEffect(() => {
    fetchPhotos();
  }, []);
  ////Cette fonction me permette de récuperer les photos////
  const fetchPhotos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/equipe");
      setTabEquipe(res.data);
    } catch (error) {
      console.error("Erreur lors du chargement des photos :", error);
    }
  };
  /// la gestion de formulaire/////

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage(" Merci de choisir une image");
      return;
    }
    ///me permet d'envoyer image+texte dans ma requet http(uploard)
    const formData = new FormData();
    formData.append("image", image);
    formData.append("nom", nom);
    formData.append("prenom", prenom);
    formData.append("role", role);

    try {
      await axios.post("http://localhost:5000/api/equipe", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(" Photo ajoutée avec succès !");
      setNom("");
      setImage(null);
      setPrenom;
      setRole;
      fetchPhotos();
      console.log(formData);
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
      setMessage(" Erreur lors de l'upload");
    }
  };

  return (
    <div>
      <h2>Administration des Photos d'Accueil</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>nom :</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        <div>
          <label>prenom:</label>
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>

        <div>
          <label>role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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

      <h3>Equipe enregistrées :</h3>
      <ul>
        {tabEquipe.map((photo) => (
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

export default AdminEquipe;
