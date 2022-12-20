const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;



//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function (email, password, done) {

        //find a user and establish an identity


        //importing user
        User.findOne({ email: email },
            function (err, user) {

                if(err){
                    console.log("Error in finding user ---> Passport");
                    return done(err);
                }

                if(!user || user.password !=password){
                    console.log('Invalid Username/password');
                    return done(null, false);
                };

                return done(null, user);

            }
        );
    }

));


//serializing the user to decide which key is to be kept in the cookies.

passport.serializeUser(function(user, done){
    done(null, user.id)
});


//deserializing the user from the key in the cookie

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){

        if(err){
            console.log("Error in finding user");
            return done(err);
        }

        return done(null,user);

    });
});

module.exports = passport;


