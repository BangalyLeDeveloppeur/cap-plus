import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Offres = () => {
  const [tabOffre, setTabOffre] = useState([]);
  console.log(tabOffre);

  const getOffres = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/offres");
      setTabOffre(res.data);
    } catch (error) {
      console.error("La requette n'a pas macrcher:", error);
    }
  };

  useEffect(() => {
    getOffres();
  }, []);

  return (
    <div>
      <section className="offres">
        <h1 className="engagement-titre">Nos offres</h1>
        <div className="bar-souligne-offre"></div>
        <div className="offres">
          {/* Affichage des offres */}
          <ul>
            {tabOffre.map((offre) => (
              <li key={offre.id}>
                <h4>{offre.titre}</h4>
                <p>{offre.description}</p>
                <img
                  src={`http://localhost:5000${offre.image_url}`}
                  alt={offre.titre}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Offres;
