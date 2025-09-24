import React from "react";
import Pisciculteur from "../assets/images/PisciculteurBassin.png";

const NousSomme = () => {
  return (
    <div>
      <img src={Pisciculteur} alt="Pisciculteur dans bassin piscicole" />
      <div className="apropos-anonce">
        <p>
          Nous sommes des éleveurs engagés à offrir des poissons sains,
          responsables et accessibles à tous.
        </p>
      </div>
    </div>
  );
};

export default NousSomme;
