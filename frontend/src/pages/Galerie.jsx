import React from "react";
import GalerieAccueil from "../components/GalerieAccueil";
import GaleriePhoto from "../components/GaleriePhoto";
import Choisir from "../components/Choisir";

const Galerie = () => {
  return (
    <div>
      <GalerieAccueil />
      <GaleriePhoto />
      <Choisir />
    </div>
  );
};

export default Galerie;
