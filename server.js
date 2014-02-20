var Sequelize = require('sequelize')
  , sequelize = new Sequelize('mysql://law@192.168.1.175:3306/lawyer_scoreboard', {
  // Look to the next section for possible options
});

 /*

  , sequelize = new Sequelize('lawyer_scoreboard', 'root', 'qaz', {
  host: "192.168.1.175",
  port: 3306
});
 
 */
var Lawyer = sequelize.define('lawyer', {
  name: Sequelize.STRING,
  wins: Sequelize.INTEGER
});


 
sequelize.sync().success(function() {
  Lawyer.create({
    name: 'John',
    wins: 3
  }).success(function(sdepold) {
    console.log(sdepold.values)
  });
});

