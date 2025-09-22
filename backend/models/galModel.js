import db from "../config/db.js";

// ➕ Ajouter une image à la galerie
export const addGalerie = (titre, description, image_url, callback) => {
  const sql = "INSERT INTO galerie (titre, description, image_url) VALUES (?, ?, ?)";
  db.query(sql, [titre, description, image_url], callback);
};

// 📌 Récupérer toutes les images de la galerie
export const getAllGalerie = (callback) => {
  const sql = "SELECT * FROM galerie";
  db.query(sql, callback);
};
