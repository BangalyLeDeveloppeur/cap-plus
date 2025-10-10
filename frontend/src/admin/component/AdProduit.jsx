import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/Authentification";

const AdProduit = () => {
  const [tabProduit, setTabProduit] = useState([]);
  const [titre, setTitre] = useState("");
  const [description, setDesription] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const{token, setToken} = useAuth()
  console.log(token)
 

  const getProduit = async () => {
    try {
      const resProduit = await axios.get("http://localhost:5000/api/produit");
      setTabProduit(resProduit.data);
    } catch (error) {
      console.error("Erreur lors du chargement des photos :", error);
    }
  };

  useEffect(() => {
    getProduit();
  }, []);
  ///gestion du formulaire ///
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!image) {
      setMessage("Veillez choisir une image !");
      return;
    }


    ///stockage données du formulaire ///
    const formData = new FormData()
    formData.append("image", image)
    formData.append("titre", titre)
    formData.append("description", description)
    console.log(formData)

    try {
      await axios.post("http://localhost:5000/api/produit", formData, {

            headers: {"Content-Type": "multipart/form-data",
              "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        });

        setMessage("Produit ajouté avec succès")
        setTitre ("");
        setDesription("");
        setImage(null);

        getProduit()

    } catch(error) {
        console.error ("Une erreur c'est produite uploade échoué" ,error) 
        setMessage("Upload échouer")

    }
  };

  return <div>
    <h1 className="titre">Administration de la table produit</h1>

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
            onChange={(e) => setDesription(e.target.value)}
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

      <h3>Produit enregistrée :</h3>
      <ul>
        {tabProduit.map((pt) => (
          <li key={pt.id}>
            <img
              src={`http://localhost:5000${pt.image_url}`}
              alt={pt.description}
            
            />
            <p>{pt.description}</p>
          </li>
        ))}
      </ul>

  </div>;
};

export default AdProduit;
