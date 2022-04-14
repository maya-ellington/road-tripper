const express = require('express');
const router = express.Router();
const startingPointCtrl = require('../controllers/startingPoint');
const isLoggedIn = require('../config/auth');

router.get('/trip/:id', startingPointCtrl.index);
router.get('/:id/trip', startingPointCtrl.show);
router.get('/:id/new', isLoggedIn, startingPointCtrl.new);
router.post('/:id', startingPointCtrl.create);



module.exports = router;