const Trip = require('../models/Trip');
// const TripBegin = require('../models/tripBegin'); 

module.exports = {
    create,
    index,
    show,
    new: newTrip,
    // addtoTripDetail
}


function index(req, res) {
    Trip.find({}, function (err, trip) {
        res.render("trip/index", {
          trip,
          title: "All Road Trips",
        });
    });
  }
  
//   function show(req, res) {
//     Trip.findById(req.params.id)
//     // .populate('trip') 
//     .exec(function(err, trip) {
//       // Native MongoDB approach 
//       Trip.find(
//        function(err, trip) {
//          console.log(trip);
//          res.render('trips/show', {
//            title: 'Trip Detail', trip
//          });
//        }
//      );
//     });
//   }

  function show(req, res) {
    // Trip.findById(req.params.id)
    // // .populate('trip') 
    // .exec(function(err, trip) {
      // Native MongoDB approach 
      Trip.find({},
       function(err, trip) {
         console.log(trip);
         res.render('trips/show', {
           title: 'Trip Detail', trip
         });
       }
     );
    }
  


//   function newTrip(req, res) {
//     Trip.find({}, function (err, trip) {
//       res.render('trip/new', {
//         title: 'Add Road Trip',
//         trip, 
//         tripBeginId: req.params.id
//       });
//     })
//   }

  function newTrip(req, res) {
    Trip.find({}, function (err, trip) {
      res.render('trip/new', {
        title: 'Add Road Trip',
        trip
      });
    })
  }


//   TripBegin.findById(req.params.id, function (err, startPoint) {
//     startPoint.tripDetail.push(trip)
//     startPoint.save(function (err) { // mongoose talking 
//         //   console.log(err, " this err");
//           if (err) return res.redirect("trip/new");
//           console.log(trip);
//           // for now, redirect right back to new.ejs
//           res.redirect("/:id/trip");
//         });
// })
// }
  function create(req, res) {
    // tripBegin.
    const trip = new Trip(req.body);
    trip.save(function (err) { // mongoose talking 
    //   console.log(err, " this err");
      if (err) return res.redirect("trip/new");
      console.log(trip);
      // for now, redirect right back to new.ejs
      res.redirect("/:id/trip");
    });
}




//   function addtoTripDetail(req, res) {
//       TripBegin.findById(req.params.id, function(err, tripBeginDoc){
//           tripBeginDoc.tripDetail.push(req.body.tripId); //tripId?
//           tripBeginDoc.save(function(err){
//               res.redirect(`/trip/${tripBeginDoc._id}`)
//           })
//       })
//   }