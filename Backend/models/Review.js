// backend/models/Review.js

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  petSitter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PetSitter',
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
