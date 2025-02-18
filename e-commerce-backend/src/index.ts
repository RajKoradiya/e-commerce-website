import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number = 8080;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello, TypeScript with Node.js!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
