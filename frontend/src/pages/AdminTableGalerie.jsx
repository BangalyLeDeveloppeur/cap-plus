import axios from "axios";
import { useState, useEffect } from "react";

const AdminTableGalerie = () => {
  const [tablegalerie, setTableGalerie] = useState([]);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchImageGalerie();
  }, []);

  const fetchImageGalerie = async () => {
    const sql = await axios("http://localhost:5000/api/galerie");
    setTableGalerie(sql.data);
  };
  console.log(tablegalerie);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage("Rien n'a été ajouté dans la table galerie");
    }

    ///récupération des données dans le formulaire ////
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    formData.append("image", image);
    ///console.log(formData)

    try {
      await axios.post("http://localhost:5000/api/galerie", formData, {
        headers: { "Content-type": "multipart/form-data" },
      });
      setMessage("Galerie ajoutée avec succès");
      setTitre("");
      setDescription("");
      setImage(null);
      fetchImageGalerie();
    } catch (error) {
      console.log("Ajout échoué", error);
      setMessage("❌ Erreur lors de l'upload");
    }
  };

  return <div>
     <h2>Administration de la table galerie</h2>

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
      <h3>Liste galerie</h3>
      <ul>
        {tablegalerie.map((gal) => (
          <li key={gal.id}>
            <h4>{gal.titre}</h4>
            <p>{gal.description}</p>
            <img
              src={`http://localhost:5000${gal.image_url}`}
              alt={gal.titre}
              width="150"
            />
          </li>
        ))}
      </ul>
  </div>;
};

export default AdminTableGalerie;
