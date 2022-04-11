const express = require('express');
const tripsBeginCtrl = require('../controllers/tripsBegin');
const router = express.Router();

router.get('/', tripsBeginCtrl.getTripsBegin)
router.post('/', tripsBeginCtrl.addTripBegin);

module.exports = router;