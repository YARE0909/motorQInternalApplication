import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import healthCheckRoutes from "../routes/healthCheck";
import vehicleRoutes from "../routes/vehicleRoutes";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/vehicles", vehicleRoutes);
app.use("/health", healthCheckRoutes);

// 404 Error handler
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
