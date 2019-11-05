shopper = {
    name: 'John Doe',
    wallet: 68,
    isHungry: true,
    groceryCart: ['apples', 'bananas', 'spinach', 'ham', 'eggs', 'bread', 'milk'],
    groceryCost: 37,
    canBuy: function() {
        return this.wallet > this.groceryCost;
    } 
}