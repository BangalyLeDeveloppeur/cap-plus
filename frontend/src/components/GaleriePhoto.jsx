import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const GaleriePhoto = () => {
  const [tabgalerie, setTableGalerie] = useState([]);

  console.log(tabgalerie);

  const getTab = async () => {
    const resTab = await axios.get("http://localhost:5000/api/galerie");
    setTableGalerie(resTab.data);
  };

  useEffect(() => {
    getTab();
  }, []);

  return (
    <div className="engagement">
      <div className="passion-titre">
        <h1>Nos photos</h1>
        <div className="bar-souligne pton"></div>
      </div>
      <div className="tab-offres">
        <ul>
          {tabgalerie.map((df) => (
            <li key={df.id} className="tab-offre">
              <span>{df.titre}</span>
              <span>{df.desription}</span>
              <img
                src={`http://localhost:5000${df.image_url}`}
                alt="dg.titre"
              />
            </li>
          ))}
        </ul>
      </div>

      <Link to={"/Contact"}>
        <button className="savoirPlusGal ptonn">Contact</button>
      </Link>
    </div>
  );
};
export default GaleriePhoto;
