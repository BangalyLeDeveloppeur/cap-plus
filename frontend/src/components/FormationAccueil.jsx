import React from "react";
import imagformation from "../assets/images/imageFormation.png"
const FormationAccueil = () => {
  return (
    <div>
      <img src={imagformation} alt="Photo homme formation" />
      <div className="apropos-anonce">
        <p>
          Transformons ensemble la passion de la pisciculture en réussite
          durable.
        </p>
      </div>
    </div>
  );
};

export default FormationAccueil;
