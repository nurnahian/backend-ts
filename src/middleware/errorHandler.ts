import express from "express";
import { getErrorMessage } from "../utils.js";

export default function errorHandler(
  error: unknown,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  if (res.headersSent) {
    next(error);
    return;
  }
  res.status(500).json({
    error: {
      message: getErrorMessage(error),
    },
  });
  next(error);
}
