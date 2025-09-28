import React, { useState, useEffect } from "react";
import axios from "axios";

const Equipe = () => {
  const [tableEquipe, setTableEquipe] = useState([]);
  console.log(tableEquipe);

  const getEquipe = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/equipe");
      setTableEquipe(res.data);
    } catch (error) {
      console.error("La requette n'a pas macrcher:", error);
    }
  };

  useEffect(() => {
    getEquipe();
  }, []);

  return (
    <div className="engagemen">
      <div className="passion-titre">
        <h1>Notre équipe</h1>
        <div className="bar-souligne"></div>
            </div>
        <div className=" engagement">
          <ul className="equipe-contener">
            {tableEquipe.map((tg) => (
              <li key={tg.id}>
                <div className="infos">
                  <span>{tg.nom}</span>
                  <span>{tg.prenom}</span>
                  <span>{tg.role}</span>
                </div>

                <img
                  src={`http://localhost:5000${tg.image_url}`}
                  alt={tg.titre}
                />
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Equipe;
