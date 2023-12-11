//Business Logic
function Pizza(topping, size) {
    this.topping = topping,
    this.size = size;
    this.cost = 10;
}
Pizza.prototype.pizzaCost = function() {
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
};

//UI Logic
document.addEventListener("DOMContentLoaded", function() {
    const formUno = document.getElementById("formUno");
    formUno.addEventListener("submit", function(event) {
      event.preventDefault();
      const inputtedTopping = parseInt(document.getElementById("topping").value);
      const inputtedSize = parseInt(document.getElementById("size").value);
      let newPizza = new Pizza(inputtedTopping, inputtedSize);
      document.getElementById("pizza-cost").textContent = "$" + newPizza.pizzaCost();
      document.getElementById("output").style.display = "block";
      formUno.style.display = "none";
      document.getElementById("pizza-cost").style.display = "inline";
    });
});