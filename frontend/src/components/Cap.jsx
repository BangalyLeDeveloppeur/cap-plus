import React from "react";
import BassinPiscicole from "../assets/images/BassinPiscicole.png";

const Cap = () => {
  return (
    <div>
      <div>
        <img src={BassinPiscicole} alt="Photo bassin piscicole" />
        <div className="apropos-anonce">
          <p>
            Etes-vous passionné de la pisciculture ? Bienvenue chez CAP-Plus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cap;
