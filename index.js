const { application } = require("express");
const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());



const expressLayout = require('express-ejs-layouts');
//we need to require express layout to access partials and layouts
app.use(expressLayout);

//extract style and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//We need to use this middleware to access static files.
app.use('/',express.static('./assets'));

/*now that we have exported our router, now we have to tell our app to use it.
We need to tell our app that all the get, post delete will be handled by this module now.*/
//use express router
//app.use is a middleware and before the server starts up, it needs to access routes
app.use('/', require('./routes/index'));


//setup the view engine

app.set('view engine','ejs');
app.set('views', './views');







app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});


















