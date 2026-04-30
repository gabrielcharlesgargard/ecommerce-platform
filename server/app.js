import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes FIRST
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);

// Error handlers LAST
app.use(notFound);
app.use(errorHandler);

export default app;
