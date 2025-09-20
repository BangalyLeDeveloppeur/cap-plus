import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { fetchOffres, uploadOffre } from "../controllers/offreController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const storage = multer.storage({
  destination: (req, file, cb) => {
    cb(null, path.json(__dirname, "../uploads"));
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
//pour des routes///

router.post("/", upload.single("image"), uploadOffre);
router.get("/", fetchOffres);

export default router;
