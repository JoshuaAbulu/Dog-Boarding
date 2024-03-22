// backend/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Define booking routes
router.post('/bookings', bookingController.createBooking);
router.delete('/bookings/:id', bookingController.cancelBooking);
router.get('/bookings', bookingController.getBookings);

module.exports = router;
