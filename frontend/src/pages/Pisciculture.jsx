import React from "react";
import TilapiaNoir from "../components/TilapiaNoir";
import Choisir from "../components/Choisir";
import Cap from "../components/Cap";
import PicciculturePoisson from "../components/PicciculturePoisson";
const Pisciculture = () => {
  return (
    <div>
      <Cap/>
      <PicciculturePoisson/>
      <TilapiaNoir />
      <Choisir />
    </div>
  );
};

export default Pisciculture;
