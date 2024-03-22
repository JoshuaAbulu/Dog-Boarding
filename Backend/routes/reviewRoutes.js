// backend/routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Route for submitting a review
router.post('/', reviewController.submitReview);

module.exports = router;
