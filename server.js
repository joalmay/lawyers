var Sequelize = require('sequelize')
  , sequelize = new Sequelize('mysql://law@192.168.1.175:3306/lawyer_scoreboard', {
  // Look to the next section for possible options
});

//App Port
var port = 8888;

//Define Lawyer
var Lawyer = sequelize.define('lawyer', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  wins: Sequelize.INTEGER,
  losses: Sequelize.INTEGER,
  hourly_rate: Sequelize.DECIMAL
});

//Array

var lawyersarray = [];

var express = require('express');

app = express();

app.configure(function (){
  app.use(express.bodyParser());
  app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
});

app.get('/lawyers', function(req, res) {
  Lawyer.all().success(function(lawyers) {
  // lawyers will be an array of all Lawyer instances
  lawyersarray = lawyers;

  res.type('application/json');
  res.json({location: lawyers});

});

  sequelize.all
});

//Populate 

 /*
sequelize.sync().success(function() {
  Lawyer.create({
    name: 'Dallin',
    location: 'Provo, CA',
    wins: 7,
    losses: 20,
    hourly_rate: 10

  }).success(function(sdepold) {
    console.log(sdepold.values)
  });
});

 
sequelize.sync().success(function() {
  Lawyer.create({
    name: 'Dan',
    location: 'Orem, UT',
    wins: 34,
    losses: 12,
    hourly_rate: 10

  }).success(function(sdepold) {
    console.log(sdepold.values)
  });
});

*/

app.listen(port);
console.log('Listening on port '+port);