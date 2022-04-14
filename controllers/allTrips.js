const TripBegin = require('../models/TripBegin');
const Trip = require('../models/Trip');

module.exports = {
    // create
    index,
    show
}


function index(req, res) {

    Trip.find({}, function (err, trips) {
        res.render("allTrips/index", {
          trips,
          title: "All Trips",
        });
    });
  }
  

  function show(req, res) {
   Trip.findById(req.params.id)
   .exec(function(err, trip) {
         res.render('allTrips/show', {
           title: 'Trip Detail', trip
      
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