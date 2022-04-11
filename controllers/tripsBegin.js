const TripBegin = require('../models/TripBegin');

exports.addTripBegin = async (req, res, next) => {
    try {
        const tripBegin = await TripBegin.create(req.body);

        return res.status(200).json({
            success: true,
            data: tripBegin
        });
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};

exports.getTripsBegin = async (req, res, next) => {
    try {
        const tripsBegin = await TripBegin.find();

        return res.status(200).json({
            succes: true,
            count: tripsBegin.length,
            data: tripsBegin
        })
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};