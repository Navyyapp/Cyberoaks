// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import demoRoutes from "./routes/demoRoutes.js";
import enrollRoutes from "./routes/enrollRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
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


export default app;
