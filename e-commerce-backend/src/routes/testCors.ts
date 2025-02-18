import express, { Request, Response } from "express";

const router = express.Router();

router.get("/corsget", (req: Request, res: Response): void => {
  res.json({ message: "Cors succesfully work!!!" });
});

export default router;
