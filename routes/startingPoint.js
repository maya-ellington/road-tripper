const express = require('express');
const router = express.Router();
const startingPointCtrl = require('../controllers/startingPoint');
const isLoggedIn = require('../config/auth');

router.get('/view', startingPointCtrl.index);
router.get('/view/:id', startingPointCtrl.show);
router.get('/new', isLoggedIn, startingPointCtrl.new);
router.post('/view', startingPointCtrl.create);


//how to deal w more than one id for the route???
router.get('/:id/edit', startingPointCtrl.edit); //id for starting point & trip??
router.put('/:id', startingPointCtrl.update);
router.post('/:id', startingPointCtrl.delete);


module.exports = router;