import express from "express";
import { getDummyAvatarList } from "../services/avatarService.js";

const router = express.Router();

router.get("/list", (req, res) => {
  res.json(getDummyAvatarList());
});

export default router;
// Ruta para obtener la lista de avatares dummy
