function rentalCarCost(d) {
var cost = d * 40, 
      discount;
  if (d >= 7) {
    discount = 50;
  } else if (d >= 3) {
    discount = 20;
  } else {
    discount = 0
  }
  return cost - discount;
}
