
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Format: "Bearer token"

  if (!token) return res.status(403).json({ error: "⛔ Accès refusé" });

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.status(401).json({ error: "⛔ Token invalide" });
    req.user = user;
    next();
  });
};
