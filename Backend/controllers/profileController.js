const Profile = require('../models/Profile');

exports.createDogProfile = async (req, res) => {
  try {
    const profileData = req.body;


    const newProfile = new Profile({
      pet: {
        name: profileData.pet.name,
        breed: profileData.pet.breed,
        birthday: profileData.pet.birthday,
        gender: profileData.pet.gender,
        spayedNeutered: profileData.pet.spayedNeutered,
        weight: profileData.pet.weight,
      },
      services: {
        dogSitting: profileData.services.dogSitting,
        dogWalking: profileData.services.dogWalking,
        dogGrooming: profileData.services.dogGrooming,
        overnightCare: profileData.services.overnightCare,
      },
      address: profileData.address,
    });

    await newProfile.save();

    return res.status(201).json({ message: 'Profile created successfully', profile: newProfile });
  } catch (error) {
    console.error('Error creating profile:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
