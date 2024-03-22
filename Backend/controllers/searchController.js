// backend/controllers/searchController.js
const PetSitter = require('../models/PetSitter');

exports.searchPetSitters = async (req, res) => {
  try {
    const { location, dates } = req.query;

    // Perform search based on location and dates
    const petSitters = await PetSitter.find({ location, availability: { $gte: new Date(dates) } });

    return res.status(200).json({ petSitters });
  } catch (error) {
    console.error('Error searching pet sitters:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
