//we are calling it users controller because this is one controller that can control many users.


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

    //todo later

 

};

//action 5- Create session for the user

module.exports.createSession = function(req, res){
    //todo later
};






