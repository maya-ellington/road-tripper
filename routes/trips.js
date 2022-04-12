const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
// const isLoggedIn = require('../config/auth');

router.get('/', tripsCtrl.index);
router.get('/:id', tripsCtrl.show);
// router.get('/:id/new', isLoggedIn, tripsCtrl.new);
// router.post('/', tripsStoryCtrl.create);


module.exports = router;
