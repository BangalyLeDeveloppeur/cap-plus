import React from "react";
import Carrotte from "../assets/images/Carrotte.png";


const MaraichèreAccueil = () => {
  return (
    <div>
      <div>
        <img src={Carrotte} alt="Photo Carrotte" />
        <div className="apropos-anonce">
          <p>
            CAP-PLUS vous offre des légumes 100 % bio, frais et savoureux, pour
            allier goût et santé au naturel.
          </p>
        </div>
        <p>
          Dans sa volonté de promouvoir une alimentation saine et équilibrée,
          CAP-PLUS s’est engagée dans la production de légumes biologiques tels
          que le piment, l’aubergine, le gombo, la pastèque et la tomate. Grâce
          à une agriculture responsable et respectueuse de l’environnement, nous
          offrons aux consommateurs des produits frais, naturels et nutritifs,
          afin de contribuer à une meilleure santé et à un bien-être durable.
        </p>
      </div>
    </div>
  );
};

export default MaraichèreAccueil;
