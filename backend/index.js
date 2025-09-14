import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🔌 Connexion MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // le non utilisateur MySQL
  password: "", // mon mot de passe MySQL
  database: "gapplus",  // le nom de ma base créée sql
  port: 3306
});

// Vérification connexion
db.connect((err) => {
  if (err) throw err;
  console.log("✅ Connecté à MySQL");
});

// 📌 Route : récupérer toutes les offres
app.get("/api/offres", (req, res) => {
  db.query("SELECT * FROM offres", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// 📌 Route : ajouter un user via formulaire
app.post("/api/users", (req, res) => {
  const { nom, email, message } = req.body;
  db.query(
    "INSERT INTO users (nom, email, message) VALUES (?, ?, ?)",
    [nom, email, message],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json({ id: result.insertId, nom, email, message });
    }
  );
});

app.listen(5000, () => console.log("🚀 API dispo sur http://localhost:5000"));
