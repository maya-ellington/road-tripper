const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const startingPointSchema = new Schema(
  {
    tripStartEnd: { type: String, required: true},
    tripHours: { type: Number },
    tripDays: { type: Number },
    stopsEnRoute: [String],
    story: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    userName: String,
    userAvatar: String,
    tripBegin: [{ type: Schema.Types.ObjectId, ref: "TripBegin" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StartingPoint", startingPointSchema);
