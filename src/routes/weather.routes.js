import express from "express";
import { getWeatherDashboard } from "../controllers/weather.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { cacheMiddleware } from "../middlewares/cache.middleware.js";

const router = express.Router();

router.get(
  "/dashboard",
  // authMiddleware,
  cacheMiddleware,
  getWeatherDashboard
);

export default router;
