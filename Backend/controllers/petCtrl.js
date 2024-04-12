const Pet = require("../models/petModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbid");

const createPet = asyncHandler(async (req, res) => {
  try {
    if (req.body.petname) {
      req.body.slug = slugify(req.body.petname);
    }
    const newPet = await Pet.create(req.body);
    res.json(newPet);
  } catch (error) {
    throw new Error(error);
  }
});

const updatePet = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.petname) {
      req.body.slug = slugify(req.body.petname);
    }
    const updatePet = await Pet.findOneAndUpdate({ id }, req.body, {
      new: true,
    });
    res.json(updatePet);
  } catch (error) {
    throw new Error(error);
  }
});

const deletePet = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    const deletePet = await Pet.findOneAndDelete(id);
    res.json(deletePet);
  } catch (error) {
    throw new Error(error);
  }
});

const getaPet = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findPet = await Pet.findById(id);
    res.json(findPet);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllPet = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Pet.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const petCount = await Pet.countDocuments();
      if (skip >= petCount) throw new Error("This Page does not exists");
    }
    const pet = await query;
    res.json(pet);
  } catch (error) {
    throw new Error(error);
  }
});
const addToWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { petId } = req.body;
  try {
    const user = await User.findById(_id);
    const alreadyadded = user.wishlist.find((id) => id.toString() === petId);
    if (alreadyadded) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: petId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: petId },
        },
        {
          new: true,
        }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { star, petId, comment } = req.body;
  try {
    const pet = await Pet.findById(petId);
    let alreadyRated = pet.ratings.find(
      (userId) => userId.postedby.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Pet.updateOne(
        {
          ratings: { $elemMatch: alreadyRated },
        },
        {
          $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
          new: true,
        }
      );
    } else {
      const ratePet = await Pet.findByIdAndUpdate(
        petId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedby: _id,
            },
          },
        },
        {
          new: true,
        }
      );
    }
    const getallratings = await Pet.findById(petId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingsum / totalRating);
    let finalpet = await Pet.findByIdAndUpdate(
      petId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );
    res.json(finalpet);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createPet,
  getaPet,
  getAllPet,
  updatePet,
  deletePet,
  addToWishlist,
  rating,
};
