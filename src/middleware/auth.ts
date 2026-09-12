import express from "express";

export function auth(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) {
  const apikey = req.headers["x-api-key"];

  if (apikey === "mysecretkey") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
