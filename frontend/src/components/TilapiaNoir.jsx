import React from "react";
import Tilapia from "../assets/images/TilapiaNoir.png";
import TilapiaRouge from "../assets/images/TilapiaRouge.png";
import silure from "../assets/images/silure.png";

const TilapiaNoir = () => {
  return (
    <div>
      <div className="engagement">
        <h1>Nos poissons</h1>
        <div className="bar-souligne nosPoisson"></div>
      </div>
      <div className="titre">
        <h2 className="titre-tilapiaRouge">Tilapia noir</h2>
        <div className="passion-para">
          <div className="passionParagraphe">
            <p>
              Le tilapia noir, également connu sous le nom de perche noire à
              petite bouche, est un poisson d’eau douce très apprécié pour sa
              chair tendre, maigre et au goût délicat. <br /> Facile à cuisiner
              et polyvalent, il s’adapte à de nombreuses préparations culinaires
              : grillé, frit, braisé ou encore au four. <br />
              Riche en protéines de haute qualité et faible en graisses, il
              constitue un choix nutritif et sain pour les consommateurs
              soucieux de leur alimentation. Populaire dans de nombreuses
              cuisines du monde entier, le tilapia noir est disponible aussi
              bien frais que surgelé, ce qui en fait un produit accessible et
              apprécié tout au long de l’année.
            </p>
          </div>
          <div className="passionImage">
            <img src={Tilapia} alt="Tilapia" />
          </div>
        </div>
      </div>


      <div className="titre">
        <h3 className="titre-tilapiaRouge">Tilapia rouge</h3>

      <div className="passion-para">
        <div className="passionImage">
          <img src={TilapiaRouge} alt="Tilapia" />
        </div>
        <div className="passionParagraphe">
          <p>
            Le tilapia rouge est un poisson d’élevage d’eau douce à la chair
            blanche, tendre et délicate, offrant un goût doux et légèrement
            sucré. <br /> Sa polyvalence culinaire en fait un allié idéal pour
            toutes les préparations : grillades, fritures, cuisson au four ou à
            la vapeur. Sain, savoureux et raffiné, il apporte une touche unique
            et gourmande à chaque assiette.
          </p>
        </div>
      </div>
      </div>
      


        <div className="titre">
          <h4 className="titre-tilapiaRouge">Silure</h4>

          <div className="passion-para">
            <div className="passionParagraphe">
              <p>
                Le silure africain est un poisson d’eau douce robuste et charnu,
                dépourvu d’écailles et reconnaissable à ses barbillons
                sensoriels et à sa large bouche. <br /> Résistant et doté d’un
                organe respiratoire lui permettant de survivre hors de l’eau, il
                s’adapte parfaitement à l’élevage. Sa chair riche, tendre et
                savoureuse en fait un choix apprécié aussi bien des éleveurs que
                des consommateurs, idéal pour une alimentation saine et variée
              </p>
            </div>

            <div className="passionImage">
              <img src={silure} alt="Tilapia" />
            </div>
        </div>
          </div>



      </div>
    
  );
};

export default TilapiaNoir;
