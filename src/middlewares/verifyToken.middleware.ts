import { NextFunction, Request, Response } from "express";
import { envConfig } from "../config";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await fetch(
      `${envConfig.SERVICES.AUTH_SERVICE_URL!}/auth/api/v1/auth/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: req.headers.authorization!,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    req.headers.userId = data.id;

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
