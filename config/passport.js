const passport = require('passport');
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({googleId: profile.id}, function(err, user){

      if(user) return cb(null, user);
      if (err) return cb(err);

      User.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      }, function(err, createdUser){

        if(user) return cb(null, user);
        if (err) return cb(err);
      })


		})
	})
)

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(userId, cb){
	User.findById(userId, function(err, user){
		if(err) return cb(err);
		cb(null, user); // <- this assings the user document we just found to the request object
		// assinging the user to req.user
	})
});