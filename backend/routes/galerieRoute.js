import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { uploadGalerie, fetchGalerie } from "../controllers/galerieController.js";
import { verifyToken } from "../middLeware/AuthMiddlewere.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// routes
router.post("/",verifyToken, upload.single("image"), uploadGalerie);
router.get("/", fetchGalerie);

export default router;