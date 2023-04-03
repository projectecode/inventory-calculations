function getOrderTotal(items) {
  var total = 0;
  items.map((x) => {
    total += x.cost * x.quantity;
  });

  // console.log("total", total);
  return total;
}

var calculateSalesTax = function(total) {
  return total + (total * 15) / 100;
};

function calculateTotal(itemsInCart) {
  var merchandiseTotal = getMerchandiseTotal(itemsInCart);
  var shippingCost
  if (merchandiseTotal > 35) shippingCost = 0
  else {
    shippingCost = 10;
  }
  console.log("shipping cost is: ", shippingCost);
  let salesTax = calculateSalesTax(merchandiseTotal);

  return merchandiseTotal + shippingCost + salesTax;
}

calculateTotal(itemsInCart);

let itemsInCart = [
  {
    name: "Cheese Burger",
    quantity: 2,
    cost: 5.99,
  },
  {
    name: "Gourmet Pizza",
    quantity: 1,
    cost: 12.99,
  },
];
console.log(calculateTotal(itemsInCart));
