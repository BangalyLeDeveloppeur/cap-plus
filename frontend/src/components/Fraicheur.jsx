import React from "react";
import bassinPiscicole from "../assets/images/bassin Piscicole.webp";

const Fraicheur = () => {
  return (
    <div className="c">
      <div className="cadrebassin">
        <img
          className="imgCadreBassin"
          src={bassinPiscicole}
          alt="Bassin piscicole"
        />
      </div>
      <div className="savourer">
        <p>
          Savourez la fraîcheur de nos poissons, élevés avec soin dans nos
          bassins
        </p>
        <button className="savoirPlus">En savoir plus</button>
      </div>
    </div>
  );
};

export default Fraicheur;
