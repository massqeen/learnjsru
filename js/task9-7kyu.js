/*In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!*/
function solve(arr) {
  const sortedArr = arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = sortedArr.length - 1; i > 0; i -= 1) {
    if (-sortedArr[i] === sortedArr[i - 1]) {
      sortedArr.splice(i - 1, 2);
    }
  }
  return sortedArr[0];
}
console.log(solve([1, -1, 2, -2, 3, 3]));
let a;
/*BEST PRACTICE
const solve=a=>a.find(e=>!a.includes(-e));*/
