function YummyPizza(topping, size) {
    this.topping = topping,
    this.size = size;
    this.cost = 20;
}

YummyPizza.prototype.pizzaCost = function() {
    if (this.firstTopping === "SpecialTopping1") {
        this.cost += 2;
    }
    if (this.secondTopping === "SpecialTopping2") {
        this.cost += 3;
    }
    if (this.thirdTopping === "SpecialTopping3") {
        this.cost += 4;
    }
    if (this.fourthTopping === "SpecialTopping4") {
        this.cost += 5;
    }

    return this.cost;
}