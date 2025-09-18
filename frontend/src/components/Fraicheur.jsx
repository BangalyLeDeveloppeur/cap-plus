import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

//import bassinPiscicole from "../assets/images/bassinPiscicole.webp"

const Fraicheur = () => {
  ///declarartion des mes states///
  const [photoTableAcueil, setphotoTableAccueil] = useState([]);
  const [curIndex, setcurIndex] = useState(0);

  useEffect(() => {
    const fetchAccueil = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:5000/api/photos_accueil"
        );
        setphotoTableAccueil(resp.data);
      } catch (error) {
        console.error("Erreur lors de la récupération :", error);
      }
    };
    fetchAccueil();
  }, []);
  ////gestion de mes slides///
  useEffect(() => {
    const interval = setInterval(() => {
      setcurIndex((prevIndex) =>
        photoTableAcueil.length > 0
          ? (prevIndex + 1) % photoTableAcueil.length
          : 0
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [photoTableAcueil]);

  ///fonction pour les slide
  const prevSlide = () => {
    setcurIndex((prevIndex) => (prevIndex -1 + photoTableAcueil.length)% photoTableAcueil.length);
  };
  const nexSlide = () => {
    setcurIndex((prevIndex) => (prevIndex + 1) % photoTableAcueil.length);
  };

  return (
    <div className="c">
      <div className="cadrebassin">
        {photoTableAcueil.length > 0 && (
          <div>
            <img
              src={`http://localhost:5000${photoTableAcueil[curIndex].image_url}`}
              alt={photoTableAcueil[curIndex].description}
            />
            <p>{photoTableAcueil[curIndex].description}</p>
          </div>
        )}
      </div>

      <div className="savourer">
        <button className="savoirPlus">En savoir plus</button>
        <div className="fac-circle">
         <button onClick={nexSlide}><FontAwesomeIcon icon={faArrowLeft}/></button> 
         <button onClick={prevSlide}><FontAwesomeIcon icon={faArrowRight} /></button> 
          
          
        </div>
      </div>
    </div>
  );
};

export default Fraicheur;
