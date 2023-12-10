//Business Logic 
function yummyPizza(1stTopping, 2ndToppic, 3rdTopping, 4thTopping) {
    this.1stTopping = 1stTopping,
    this.2ndTopping = 2ndTopping;
    this.3rdTopping = 3rdTopping;
    this.4thTopping = 4thTopping;
    this.cost = "17"
}

yummyPizza.prototype.pizzaCost = function() {
    if(this.cost > this.1stTopping = "2") {
      return this.cost = 13;

    } else if (this.cost > this.2ndTopping = "3") {
       return this.cost = 16; 
    
    } else if (this.cost > this.3rdTopping = "4") { 
       return this.cost = 23; 
    } else {
       return this.cost = 30;         
    }
}