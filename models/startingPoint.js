const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const startingPointSchema = new Schema({
    tripStartEnd : {type: String},
    tripHours: {type: Number},
    tripDays: {type: Number},
    stopsEnRoute: [String],
    story: {type: String},
    // user: {type: Schema.Types.ObjectId, ref: 'User'},
    // userName: String,
    // userAvatar: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('StartingPoint', startingPointSchema);