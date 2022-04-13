const Trip = require('../models/Trip');
// const TripBegin = require('../models/tripBegin'); 

module.exports = {
    create,
    index,
    show,
    new: newTrip
}


function index(req, res) {
    Trip.find({}, function (err, trip) {
        res.render("trip/index", {
          trip,
          title: "All Road Trips",
        });
    });
  }
  

  function newTrip(req, res) {
    Trip.find({}, function (err, trip) {
      res.render('trip/new', {
        title: 'Add Road Trip',
        trip
      });
    })
  }

  function create(req, res) {
    const trip = new Trip(req.body);
    trip.save(function (err) { // mongoose talking 
    //   console.log(err, " this err");
      if (err) return res.redirect("trip/new");
      console.log(trip);
      // for now, redirect right back to new.ejs
      res.redirect("/:id/trip");
    });
}



  function show(req, res) {
    Trip.findById(req.params.id)
    // .populate('tripDetails') 
    .exec(function(err, trip) {
      // Native MongoDB approach 
      Trip.find(
       function(err, trip) {
         console.log(trip);
         res.render('trips/show', {
           title: 'Trip Detail', trip
         });
       }
     );
    });
  }