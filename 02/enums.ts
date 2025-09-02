// const AISLE = 0
// const MIDDEL = 1
// const WINDOW = 2

// if (seat===AISLE){

// }

//we use this so enum

// enum SeatChoice{
//     AISLE=10,
//     MIDDLE,
//     WINDOW,
//     FOURTH
// }
// const hcSeat= SeatChoice.FOURTH



enum OrderStat {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

let orderStat: OrderStat = OrderStat.Pending;

if (orderStat === OrderStat.Shipped) {
  console.log("Your order is on the way");
}



