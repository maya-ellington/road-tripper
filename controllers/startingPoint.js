const StartingPoint = require("../models/startingPoint");
const TripBegin = require("../models/TripBegin");

module.exports = {
  create,
  index,
  new: newTrip,
  // edit,
  // update,
  // delete: deleteTrip,
};

// function deleteTrip(req, res){
//   StartingPoint.findOneAndDelete(
//     { _id: req.params.id, userPosting: req.user._id }, function(err) {
//       res.redirect('/')
//     }
//   )
// }

// function edit(req, res) {
//   StartingPoint.findOne(
//     { _id: req.params.id, userPosting: req.user._id },
//     function (err, tripDb) {
//       if (err || !book) return res.redirect(`/${StartingPoint._id}`); //unsure of redirect
//       res.render(`/${StartingPoint._id}/edit`, { tripDb });
//     }
//   );
// }

// function update(req, res) {
//   StartingPoint.findOneAndUpdate(
//     { _id: req.params.id, userPosting: req.user._id },
//     req.body,
//     { new: true },
//     function (err, trip) {
//       if (err || !book) return res.redirect(`/${StartingPoint._id}`); //unsure of redirect
//       res.redirect(`${StartingPoint._id}/${trip._id}`);
//     }
//   );
// }

//adjust so index only shows
function index(req, res) {
  StartingPoint.find({}, function (err, trip) {
    res.render("startingPoint/index", {
      trip,
      title: "All Road Trips",
    });
  });
}

  // function show(req, res) {
  //   TripBegin.find({tripBegin})
  //   .populate('trip')
  //   .exec(function(err, trip) {
  //     // Native MongoDB approach
  //     Trip.find({},
  //      function(err, trip) {
  //        console.log(trip);
  //        res.render('trips/show', {
  //          title: 'Trip Detail', trip
  //        });
  //      }
  //    );
  //   }
  // }

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

  
  // TripBegin.findById(req.params.id, function(err, startPoint) {
    // console.log(startingPoint)
    // console.log(startPoint)

    // startPoint.tripDetail.push(startingPoint);
    // console.log(startPoint)
    req.body.user = req.user._id;
		req.body.userName = req.user.name;
		req.body.userAvatar = req.user.avatar;
    
    const startingPoint = await StartingPoint.create(req.body);
 
    console.log(startingPoint)
    // startPoint.save(function (err) {
      // mongoose talking
      res.redirect(`/view/${startingPoint._id}`);
  };


//   function create(req, res) {
//     // tripBegin.
//     const trip = new Trip(req.body);
//     trip.save(function (err) { // mongoose talking
//     //   console.log(err, " this err");
//       if (err) return res.redirect("trip/new");
//       console.log(trip);
//       // for now, redirect right back to new.ejs
//       res.redirect("/:id/trip");
//     });
// }
