import products from "./products";

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string;

const filterProduct = products.forEach((product) => {
  console.log("\n------------------", product.name, "------------------\n");

  if (product.preOrder === true) {
    shipping = product.price >= 25 ? 0 : 5;
    taxPercent = product.shippingAddress.match("New York") ? 0.1 : 0.05;
    taxTotal = product.price * taxPercent;
    total = product.price + taxTotal + shipping;
    console.log(
      `We will send you a message when your ${product.name} is on its way to ${product.shippingAddress} at a price of: $${product.price}. Your total is $${total} with a tax total of $${taxTotal} and shipping of $${shipping} included.`
    );
  } else {
    console.log(`The product:${product.name}, hasn't been preordered yet.`);
  }
});