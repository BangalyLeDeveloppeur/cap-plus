import { addProduit, getAllProduit } from "../models/produitModel.js";

// 📌 Fonction pour ajouter une image dans la table equipe
export const uploadProduit = (req, res) => {
  const {titre, description } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: " Aucune image n'a été envoyée" });
  }

  const imagePath = `/uploads/${req.file.filename}`;

  addProduit(titre,description, imagePath, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    return res.status(201).json({
      id: result.insertId,
      message: "Produit ajouté avec succès !",
      description,
      image_url: imagePath,
    });
  });
};

// 📌 Fonction pour récupérer toutes les galeries
export const fetchProduit = (req, res) => {
  getAllProduit((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
