import React from "react";

import Tunel from "../assets/images/tunelLumineux.png";


const GalerieAccueil = () => {
  return (
    <div className="nous-conteneur">
      <div>
        <img src={Tunel} alt="Photo reuinion" />
      </div>
      <div className="propos-anonce">
        <p>Galerie</p>

        </div>
       
    </div>
  );
};

export default GalerieAccueil;
