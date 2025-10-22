// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import demoRoutes from "./routes/demoRoutes.js";
import enrollRoutes from "./routes/enrollRoutes.js";

dotenv.config();
const app = express();

import cors from "cors";

app.use(
  cors({
    origin: [
      "https://cyberoaks-b953.vercel.app", 
      credentials: true,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ===== MongoDB Connection =====
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ Mongo connection error:", err));

// ===== Routes =====
app.use("/api/demo", demoRoutes);
app.use("/api/enroll", enrollRoutes);

// ===== Root Route =====
app.get("/", (req, res) => {
  res.status(200).json({
    activeStatus: true,
    error: false,
    message: "Cyberoaks backend running successfully 🚀",
  });
});

// ✅ DO NOT use app.listen() on Vercel
// Vercel automatically handles serverless functions
export default app;
