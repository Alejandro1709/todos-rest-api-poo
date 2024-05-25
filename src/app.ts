import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ENV } from "./config/secrets";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());

    if (ENV === "development") {
      this.app.use(morgan("dev"));
    }
  }
}

export default new App().app;
