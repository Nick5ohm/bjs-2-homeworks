"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  arr = b ** 2 - 4 * a * c;
  if (arr < 0) {
    return [];
  } else if (arr === 0) {
    return [-b / (2 * a)];
  } else {
    return [(-b + Math.sqrt(arr)) / (2 * a), (-b - Math.sqrt(arr)) / (2 * a)];
  }
}

"use strict";
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const p = (percent / 100)/12;
    const creditBody = amount - contribution;
    if (creditBody <=0){
        return 0;
    }
    const everyMonthPay = creditBody * (p + (p / (((1 + p) ** countMonths) - 1)));
    const allPayments = countMonths * everyMonthPay;
    return + allPayments.toFixed(2);
}