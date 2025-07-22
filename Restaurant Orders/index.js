"use strict";
exports.__esModule = true;
var restaurants_1 = require("./restaurants");
var orders_1 = require("./orders");
// Add your getMaxPrice() function below:
function getMaxPrice(tag) {
    switch (tag) {
        case orders_1.PriceBracket.low:
            return 10;
        case orders_1.PriceBracket.Medium:
            return 20;
        case orders_1.PriceBracket.High:
            return 30;
        default: return 0;
    }
}
// Add your getOrders() function below:
function getOrders(tag, orders) {
    var filteredOrders = [];
    orders.forEach(function (restaurant) {
        var filter = restaurant.filter(function (order) { return order.price <= getMaxPrice(tag); });
        filteredOrders.push(filter);
    });
    return filteredOrders;
}
// Add your printOrders() function below:
function printOrders(restaurants, filteredOrders) {
    filteredOrders.forEach(function (order, index) {
        if (order.length > 0) {
            console.log("".concat(restaurants[index].name));
            order.forEach(function (item) { console.log("".concat(item.name, ": ").concat(item.price)); });
        }
    });
}
// Main
var eligibleOrders = getOrders(orders_1.PriceBracket.Medium, orders_1.orders);
console.log(eligibleOrders);
printOrders(restaurants_1.restaurants, eligibleOrders);
