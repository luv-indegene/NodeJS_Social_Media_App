/*this complete file is our controller.
Inside this file we will have different actions.*/

//Now I have to export a function which is publicly available to our routes file and that function should return something.


module.exports.home = function(req,res){
    // return res.end('<h1>This is my first action from the home_controller</h1>')
    return res.render('home', {
        title: "Home"
    })
};

//now we need to access this funtion in routes
