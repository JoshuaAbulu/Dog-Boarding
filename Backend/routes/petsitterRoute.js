const express = require("express");
const { 
  createPetsitter, 
  loginPetsitterCtrl, 
  getallPetsitter, 
  getaPetsitter, 
  deleteaUser, 
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
} = require("../controllers/petsitterCtrl");
const {petsitterauthMiddleware, IsAdmin} = require("../middlewares/petsitterauthMiddlewares");
const router = express.Router();
router.post("/register", createPetsitter);
router.post("/login", loginPetsitterCtrl);
router.put("/edit-user", petsitterauthMiddleware, updatedUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.put("/block-user/:id", petsitterauthMiddleware, IsAdmin, blockUser);
router.put("/unblock-user/:id", petsitterauthMiddleware, IsAdmin, unblockUser);
router.get("/all-petsitters", getallPetsitter);
router.get("/:id", petsitterauthMiddleware, IsAdmin, getaPetsitter); 
router.delete("/:id", deleteaUser);

module.exports = router;
