import db from "../config/db.js";

// ➕ Ajouter une image à la galerie
export const addEquipe = (nom, prenom, role, image_url, callback) => {
  const sql =
    "INSERT INTO equipe (nom, prenom, role, image_url) VALUES (?, ?, ?,?)";
  db.query(sql, [nom, prenom, role, image_url], callback);
};

// 📌 Récupérer toutes les images de la galerie
export const getAllEquipe = (callback) => {
  const sql = "SELECT * FROM equipe";
  db.query(sql, callback);
};
