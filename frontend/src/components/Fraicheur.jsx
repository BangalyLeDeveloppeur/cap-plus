import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Fraicheur = () => {
  const [photosAccueil, setPhotosAccueil] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //  Fonction pour récupérer les images
  const fetchAccueil = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/photos_accueil");
      setPhotosAccueil(resp.data);
    } catch (error) {
      console.error("Erreur lors de la récupération :", error);
    }
  };

  //  On charge les images une seule fois au montage
  useEffect(() => {
    fetchAccueil();
  }, []);

  //  Défilement automatique toutes les 3 secondes
  useEffect(() => {
    if (photosAccueil.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photosAccueil.length);
    }, 3000);

    return () => clearInterval(interval); // nettoyage
  }, [photosAccueil]);

  //  Boutons suivant / précédent
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photosAccueil.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + photosAccueil.length) % photosAccueil.length
    );
  };

  //  Gestion du "loading"
  if (photosAccueil.length === 0) {
    return <p>Chargement des images...</p>;
  }

  //  Image courante
  const currentPhoto = photosAccueil[currentIndex];

  return (
    <div className="c">
      <div className="cadrebassin">
        <div className="cadreImage">
          <img
            src={`http://localhost:5000${currentPhoto.image_url}`}
            alt={currentPhoto.description}
          />
          <div className="cadreParagraphe">
            <p>{currentPhoto.description}</p>
          </div>
        </div>
      </div>

      <div className="savourer">
        <button
          className="savoirPlus"
          onClick={() => {
            document.getElementById("offre")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          En savoir plus
        </button>

        <div className="cadreFac">
          <button onClick={prevSlide} aria-label="Image précédente">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button onClick={nextSlide} aria-label="Image suivante">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fraicheur;
