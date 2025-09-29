import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
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
        <div className="bar-souligne-choi"></div>
        
          <div className="tab-offres">
            {/* Affichage des offres */}
            <section id="offre">
              <ul>
                {tabOffre.map((offre) => {
                  const mapRoutes = {
                    pisciculture: "/pisciculture",
                    formations: "/formations",
                    maraichere: "/maraichere",
                    mentorat: "/mentorat",
                  };

                  // On récupère la route correspondante ou "/"
                  const route = mapRoutes[offre.titre.toLowerCase()] || "/";

                  return (
                    <li key={offre.id}>
                      <h2>{offre.titre}</h2>
                      <p>{offre.description}</p>
                      <Link to={route}>
                        <img
                          src={`http://localhost:5000${offre.image_url}`}
                          alt={offre.titre}
                        />
                        
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        
      </section>
    </div>
  );
};

export default Offres;
