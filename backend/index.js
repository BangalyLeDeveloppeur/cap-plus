import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoute.js";
import offreRoutes from "./routes/offresRoute.js";
import photoRoutes from "./routes/photoRoutes.js";
import galerieRoutes from "./routes/galerieRoute.js";
import equipeRoutes from "./routes/equipeRoute.js";
import ProduitRoutes from "./routes/produitRouter.js";
import adminAuthRoute from "./routes/administrateursRoute.js"

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);




// Fichiers statiques
app.use("/uploads", express.static("uploads"));

// Routes API
app.use("/api/users", userRoutes);
app.use("/api/administrateur", adminAuthRoute );
app.use("/api/offres", offreRoutes);
app.use("/api/photos_accueil", photoRoutes);
app.use("/api/galerie", galerieRoutes);
app.use("/api/equipe", equipeRoutes);
app.use("/api/produit", ProduitRoutes);

// Middleware de gestion d'erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Erreur serveur !" });
});

// Lancer le serveur
app.listen(PORT, () =>
  console.log(`🚀 API dispo sur http://localhost:${PORT}`)
);
