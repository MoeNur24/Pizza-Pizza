//Business Logic
function YummyPizza(topping, size) {
    this.topping = topping,
    this.size = size;
    this.cost = 10;
}
YummyPizza.prototype.pizzaCost = function() {
    if ((this.topping + this.size) ==2) {
        this.cost = 13;
    } else if ((this.topping + this.size) ==3) {
       this.cost = 16; 
    } else if ((this.topping + this.size) ==5) {
        this.cost = 19;
    } else {
        this.cost = 22
    }

    return this.cost;
}

//UI Logic
document.addEventListener("DOMContentLoaded", function() {
    const formUno = document.getElementById("formUno");
    formOne.addEventListener("submit", function(event) {
      event.preventDefault();
    
    });
  });