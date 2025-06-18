import express from "express";
import { searchItems } from "../controllers/itemsController.js";

const router = express.Router();

router.get("/", searchItems);

export default router;
