import React from "react";
import Fraicheur from "../components/Fraicheur";
import EngaCap from "../components/EngaCap";
import Offres from "../components/Offres";
import Gallerie from "../components/Gallerie";
import Choisir from "../components/Choisir";



const Home = () => {
  return (
    <div>
      <Fraicheur />
      <EngaCap/>
      <Offres/>
      <Gallerie/>
      <Choisir/>
    </div>
  );
};

export default Home;
