import db from "../config/db.js";
import { getAllOffres } from "../models/offreModel.js";

///la fonction que permette d'enregistrer les images dans mon dossier upload dans backend///

const uploadOffre = (req, res) => {
  const { titre, description } = req.body;

  if (!req.file) {
    return res.status(400).json({ err: "Aucune image na éte envoyée !" });
  }
  const imagePath = `/uploads/${req.file.filename}`;
};
///fonction qui enregistre les données dans ma table offres///
const sql =
  "INSERT INTO offres(titre, description, image_url, created_at) VALUE(?,?,? ,NOW())";
db.query(sql, [titre, description, imagePath], (err, result) => {
  if (err) return res.status(500).json({ error: err });
  return res.status(201).json({
    id: result.insertId,
    message: "photo enregistrée avec succès",
    image: imagePath,
    description,
    titre,
  });
});

export const fetchOffres = (req, res) => {
  getAllOffres((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
