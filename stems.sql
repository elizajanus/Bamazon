CREATE DATABASE bamazon;
CREATE TABLE products (
  item_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price INTEGER(10) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL
);

USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bike", "Sports", 300, 100), ("Kayak", "Sports", 200, 100), ("Dark Roast Coffee Beans", "Food and Beverage", 12, 200), ("Coconut Oil", "Food and Beverage", 10, 200), ("Toothpaste", "Health & Beauty", 4, 300), ("Shampoo", "Health & Beauty", 7, 300), ("I Am A Strange Loop", "Books", 12, 100), ("The MySQL Cookbook", "Books", 50, 100), ("Barton Fink", "Movies", 12, 100), ("Synecdoche, New York", "Movies", 12, 100); 

SELECT * FROM products;