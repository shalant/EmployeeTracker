var mysql = require("mysql");
var inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
require('console.table');
//this folder and code does not exist yet
//var Role = require('./models')
//var newRole = new Role({
//    title:'',
//    salary:''
//})


var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "&Fuckyou1!",
  database: "cms"
});

connection.connect(function(err) {
  if (err) throw err;
  questions();
});

function questions() {
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
        displayDepartments();
      } else if (x === 'View roles') {
        console.log('show the roles database');
        displayRoles();
      } else if (x === 'View employees') {
        console.log('show employess DB');
        displayEmployees();
      } else if (x === 'Add departments') {
        addDepartments();
      } else if (x === 'Add roles') {
        addRoles();
      } else if (x === 'Add employees') {
        addEmployees();
      } else if (x === 'Update employee roles') {
        updateEmployeeRoles();
      }
    });
  }
    function displayDepartments() {
      console.log("display departments")
      connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
      })
    }

    function displayRoles() {
      connection.query("SELECT * FROM roles"), function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
      };
    };

    function displayEmployees() {
      connection.query("SELECT * FROM employee"), function (err, res) {
        if (err) throw err;
        console.table(res);
        questions();
      };
    };

    function addDepartments() {
      var query = connection.query(
          "INSERT INTO department SET ?",
          {
            inquirer
              .prompt ([
              type: 'input',
              name: 'newDepartment',
              message:'Type a department?'
              ]),
          },
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + "product inserted!\n");
            }
    };
    

    //from iceCreamCRUD.js
    
    // function createProduct() {
    //   console.log("Inserting a new product...\n");
    //   var query = connection.query(
    //     "INSERT INTO products SET ?",
    //     {
    //       flavor: "Rocky Road",
    //       price: 3.0,
    //       quantity: 50
    //     },
    //     function(err, res) {
    //       if (err) throw err;
    //       console.log(res.affectedRows + " product inserted!\n");
    //       // Call updateProduct AFTER the INSERT completes
    //       updateProduct();
    //     }
    //   );

   
    function addRoles() {
      var query = connection.query(
          "INSERT INTO roles SET ?",
          {inquirer.prompt
            type:'input',
            name: 'newRole',
            message:'Type a role?'
          },
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + "product inserted!\n");
          }
      )
    };

     function addEmployees() {
      var query = connection.query(
          "INSERT INTO employee SET ?",
          {inquirer.prompt
            type:'input',
            name: 'newEmployee',
            message:'Type an employee's name?'
          },
          function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + "product inserted!\n");
          }
      )
    };

    function updateEmployeeRoles() {}


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




