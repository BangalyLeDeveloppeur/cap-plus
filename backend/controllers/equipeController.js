import { addEquipe, getAllEquipe } from "../models/equpeModel.js";

// 📌 Fonction pour ajouter une image dans la table equipe
export const uploadEquipe = (req, res) => {
  const { nom, prenom, role } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: "⚠️ Aucune image n'a été envoyée" });
  }

  const imagePath = `/uploads/${req.file.filename}`;

  addEquipe(nom, prenom, role, imagePath, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    return res.status(201).json({
      id: result.insertId,
      message: "✅ Galerie ajoutée avec succès !",
      nom,
      prenom,
      role,
      image_url: imagePath,
    });
  });
};

// 📌 Fonction pour récupérer toutes les galeries
export const fetchEquipe = (req, res) => {
  getAllEquipe((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
