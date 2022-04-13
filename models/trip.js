const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    tripStartEnd : {type: String},
    tripHours: {type: Number},
    tripDays: {type: Number},
    stopsEnRoute: [String],
    story: {type: String},
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Trip', tripSchema);