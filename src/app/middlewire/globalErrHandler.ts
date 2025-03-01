import { NextFunction, Request, Response } from "express";

const globalErrHandlingFn = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrHandlingFn;