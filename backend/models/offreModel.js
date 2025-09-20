import db from "../config/db.js";

const addOffre = (titre, description, image, callback) => {
  const sql = "INSERT INTO offres (titre,description,image) VALUE (?,?,?)";
  db.query(sql,[titre, description, image], callback);
};

export const getAllOffres = (callback) => {
  const sql = "SELECT * FROM offres";
  db.query(sql, callback);
};
