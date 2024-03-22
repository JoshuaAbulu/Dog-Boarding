// backend/routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.get('/search/pet-sitters', searchController.searchPetSitters);

module.exports = router;
