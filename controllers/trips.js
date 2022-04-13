const TripsBegin = require('../models/TripBegin');
// const TripBegin = require('../models/tripBegin');

module.exports = {
    // create
    index,
    show
}


function index(req, res) {

    TripsBegin.find({}, function (err, trips) {
        res.render("trips/index", {
          trips,
          title: "All Trips",
        });
    });
  }
  
  function show(req, res) {
    TripsBegin.findById(req.params.id)
    // .populate('tripDetails') 
    .exec(function(err, trip) {
      // Native MongoDB approach 
      TripsBegin.find(
       function(err, trips) {
         console.log(trips);
         res.render('trips/show', {
           title: 'Trip Detail', trip
         });
       }
     );
    });
  }


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