import { addOffre, getAllOffres } from "../models/offreModel.js";

export const uploadOffre = (req, res) => {
  const { titre, description } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "⚠️ Aucune image envoyée !" });
  }

  const imagePath =`/uploads/${req.file.filename}`;

  addOffre(titre, description, imagePath, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({
      id: result.insertId,
      message: "✅ Offre enregistrée",
      titre,
      description,
      image_url: imagePath,
    });
  });
};

export const fetchOffres = (req, res) => {
  getAllOffres((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
