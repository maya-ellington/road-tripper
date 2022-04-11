const TripBegin = require('../models/TripBegin');

module.exports = {
    addTripBegin,
    getTripsBegin
}

async function addTripBegin(req, res, next){
    try {
        let tripBegin = await TripBegin.create(req.body);

        return res.status(200).json({
            success: true,
            data: tripBegin
        });
    } catch (err) {
        console.log(err);
        res.status(500);
    }
};

async function getTripsBegin(req, res, next){
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