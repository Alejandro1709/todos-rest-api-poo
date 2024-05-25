import { Request, Response } from "express";
import app from "./app";
import { PORT } from "./config/secrets";

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Ok" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
