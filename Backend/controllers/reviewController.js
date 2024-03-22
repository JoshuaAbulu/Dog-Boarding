// backend/controllers/reviewController.js
const Review = require('../models/Review');

exports.submitReview = async (req, res) => {
  try {
    const { petSitterId, rating, reviewText } = req.body;

    // Create new review
    const newReview = new Review({
      petSitterId,
      rating,
      reviewText
    });
    await newReview.save();

    return res.status(201).json({ message: 'Review submitted successfully', review: newReview });
  } catch (error) {
    console.error('Error submitting review:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
