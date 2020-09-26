//var mysql = require("mysql");
var inquirer = require("inquirer");
//this folder and code does not exist yet
//var Role = require('./models')
//var newRole = new Role({
//    title:'',
//    salary:''
//})


// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "&Fuckyou1!",
//   database: "cms"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   someFunction();
// });


//First inquirer prompt: What shall we do? (How will I structure this?)
// Add departments, roles, employees

inquirer
  .prompt([
      {
        type:'list',
        name: 'actionChoice',
        message:'What would you like to do?',
        choices:['View departments', 'View roles', 'View employess', 'Add departments', 'Add roles', 'Add employess', 'Update employee roles']
      }

      //getting the information to do those things
    /* Pass your questions in here */
  ])
  .then(answers => {
        var x = answers.actionChoice

      if (x === 'View departments') {
        console.log('show the department database');
      } else if (x === 'View roles') {
        console.log('show the roles database');
      } else if (x === 'View employees') {
        console.log('show employess DB');
      } else if (x === 'Add departments') {
        //
      } else if (x === 'Add roles') {
          //
      } else if (x === 'Add employees') {
          //
      } else if (x === 'Update employee roles') {

      }

     


      console.log(answers)
      //those things
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
// View departments, roles, employees
// Update emoployee roles




