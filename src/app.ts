import express from "express";
import morgan from "morgan";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";
import { ENV } from "./config/secrets";
import {
  globalErrorHandler,
  notFoundHandler,
} from "./middlewares/errorMiddleware";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandlers();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());

    if (ENV === "development") {
      this.app.use(morgan("dev"));
    }
  }

  private routes(): void {
    this.app.use("/api/v1/todos", todoRoutes);
  }

  private errorHandlers(): void {
    this.app.all("*", notFoundHandler);
    this.app.use(globalErrorHandler);
  }
}

export default new App().app;
