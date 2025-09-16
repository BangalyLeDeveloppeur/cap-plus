import React from "react";
import bassinPiscicole from "../assets/images/bassinPiscicole.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faSolidCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faRegularCircle } from "@fortawesome/free-regular-svg-icons";

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
      <div className="fac-circle">
        <FontAwesomeIcon icon={faSolidCircle} />
        <FontAwesomeIcon icon={faRegularCircle} />
        <FontAwesomeIcon icon={faRegularCircle} />
      </div>
      </div>

    </div>
  );
};

export default Fraicheur;
