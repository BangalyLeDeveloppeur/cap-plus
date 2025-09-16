import express from "express";
import { fetchOffres } from "../controllers/offreController.js";

const router = express.Router();

router.get("/", fetchOffres);

export default router;
