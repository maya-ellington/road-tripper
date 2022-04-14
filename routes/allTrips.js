const express = require('express');
const router = express.Router();
const allTripsCtrl = require('../controllers/allTrips');
// const isLoggedIn = require('../config/auth');

router.get('/', allTripsCtrl.index);
router.get('/:id', allTripsCtrl.show); 
// router.get(':id/', tripsCtrl.showTrip);

// router.get('/:id/new', isLoggedIn, tripsCtrl.new);



module.exports = router;
