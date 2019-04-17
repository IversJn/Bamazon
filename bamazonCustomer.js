var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('easy-table');
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Xcrunner1",
  database: "bamazon"
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

function display() {
  console.log("rendering table...\n");
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    console.log(Table.print(results));
    start();
  });

}
function start() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "idItem",
        message: "What is the ID of the product you would like to buy?"
      },
      {
        type: "input",
        name: "units",
        message: "How many of the units of the product would you like to buy?"
      }
    ]).then(function (response) {
      var idItem = response.idItem;
      var units = response.units;
      // console.log(idItem);
      // console.log(units);
      connection.query("SELECT * FROM products WHERE ?", { item_id: idItem }, function (err, data) {
        if (err) throw err;

        let proRes = data[0];
        if (units <= proRes.quantity) {
          console.log("\nProduct is in Stock!\n");
          changeQuery = 'UPDATE products SET quantity = ' + (proRes.quantity - units) + ' WHERE item_id = ' + idItem;
          connection.query(changeQuery, function (err, data) {
            if (err) throw err;
            console.log("Thank you for shopping! Your total is: $"+ proRes.price * units);
          })
          connection.end();
        }
        else{
          console.log("We are sorry that item is out of stock.");
          console.log("Please select another item.\n");
          display();
        }
      })
    });
}

display();






