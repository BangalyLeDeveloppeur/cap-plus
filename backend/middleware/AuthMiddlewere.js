import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "ma_cle_secrete"; // Mets ça dans un .env

// Vérifie le token avant d'accéder à la route
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ error: "⚠️ Pas de token fourni" });
  }

  const token = authHeader.split(" ")[1]; // "Bearer <token>"
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "⛔ Token invalide ou expiré" });
    }
    req.user = decoded; // ajoute les infos du user au req
    next();
  });
};
