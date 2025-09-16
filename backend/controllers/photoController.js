// backend/controllers/photoController.js
import db from "../config/db.js"; // ta connexion MySQL

// 📌 Enregistrer une photo + description en base
export const uploadPhoto = (req, res) => {
  const { description } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "Aucune image envoyée" });
  }

  const imagePath = `/uploads/${req.file.filename}`;

  // 💾 Enregistrer en base
  const sql = "INSERT INTO photo_accueil (image, description) VALUES (?, ?)";
  db.query(sql, [imagePath, description], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({
      message: "✅ Photo enregistrée",
      id: result.insertId,
      image: imagePath,
      description,
    });
  });
};

// 📌 Récupérer toutes les photos
export const getPhotos = (req, res) => {
  db.query("SELECT * FROM photo_accueil", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
