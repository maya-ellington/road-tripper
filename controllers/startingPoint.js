const StartingPoint = require("../models/startingPoint");
const TripBegin = require("../models/tripBegin");

module.exports = {
  create,
  index,
  new: newTrip,
  edit,
  update,
  delete: deleteTrip,
};

function deleteTrip(req, res){
  StartingPoint.findOneAndDelete(
    { _id: req.params.id, user: req.user._id }, function(err) {
      res.redirect('/')
    }
  )
}

function edit(req, res, next) {
  StartingPoint.findById(
    req.params.id,
    function (err, tripDb) {
      console.log(tripDb)
      // const startEnd = tripDb.tripStartEnd.id(req.params.id)
      if (!tripDb.user.equals(req.user._id)) return res.redirect(`allTrips/${StartingPoint._id}`); //unsure of redirect
      res.render('startingPoint/edit', { tripDb, startingPointId: req.params.id });
    }
  );
}

function update(req, res) {
  StartingPoint.findOneAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    function (err, trip) {
      console.log(trip, 'trip')
      if (err || !trip) return res.redirect(`/${StartingPoint._id}`); //unsure of redirect
      res.redirect(`/allTrips/${trip._id}`);
    }
  );
}

//Index show for all trips from given location starting point
function index(req, res) {
  StartingPoint.find({'tripBegin': req.params.id}, function (err, trips) {

    res.render("startingPoint/index", {
      trips,
      title: "All Road Trips",
    });
  });
}

function newTrip(req, res) {
  StartingPoint.find({}, function (err, trip) {
    res.render("startingPoint/new", {
      title: "Add Road Trip",
      trip,
      startingPointId: req.params.id,
    });
  });
}


async function create(req, res) {
  req.body.tripBegin = req.params.id; 

    req.body.user = req.user._id;
		req.body.userName = req.user.name;
		req.body.userAvatar = req.user.avatar;
    
    const startingPoint = await StartingPoint.create(req.body);
      res.redirect(`/allTrips/${startingPoint._id}`);
  };