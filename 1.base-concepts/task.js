function solveEquation(a, b, c) {
  let arr = {};
  let D = b**2 - 4 * a * c;
    if(D < 0)
        return false;
    arr['Дискриминант = '] = D;
    if(D == 0)
        arr["Корень равен"] = -b  / (2 * a);
    else if(D > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(D)) / (2 * a));
        tmp.push((-b - Math.sqrt(D)) / (2 * a));
        arr["Корень равен"] = tmp;
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = {};
let S = amount - contribution;
let month = (amount * percent) / ( 1 - ( 1 / ( ( 1 + interestRate ) **date ) ) );
let P = percent/12/100;
let summ = S * (P + (P / (((1 + P)^month) - 1)))
  return totalAmount;
}
