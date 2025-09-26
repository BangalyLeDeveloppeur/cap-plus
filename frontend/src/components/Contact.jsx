import React, { useState } from "react";

const Contact = () => {
  return (
    <div >
      <h1 className="eng">Contact</h1>
      <form className="contact-form">
        
        <label>
          Nom
          <input type="text" name="nom" placeholder="Votre nom" required/>
        </label>

        <label>
          Prénom
          <input type="text" name="prenom" placeholder="Votre prenom" required/>
        </label>

        <label>
          E-mail
          <input type="email" name="email" placeholder="Votre E-mail" required />
        </label>

        <label>
          Message
          <textarea name="message" placeholder="Votre message" rows="4" required readOnly />
        </label>

        <button type="submit" className="savoirPlusGal">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
