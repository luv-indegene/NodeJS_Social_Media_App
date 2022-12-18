//we are calling it users controller because this is one controller that can control many users.


const User = require('../models/user')

module.exports.profile = function(req,res){

    // return res.end('<h1>This is our users profile action</h1>');
    return res.render('profile',{
        title: "profile"
    });

};


//action 2 

module.exports.createAccount = function(req,res){
    return res.render('signup',{
        title: "SignUp"
    });
};

//action 3

module.exports.login = function(req,res){
    return res.render('signin', {
        title: "SignIn"
    });
};


//action 4 - get the signed up data

module.exports.create = function(req, res){

    //step 1 is to check that password and confirm password are same or not
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    };
    //next step is to check that if the user is already there in the database or not, if not then only we will create it else not

    User.findOne({email: req.body.email}, function(err,user){
        if(err){
            console.log("error in user finding up");
            return;
        }
        if(!user){
            User.create(req.body, function(err, user){

                if(err){
                    console.log("error in creating user while signing up!" + err);
                    return;
                }

                return res.redirect('/users/signin')
                

            });
        }else{
            return res.redirect('back');
        }
    })

};

//action 5- Create session for the user

module.exports.createSession = function(req, res){
    //todo later
};






