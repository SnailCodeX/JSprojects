"use strict";
exports.__esModule = true;
var products_1 = require("./products");
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress;
var filterProduct = products_1["default"].forEach(function (product) {
    console.log("\n------------------", product.name, "------------------\n");
    if (product.preOrder === true) {
        shipping = product.price >= 25 ? 0 : 5;
        taxPercent = product.shippingAddress.match("New York") ? 0.1 : 0.05;
        taxTotal = product.price * taxPercent;
        total = product.price + taxTotal + shipping;
        console.log("We will send you a message when your ".concat(product.name, " is on its way to ").concat(product.shippingAddress, " at a price of: $").concat(product.price, ". Your total is $").concat(total, " with a tax total of $").concat(taxTotal, " and shipping of $").concat(shipping, " included."));
    }
    else {
        console.log("The product:".concat(product.name, ", hasn't been preordered yet."));
    }
});
