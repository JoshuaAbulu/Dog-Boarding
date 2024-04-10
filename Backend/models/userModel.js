const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require("bcrypt");

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    postalCode:{
        type:String,
        required:true,
    },
    address: [{
        type: String
    }],
    password:{
        type:String,
        required:true,
    },
    confirmPassword:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        default: "petowner",
    },
    isBlocked: {
        type:Boolean,
        default: false,
    },
    images: [
        {
          public_id: String,
          url: String,
        },
    ],
    
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    refreshToken: {
        type: String,
    },
    }, 
    {
      timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  userSchema.pre("save", async function (next) {
    if (!this.isModified("confirmPassword")) {
      next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
    next();
  });

  userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

//Export the model
module.exports = mongoose.model('User', userSchema);