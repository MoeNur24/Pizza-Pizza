# Pizza Pizza Website

#### By _**Mohamed Nur**_

## Description

_This pizza website will allow people to order any type of pizza, choose their toppings, the size they want and it will calculate how much it will cost at the end._

## Tests

```
//Business Logic:

Describe: Pizza()

Test: "It will create a Pizza Object"
Code: let smallPizzaOneTopping = new Pizza( ["cheese"], "small");
Expected Output: Undefined

Describe: pizzaCost() 
 
Test: "This program will return the price of small size pizza with one topping"
Code: let smallPizzaOneTopping = new Pizza( ["cheese"], "small");
Code: let price = smallPizzaOneTopping.pizzaCost();
Expected Output: ["$13"]

Test: "This program will return the price of a small siza pizza with two toppings"
Code: let smallPizzaTwoToppings = new Pizza(["cheese", "chicken"], "small" );
Code: let price = smallPizzaTwoToppings.pizzaCost();
Expected Output: ["$16"]

Test: "This program will return the price of medium pizza with three toppings"
Code: let mediumPizzaThreeToppings = new Pizza(["cheese", "chicken", "pineapple"], "medium");
Code: let price = mediumPizzaThreeToppings.pizzaCost();
Expected Output: ["$19"]

Test: "This program will return the price of a large pizza with four toppings"
Code: let largePizzaFourToppings = new Pizza(["cheese", "chicken", "pineapple", "jalapeño"], "large");
Code: let price = largePizzaFourToppings.pizzaCost();
Expected Output: ["$22"]
```

## Technologies Used
* _HTML_
* _CSS_
* _JavaScript_
* _TDD_

## Setup/Installation Requirements
* _Open Terminal_
* _Clone this repository in your desktop_
* _Open in VS Code_
* _Open Index.html in your browser_
* _You'll be able to use any browser by clicking the link below_

## Link

https://github.com/MoeNur24/Pizza-Pizza

## Known Bugs

* _None so far._

## License

This is licensed under the MIT license 

Copyright (c) _2023_ _Mohamed Nur_