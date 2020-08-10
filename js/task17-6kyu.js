/*In this Kata, you will be given an integer n and your task will be to return the largest integer that is <= n and has the highest digit sum.

For example:

solve(100) = 99. Digit Sum for 99 = 9 + 9 = 18. No other number <= 100 has a higher digit sum.
solve(10) = 9
solve(48) = 48. Note that 39 is also an option, but 48 is larger.
Input range is 0 < n < 1e11*/
const solve = (n) => {
  const sumOfDigits = (number) => {
    return String(number)
      .split('')
      .reduce((acc, item) => {
        return acc + +item;
      }, 0);
  };
  let max = sumOfDigits(n);
  let b = 1;
  result = n;
  let current = n;
  while (String(current).length > String(n).length - 2) {
    // let current = (n - 1) * b + (b - 1);
    current -= 1;
    let currentSumOfDigits = sumOfDigits(current);
    if (
      currentSumOfDigits > max ||
      (currentSumOfDigits === max && current > result)
    ) {
      max = currentSumOfDigits;
      result = current;
    }
    // n /= 10;
    // b *= 10;
  }
  return result;
};

console.log(solve(92063948914));
//79320 - 78999
//29652 - 28999
//99737 - 98999
//2090 - 1999
//19930 - 19899
//76728517764 - 69999999999
//92063948914 - 89999999999
//11550034505 - 9999999999
//14997365686 - 9999999999
// let n = 92063948914;
// const regexp = /[^8-9][9]+/;
// let copyN = n - 1;
// while (!regexp.test(String(copyN))) {
//   copyN -= 1;
// }
// console.log(regexp.test('69999999999'));
