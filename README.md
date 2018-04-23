# Bamazon
### An Amazon-like command line application linked with a mySQL database.

1. App displays all available items with item id, product name, product department, price, and stock quantity.
2. User is prompted via npm inquirer to enter the item id of the product they wish to purchase, and then the quantity of the product they wish to purchase.
3. App finds the corresponding item in the database, determines if stock is sufficient. If stock is sufficient, the desired quantity is subtracted from the stock in the database, and the user has "purchased" the item. If stock is insufficient, the user is notified and is instructed to choose a different item and/or quantity. Products data is displayed again and the user may proceed to make a different selection. User presses Control-C to exit process.

Video demo: Bamazon/BamazonDemo.mov
