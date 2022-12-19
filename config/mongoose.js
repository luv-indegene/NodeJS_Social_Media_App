


//like any other library we will include mongoose in our project using 'require'
const mongoose = require('mongoose');
//Now we need to provide a connection to our database. We are assuming that mongoDb is running on our system
//localhost because for now, both our app's and database's server are running on our own system  
//then we will give our database a name.
mongoose.connect('mongodb://127.0.0.1/niet_social_development');
//because we are in the development environment, therefore we will use development in our name.
//There are many environment in our organisation, development, testing, production

//connecting database to our app's server
const db = mongoose.connection;

//handling error
db.on('error', console.error.bind(console, "Error connectin to mongoDB"));
//if connected properly
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});
//these 'on' and 'once' are provided by mongoose


//now we will just export it to make it globally accessible anywhere inside our project
module.exports = db;