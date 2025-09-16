import { getAllOffres } from "../models/offreModel.js";

export const fetchOffres = (req, res) => {
  getAllOffres((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
