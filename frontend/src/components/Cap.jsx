import React from "react";
import BassinPiscicole from "../assets/images/BassinPiscicole.png";

const Cap = () => {
  return (
    <div className="nous-conteneur">
    
        <img src={BassinPiscicole} alt="Photo bassin piscicole" />
        <div className="propos-anonce">
          <p>
            Etes-vous passionné de la pisciculture ? Bienvenue chez CAP-Plus
          </p>
        </div>
    
    </div>
  );
};

export default Cap;
