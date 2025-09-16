import db from "../config/db.js";

export const addPhoto = (image, description, callback) => {
  const sql = "INSERT INTO photos_accueil (image, description) VALUES (?, ?)";
  db.query(sql, [image, description], callback);
};

export const getPhotos = (callback) => {
  const sql = "SELECT * FROM photos_accueil";
  db.query(sql, callback);
};
