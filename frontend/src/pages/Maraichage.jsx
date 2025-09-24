import React from 'react';
import MaraichèreAccueil from '../components/MaraichèreAccueil';
import Choisir from "../components/Choisir";
import NosProduitMaraihère from '../components/NosProduitMaraihère';
const Maraichage = () => {
    return (
        <div>
           <MaraichèreAccueil/> 
           <NosProduitMaraihère/> 
           <Choisir />
        </div>
    );
};

export default Maraichage;