const express = require('express');
const router = express.Router();
const startingPointCtrl = require('../controllers/startingPoint');
const isLoggedIn = require('../config/auth');

router.get('/view', startingPointCtrl.index);
router.get('/:id/new', isLoggedIn, startingPointCtrl.new);
router.post('/:id/view', startingPointCtrl.create);


//how to deal w more than one id for the route???
// router.get('/:id/edit', startingPointCtrl.edit); //id for starting point & trip??
// router.put('/:id', startingPointCtrl.update);
router.delete('/allTrips/:id', startingPointCtrl.delete);


module.exports = router;