import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoute.js";
import offreRoutes from "./routes/offresRoute.js";
import photoRoutes from "./routes/photoRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // rendre les images accessibles publiquement

// Routes API
app.use("/api/users", userRoutes);
app.use("/api/offres", offreRoutes);
app.use("/api/photos", photoRoutes);

app.listen(PORT, () =>
  console.log(`🚀 API dispo sur http://localhost:${PORT}`)
);
