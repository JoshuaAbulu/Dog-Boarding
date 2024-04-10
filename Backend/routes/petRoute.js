const express = require("express");
const { 
    createPet,
    getaPet,
    getAllPet,
    updatePet,
    deletePet,
    addToWishlist,
    rating,
 } = require('../controllers/petCtrl');
 const {authMiddleware, IsAdmin} = require("../middlewares/authMiddlewares");
const router = express.Router();

router.post("/", createPet);
router.get("/:id", getaPet);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, updatePet);
router.delete("/:id", authMiddleware, IsAdmin, deletePet);

router.get("/", getAllPet);


module.exports = router;