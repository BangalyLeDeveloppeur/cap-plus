import React from "react";
import Logofacebook from "../assets/images/logos_facebook.png";
import LogoOpenmo from "../assets/images/openmoji_youtube.png";
import LogoInsta from "../assets/images/skill-icons_instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Liens rapides */}
        <div className="footer-section">
          <h4>Liens rapides</h4>
          <ul className="liens-rapides">
            <a>
              <li className="liens-rapides">Accueil</li>
            </a>
            <li className="liens-rapides">Qui sommes-nous</li>
            <li className="liens-rapides">Offres</li>
            <li className="liens-rapides">Galerie</li>
            <li className="liens-rapides">Contact</li>
          </ul>
        </div>

        {/* Adresse */}
        <div className="footer-section">
          <h4>Adresse</h4>
          <ul className="footer-section-adressee">
            <li>Guinée Conakry</li>
            <li>Préfecture Dubreka</li>
            <li>+224 623 52 99 89</li>
            <li>condebangaly580@gmail.com</li>
            <li>Siège Nongo</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-section">
          <h4>Réseaux sociaux</h4>
          <div className="footer-reseaux">
          <img src={Logofacebook} alt="Facebook" width="30" />
          <img src={LogoOpenmo} alt="youtub" width="30" />
          <img src={LogoInsta} alt="instatgram" width="30" />
          </div>
          <button className="savoirPlus">Contact</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CAP-PLUS. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
