function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c;
    if(discriminant < 0){
        return false;
    }
    arr['Дискриминант = '] = discriminant;
    if(discriminant == 0){
        arr["Корень равен"] = -b  / (2 * a);
    }else if(discriminant > 0){
        let tmp = [];
        tmp.push((-b + Math.sqrt(discriminant)) / (2 * a));
        tmp.push((-b - Math.sqrt(discriminant)) / (2 * a));
        arr["Корень равен"] = tmp;
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
let summ = {}
  let S = amount - contribution;
let month = new Date().getMonth();
let year = new Date().getFullYear();
let pastdate = date.getFullYear(2024) - year;
let monthcol = pastdate * 12 - month;
let getmoney = S * ( percent/12/100 + (( percent/12/100) / (((1 + ( percent/12/100)) (Math.pow(monthcol,2)) - 1))));
summ = getmoney * monthcol;
alert (Math. round (summ* 100)/ 100);
  console.log(summ)
  return summ 


}