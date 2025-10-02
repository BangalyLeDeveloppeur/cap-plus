import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../config/db.js";

const SECRET_KEY = process.env.JWT_SECRET || "ma_cle_secrete";

// 📌 Connexion
export const login = (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(400).json({ error: "Utilisateur non trouvé" });

    const user = result[0];
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) return res.status(400).json({ error: "Mot de passe incorrect" });

    // Génération du token
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token });
  });
};

// 📌 Inscription (optionnel)
export const register = (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.status(201).json({ message: "✅ Utilisateur créé !" });
  });
};
