var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    placeOrder();
  });

function displayProducts() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            console.log(`
        product id: ${results[i].item_id}
        name: ${results[i].product_name}
        department: ${results[i].department_name}
        price: ${results[i].price}
        in stock: ${results[i].stock_quantity}`);
        }
    }); 
};

function placeOrder() {
    displayProducts();
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err; 
    inquirer
      .prompt([
      {
        name: "itemId",
        type: "input",
        message: "What is the id of the product you would like to purchase? Press Control-C to end shopping session."
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"
      }
    ]).then(function(answer) {
        var chosenItem;
        function findItem() {
            for (var i=0; i<results.length; i++) {
                //console.log(i);
            if (results[i].item_id == answer.itemId) {
              chosenItem = results[i];
              console.log(`You've chosen ${answer.quantity} quantity of ${chosenItem.product_name}. Let me see if we have enough in stock...`);    
        }
        }
        };
        findItem();
        function adjustStock() {
          connection.query("UPDATE products SET stock_quantity = "+(chosenItem.stock_quantity - answer.quantity)+ " WHERE product_name = '"+chosenItem.product_name+"'");
          placeOrder();
        };
        function checkStock() {
           if (chosenItem.stock_quantity < answer.quantity) {
            console.log("Insufficient quantity in stock! Please make another selection.");
            placeOrder(); 
           } else if (chosenItem.stock_quantity >= answer.quantity) {
            console.log("Sufficient quantity in stock! Order successfully placed.");
            adjustStock();
           }
       };
       checkStock();
    
    });
});
};