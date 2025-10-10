import React, { useState, useEffect } from "react";
import axios from "axios";
////Déclaration de mes states////
const AdSlide = () => {
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  ///me permet d'exécuté une quant le composant est monté autrement dit charger mes photos////

  useEffect(() => {
    fetchPhotos();
  }, []);
  ////Cette fonction me permette de récuperer les photos////
  const fetchPhotos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/photos_accueil");
      setPhotos(res.data); /// la mise ajour de mon table photo_accueil
    } catch (error) {
      console.error("Erreur lors du chargement des photos :", error);
    }
  };
  /// la gestion de formulaire/////

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage("Merci de choisir une image");
      return;
    }
    ///me permet d'envoyer image+texte dans ma requet http(uploard)
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:5000/api/photos_accueil", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(" Photo ajoutée avec succès !");
      setDescription("");
      setImage(null);
      fetchPhotos();
      console.log(formData);
    } catch (error) {
      console.error("Erreur lors de l'upload :", error);
      setMessage(" Erreur lors de l'upload");
    }
  };

  return (
    <div>
      <section className="admin-section">
        <h1 className="titre"> Home du slide d'Accueil</h1>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="botton">Ajouter</button>
        </form>

        {message && <p>{message}</p>}

        <h3>Photos enregistrées :</h3>
      </section>
    </div>
  );
};

export default AdSlide;
