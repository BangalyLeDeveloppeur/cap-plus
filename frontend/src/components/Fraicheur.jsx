import React, { useState, useEffect } from "react";
import axios from "axios";
//import bassinPiscicole from "../assets/images/bassinPiscicole.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faSolidCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faRegularCircle } from "@fortawesome/free-regular-svg-icons";
//import PhotosAccueil from "./photoAccueil";

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
    setcurIndex((prevIndex) => (prevIndex + 1) % photoTableAcueil.length);
  };
  const nexSlide = () => {
    setcurIndex((nexIndex) => (prevIndex - 1) % photoTableAcueil.length);
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
          <FontAwesomeIcon icon={faSolidCircle} />
          <FontAwesomeIcon icon={faRegularCircle} />
          <FontAwesomeIcon icon={faRegularCircle} />
        </div>
      </div>
    </div>
  );
};

export default Fraicheur;
