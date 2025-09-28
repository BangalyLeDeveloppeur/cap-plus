import axios from "axios";
import React, { useEffect, useState } from "react";

const Gallerie = () => {
  const [tablegal, setTableGal] = useState([]);

  const getGalerie = async () => {
    const response = await axios.get("http://localhost:5000/api/galerie");
    setTableGal(response.data);
  };

  useEffect(() => {
    getGalerie();
  }, []);
  return (
    <section className="offres">
      <h1 className="engagement-titre">Galerie</h1>
      <div className="bar-souligne-galerie"></div>

      {tablegal.slice(0, 1).map((dg) => (
        <div key={dg.id} className="galerie">
          <h2>{dg.titre}</h2>
          <p>{dg.desription}</p>
          <img src={`http://localhost:5000${dg.image_url}`} alt="dg.titre" />
        </div>
      ))}

      <button className="savoirPlusGal">En savoir plus</button>
    </section>
  );
};

export default Gallerie;
