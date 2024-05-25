import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";

export const globalErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({ message: err.message });
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new AppError("This Route Does Not Exists.", 404));
};
