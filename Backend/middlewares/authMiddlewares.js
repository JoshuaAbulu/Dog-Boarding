const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if(token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        if (!user) {
          throw new Error("User not found");
        }
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not authorized: token expired or invalid");
    }
  } else {
    throw new Error("No token attached to header");
  }
});

const IsAdmin = asyncHandler(async (req, res, next) => {
  const { user } = req;
  if (!user) {
    throw new Error("User not authenticated");
  }
  if (user.role !== "admin") {
    throw new Error("You are not an admin");
  }
  next();
});

module.exports = { authMiddleware, IsAdmin };