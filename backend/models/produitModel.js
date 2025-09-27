import db from "../config/db.js";

// ➕ Ajouter une image à la galerie
export const addProduit = (description, image_url, callback) => {
  const sql = "INSERT INTO galerie (titre, description, image_url) VALUES (?, ?, ?)";
  db.query(sql, [description, image_url], callback);
};

// 📌 Récupérer toutes les images de la galerie
export const getAllProduit = (callback) => {
  const sql = "SELECT * FROM produit";
  db.query(sql, callback);
};