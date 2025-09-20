import db from "../config/db.js";

export const addOffre = (titre, description, image_url, callback) => {
  const sql =
    "INSERT INTO offres (titre, description, image_url) VALUES (?, ?, ?)";
  db.query(sql, [titre, description, image_url], callback);
};

export const getAllOffres = (callback) => {
  const sql = "SELECT * FROM offres";
  db.query(sql, callback);
};
