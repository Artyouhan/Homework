use strict
function solveEquation(a, b, c) {
  let arr = {};
let D = b * b - 4 * a * c
console.log('D = ' + D)
if (D < 0)
return false
arr['diskr'] = D;
if(D == 0)
res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
else if(D > 0){
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    res["quadratic roots"] = tmp;
}
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}