const express = require("express");
const router = express.Router();
const startingPointCtrl = require("../controllers/startingPoint");
const isLoggedIn = require("../config/auth");

router.get("/:id/view", startingPointCtrl.index);
router.get("/:id/new", isLoggedIn, startingPointCtrl.new);
router.post("/:id/view", startingPointCtrl.create);
router.get("/allTrips/:id/edit", startingPointCtrl.edit);
router.put("/:id", startingPointCtrl.update);
router.delete("/allTrips/:id", startingPointCtrl.delete);

module.exports = router;
