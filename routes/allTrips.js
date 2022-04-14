const express = require('express');
const router = express.Router();
const allTripsCtrl = require('../controllers/allTrips');

router.get('/', allTripsCtrl.index);
router.get('/:id', allTripsCtrl.show); 

module.exports = router;
