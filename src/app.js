import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weather.routes.js";
import cacheRoutes from "./routes/cache.routes.js";

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);
app.use("/api/cache", cacheRoutes);

export default app;
