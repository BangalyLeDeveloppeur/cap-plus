import db from "../config/db.js";

export const createUser = (nom, email, message, callback) => {
  const sql = "INSERT INTO users (nom, email, message) VALUES (?, ?, ?)";
  db.query(sql, [nom, email, message], callback);
};
