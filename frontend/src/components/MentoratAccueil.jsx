import React from "react";
import PhotoMentorat from "../assets/images/PhotoMentorat.png";
const MentoratAccueil = () => {
  return (
    <div>
      <div>
        <img src={PhotoMentorat} alt="Photo reuinion" />
      </div>
      <div className="apropos-anonce">
        <p>CAP-PLUS : guider aujourd’hui, réussir demain</p>
      </div>
    </div>
  );
};

export default MentoratAccueil;
