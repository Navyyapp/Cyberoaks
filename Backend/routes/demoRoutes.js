import express from "express";
import { saveDemo } from "../controllers/demoController.js";

const router = express.Router();

// POST route to save demo form data
router.post("/saveDemo", saveDemo);


router.get("/all", async (req, res) => {
  try {
    const Demo = (await import("../models/Demo.js")).default;
    const demos = await Demo.find();
    res.status(200).json({ success: true, data: demos });
  } catch (error) {
    console.error(" Error fetching demos:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
