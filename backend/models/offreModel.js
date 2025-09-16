import db from "../config/db.js";

export const getAllOffres = (callback) => {
  const sql = "SELECT * FROM offres";
  db.query(sql, callback);
};
