import express from "express";
import { createOrder, saveEnrollment } from "../controllers/enrollController.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/save", saveEnrollment);

export default router;
