import { createUser } from "../models/userModel.js";

export const addUser = (req, res) => {
  const { nom, email, message } = req.body;

  createUser(nom, email, message, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, nom, email, message });
  });
};
