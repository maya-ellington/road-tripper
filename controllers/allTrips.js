const TripBegin = require('../models/tripBegin');
const StartingPoint = require('../models/startingPoint');

module.exports = {
    index,
    show, 

}


function index(req, res) {

  StartingPoint.find({}, function (err, trips) {
        res.render("allTrips/index", {
          trips,
          title: "All Trips",
        });
    });
  }
  

  function show(req, res) {
    StartingPoint.findById(req.params.id)
   .exec(function(err, trip) {
         res.render('allTrips/show', {
           title: 'Trip Detail', trip
      
       }
     );
    });
  }