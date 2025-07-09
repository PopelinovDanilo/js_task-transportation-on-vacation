/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costs = 40;
  let rentalCost = 0;

  if (days <= 0) {
    return 0;
  }

  if (days > 0 && days < 3) {
    rentalCost = costs * days;

    return rentalCost;
  }

  if (days >= 3 && days < 7) {
    rentalCost = costs * days - 20;

    return rentalCost;
  }

  if (days >= 7) {
    rentalCost = costs * days - 50;

    return rentalCost;
  }
}

module.exports = calculateRentalCost;
