import React from "react";
import Tunel from "../assets/images/tunelLumineux.png"
 
const GalerieAccueil = () => {
  return (
    <div>
      <div>
        <img src={Tunel} alt="Photo reuinion" />
      </div>
      <div className="apropos-anonce">
        <p>Galerie</p>
      </div>
    </div>
  );
};

export default GalerieAccueil;
