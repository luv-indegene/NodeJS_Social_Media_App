
//this index.js is the entry file to all the routes
/*we can see it in this way that my app's index.js file(apps entry point2) 
will send in a request to routes/index.js.
And this will further route it to all different route files which will be there
//Now, we know that express is a framework. So like NEXT JS has it's own routing, 
express also has it's own routing module known as express.router
We can read more about express router from */
//now the other router files will be exported from their and imported in this index.js file 

//everytime I do require express, it will not create a new instance of express. It will just fetch the existing instance.
const express = require('express');
const router = express.Router();
console.log("To check if the router's index.js file is loaded or not");



//to access the controller action we will do -
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);


// //to access the other controllers here
/*since this users route is already created, we don't need to create it. 
Because we have it in users.js */
//We just need to use it in index.js with the given URL
router.use('/users', require('./users')); 

/*NOW THIS /USERS IS ACTUALLY EQUAL TO / WITH RESPECT TO ALL THE OTHER 
URL WHICH HAS USERS AS IT'S PARENT, EG - /USERS/PROFILE, /USERS/EDIT */
//for any other route, we will access it from here
//router.use('/route-name', importedController.action)


//we are going to export this to use in app's index.js
module.exports = router;