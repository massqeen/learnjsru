/*factorial
 10!=1*2*3*4*5*6*7*8*9*10*/

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(170));
let a;
//макс значение для 170,дальше выводит infinity
