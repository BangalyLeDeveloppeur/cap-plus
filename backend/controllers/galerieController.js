import { addGalerie, getAllGalerie } from "../models/galModel.js";

// 📌 Fonction pour ajouter une image dans la galerie
export const uploadGalerie = (req, res) => {
  const { titre, description } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "⚠️ Aucune image n'a été envoyée" });
  }

  const imagePath = `/uploads/${req.file.filename}`;

  addGalerie(titre, description, imagePath, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    return res.status(201).json({
      id: result.insertId,
      message: "✅ Galerie ajoutée avec succès !",
      titre,
      description,
      image_url: imagePath,
    });
  });
};

// 📌 Fonction pour récupérer toutes les galeries
export const fetchGalerie = (req, res) => {
  getAllGalerie((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
