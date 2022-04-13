const TripsBegin = require('../models/TripBegin');
const Trip = require('../models/Trip');

module.exports = {
    // create
    index,
    // show
}


function index(req, res) {

    Trip.find({}, function (err, trips) {
        res.render("allTrips/index", {
          trips,
          title: "All Trips",
        });
    });
  }
  

  // function show(req, res) {
  //   TripsBegin.findById(req.params.id)
  //   .populate('trip') //trip property created
  //   .exec(function(err, tripBegin) {
  //     // Native MongoDB approach 
  //     Trip.find(
  //      function(err, trip) {
  //        console.log(trip);
  //        res.render('allTrips/show', {
  //          title: 'Trip Detail', tripBegin, trip
  //        });
  //      }
  //    );
  //   });
  // }

// function create(req, res) {

//     const tripStory = new TripStory(req.body);
//     tripStory.save(function (err) { 
//       console.log(err, " this err");
//       if (err) return res.redirect("/tripStory/new");
//       console.log(tripStory);
//       // for now, redirect right back to new.ejs
//       res.redirect(`/tripStory/${tripBegin._id}`);
//     });
// }  