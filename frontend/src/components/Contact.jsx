import React, { useState } from "react";
import ContactMap from "./ContactMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé:", formData);
    alert("Message envoyé avec succès !");
    
    // Reset du formulaire
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      message: ""
    });
  };

  return (
    <div>
      <h1 className="eng">Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        
        <label>
          Nom
          <input 
            type="text" 
            name="nom" 
            placeholder="Votre nom" 
            value={formData.nom}
            onChange={handleChange}
            required 
          />
        </label>

        <label>
          Prénom
          <input 
            type="text" 
            name="prenom" 
            placeholder="Votre prenom" 
            value={formData.prenom}
            onChange={handleChange}
            required 
          />
        </label>

        <label>
          E-mail
          <input 
            type="email" 
            name="email" 
            placeholder="Votre E-mail" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </label>

        <label>
          Message
          <textarea 
            name="message" 
            placeholder="Votre message" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </label>

        <button type="submit" className="envoyer">
          Envoyer
        </button>
      </form>
      {/*carte*/}
      <ContactMap/>
    </div>
  );
};

export default Contact;