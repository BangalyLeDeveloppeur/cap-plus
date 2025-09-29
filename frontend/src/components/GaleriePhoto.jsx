import React from "react";
import { Link } from "react-router-dom";
const GaleriePhoto = () => {
  return (
    <div className="engagement">
      <div className="passion-titre">
        <h1>Nos photos</h1>
        <div className="bar-souligne pton"></div>
      </div>
      <div className="Galerie-contener">
        <span>Photos galerie</span>
      </div>
      <Link to={"/Contact"}>
      <button className="savoirPlusGal">Contact</button>
      </Link>
    </div>
  );
};

export default GaleriePhoto;
