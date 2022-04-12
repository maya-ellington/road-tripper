const mongoose = require("mongoose");
const geoCoder = require("../utils/geocoder");

// const tripSchema = new Schema({
//     tripHours: {type: Number},
//     tripDays: {type: Number},
//     stopsEnRoute: [String],
//     story: {type: String},
//   }, {
//     timestamps: true
//   });


const TripBeginSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "Add a road trip starting point"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tripTitle: {
    type: String,
    required: true,
  },
//   tripDetails: tripSchema
});

// Before saving, convert address to geoCode
TripBeginSchema.pre("save", async function (next) {
  const loc = await geoCoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  // Do not save address
  this.address = undefined;
  next();
});

module.exports = mongoose.model("TripBegin", TripBeginSchema);
