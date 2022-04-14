const express = require('express');
const router = express.Router();
const tripCtrl = require('../controllers/trip');
const isLoggedIn = require('../config/auth');

router.get('/:id/trip', tripCtrl.index);
router.get('/:id/trip', tripCtrl.show);
router.get('/:id/new', isLoggedIn, tripCtrl.new);
router.post('/:id/trip', tripCtrl.create);


module.exports = router;
