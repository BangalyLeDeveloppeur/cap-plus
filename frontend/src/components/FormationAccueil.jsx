import React from "react";
import imagformation from "../assets/images/imageFormation.png"
const FormationAccueil = () => {
  return (
    <div className="nous-conteneur">
      <img src={imagformation} alt="Photo homme formation" />
      <div className="propos-anonce">
        <p>
          Transformons ensemble la passion de la pisciculture en réussite
          durable.
        </p>
      </div>
    </div>
  );
};

export default FormationAccueil;
