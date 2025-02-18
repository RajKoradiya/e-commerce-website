import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/testCors";

dotenv.config();

const app: Application = express();
const port: number = 8080;

const corsConfig = {
  origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsConfig));

app.use(router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
