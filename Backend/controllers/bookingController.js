// backend/controllers/bookingController.js
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const bookingData = req.body;

    // Create new booking
    const newBooking = new Booking(bookingData);
    await newBooking.save();

    return res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    // Fetch all bookings
    const bookings = await Booking.find();
    return res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;

    // Find booking by ID and delete
    await Booking.findByIdAndDelete(bookingId);

    return res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
