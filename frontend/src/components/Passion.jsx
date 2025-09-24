import React from "react";
import Main from "../assets/images/main.png"

const Passion = () => {
  return (
    <div>
      <div className="passion-titre">
        <h1>Apropos de nous</h1>
        <div className="bar-souligne"></div>
      </div>
      <div className="passion-paragraphe">
        <p>
          Nous, Bangaly et Nina, avons transformé notre passion en une véritable
          vocation. Animés par l’amour de l’agriculture et de la pisciculture,
          nous avons fait de l’élevage du tilapia, du tilapia rouge et du
          silure, ainsi que de la culture maraîchère, bien plus qu’une activité
          : un projet de vie. De cette vision est née CAP-PLUS, une entreprise
          d’agrobusiness bâtie sur le savoir-faire, l’innovation et un profond
          respect de l’environnement. Chaque jour, nous nous engageons à
          produire des aliments sains, frais et de qualité, tout en créant de la
          valeur pour nos communautés. Notre ambition est claire : nourrir
          aujourd’hui de manière responsable, tout en préservant les ressources
          pour demain et en contribuant activement au développement local et à
          la sécurité alimentaire.
        </p>
        <img src={Main}/>
      </div>
      <button className="savoirPlusGal">En savoir plus</button>
    </div>
  );
};

export default Passion;
