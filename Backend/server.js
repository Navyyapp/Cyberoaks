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

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected successfully"))
  .catch((err) => console.error(" Mongo connection error:", err));

// Routes
app.use("/api/demo", demoRoutes);

// Root test route
app.get("/", (req, res) => {
  res.send("Cyberoaks backend running successfully ");
});
// Routes
app.use("/api/enroll", enrollRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
