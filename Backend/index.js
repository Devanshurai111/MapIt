import express from 'express';
const router = express.Router();
const app = express();
import dotenv from "dotenv";
import connectDB from "./cofig.js";
import userRoutes from "./routes/users.js";
import pinRoutes from "./routes/pins.js";
dotenv.config();
app.use(express.json());
connectDB();
app.use("/api/users", userRoutes);
app.use("/api/pins", pinRoutes);
app.listen(8800, () => {
  console.log("Backend server is running!");
});
