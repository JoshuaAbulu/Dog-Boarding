const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var petSchema = new mongoose.Schema(
  {
    petname: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    petestablishedBirthday: {
      type: Date,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },
    sterilization: {
      type: String,
      enum: ['Yes', 'No', 'Not Sure'],
      required: true,
    },
    weight: [{
        type: String,
        enum: ['5-20 lbs', '21-50 lbs', '51-99 lbs', '100+'],
        required: true
    }],
    address: {
      type: String,
      required: true,
    },
    servicesNeeded: [{
        type: String,
        enum: ['Dog sitting', 'Dog walking', 'Dog grooming', 'Dog overnight care'],
        required: true
    }],
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    color: [],
    tags: String,
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Pet", petSchema);
