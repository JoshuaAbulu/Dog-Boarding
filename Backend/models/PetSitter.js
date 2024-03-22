// backend/models/PetSitter.js

const mongoose = require('mongoose');

const petSitterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  availability: {
    type: Date,
    required: true
  },
  // Add more fields as needed
});

const PetSitter = mongoose.model('PetSitter', petSitterSchema);

module.exports = PetSitter;
