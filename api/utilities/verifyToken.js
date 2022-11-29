import jwt from "jsonwebtoken";
import { createError } from "../utilities/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "Unauthorized!"));

  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(createError(403, "Token invalid!"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.param.id || req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "Unauthorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "Unauthorized!"));
    }
  });
};
