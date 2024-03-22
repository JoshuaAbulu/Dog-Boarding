const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  pet: {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    birthday: { type: Date, required: true },
    gender: { type: String, enum: ['male', 'female'], required: true },
    spayedNeutered: { type: String, enum: ['yes', 'not_sure', 'no'], required: true },
    weight: { type: String, enum: ['5-20', '21-50', '51-99', '100+'], required: true },
  },
  services: {
    dogSitting: { type: Boolean, default: false },
    dogWalking: { type: Boolean, default: false },
    dogGrooming: { type: Boolean, default: false },
    overnightCare: { type: Boolean, default: false },
  },
  address: { type: String, required: true },
});

module.exports = mongoose.model('Profile', profileSchema);
