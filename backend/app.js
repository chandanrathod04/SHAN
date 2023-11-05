import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./database.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes.js";
import morgan from "morgan";

const app = express();

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load("./swagger.yaml");

const corsOption = {
  credentials: true,
  origin: ["https://shan-frontend.vercel.app", "https://shan.sakurakat.systems"]

};
app.use(cors(corsOption));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cookieParser());
app.use(express.json());

// connection to database
connectDB();

// http logger
app.use(morgan("dev"));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("<h1>Hello from server</h1>");
});

export default app;
