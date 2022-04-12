const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');

router.get('/', tripsCtrl.index);
router.get('/:id', tripsCtrl.show);
// router.post('/', tripsStoryCtrl.create);


module.exports = router;
