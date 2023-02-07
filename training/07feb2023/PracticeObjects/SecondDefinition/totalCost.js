const product = {
    productName:"smartphone",
    price:15000,
    quantity:2,
    totalCost:function(){
        var total = this.price*this.quantity;
        return total;
    }
}

console.log(product.totalCost());