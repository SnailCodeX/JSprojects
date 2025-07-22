import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(tag: PriceBracket): number{
  switch (tag){
    case PriceBracket.low:
      return 10
    case PriceBracket.Medium:
      return 20
    case PriceBracket.High:
      return 30
    default: return 0
  }
}
// Add your getOrders() function below:
function getOrders(tag: PriceBracket, orders: Order[][]): Order[][] {
  let filteredOrders: Order[][] = []
  orders.forEach((restaurant) => { 
    const filter = restaurant.filter( order => order.price <= getMaxPrice(tag))
  filteredOrders.push(filter)
  })
  return filteredOrders
}
// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]){
  filteredOrders.forEach((order, index) => {
    if (order.length > 0){
      console.log(`${restaurants[index].name}`)
      order.forEach(item => {console.log(`${item.name}: ${item.price}`)})
    }
    })
  }

// Main
const eligibleOrders = getOrders(PriceBracket.Medium, orders);
console.log(eligibleOrders)
printOrders(restaurants, eligibleOrders);
