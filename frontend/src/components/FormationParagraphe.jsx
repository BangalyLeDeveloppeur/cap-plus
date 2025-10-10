// components/FormationParagraphe.js
import React from 'react';
import { useContent } from '../admin/component/Context';

const FormationParagraphe = () => {
  const { contents } = useContent();

  // Contenu par défaut si non défini
  const formationContent = contents.formation || {
    title: "Formation",
    description: `Vous êtes passionné par la pisciculture ? Alors, bienvenue chez
    CAP-PLUS. Nous sommes convaincus que le partage du savoir est la clé
    pour construire un avenir durable. À travers nos formations en
    pisciculture et en agriculture, nous offrons des compétences pratiques
    et concrètes, de l'élevage du tilapia, du tilapia rouge et du silure,
    jusqu'à la production maraîchère. Notre mission est claire : accompagner
    les passionnés, les jeunes entrepreneurs et les professionnels dans le
    développement de leur activité grâce à des techniques modernes,
    rentables et respectueuses de l'environnement. Avec CAP-PLUS,
    formez-vous aujourd'hui pour réussir demain.`
  };

  return (
    <div className="engagement">
      <div className="passion-titre">
        <h1>{formationContent.title}</h1>
        <div className="bar-souligne pton"></div>
      </div>
      <div className="cap-plus-equilibre">
        <p>{formationContent.description}</p>
      </div>
    </div>
  );
};

export default FormationParagraphe;