/*In this Kata, you will be given an integer n and your task will be to return the largest integer that is <= n and has the highest digit sum.

For example:

solve(100) = 99. Digit Sum for 99 = 9 + 9 = 18. No other number <= 100 has a higher digit sum.
solve(10) = 9
solve(48) = 48. Note that 39 is also an option, but 48 is larger.
Input range is 0 < n < 1e11*/

const solve = (n) => {
  const array = [...('' + n)];
  const sumDigits = (arr) => arr.reduce((acc, item) => +acc + +item);
  const findLargestInteger = (arr) => +arr.reduce((acc, item) => acc + item);
  if (array.length === 1) {
    return n;
  }
  let i = 1;
  while (array[i] === '9') {
    i += 1;
  }
  const arrayModified = [...array];
  arrayModified[i - 1] -= 1;
  for (let j = i; j < arrayModified.length; j += 1) {
    arrayModified[j] = '9';
  }
  if (!arrayModified[0]) {
    arrayModified.splice(0, 1);
  }
  const initialSum = sumDigits(array);
  const currentSum = sumDigits(arrayModified);
  const largestInteger = findLargestInteger(arrayModified);
  return initialSum === currentSum ? n : largestInteger;
};
console.log(solve(198));
//79320 - 78999
//29652 - 28999
//99737 - 98999
//2090 - 1999
//19930 - 19899
//76728517764 - 69999999999
//92063948914 - 89999999999
//11550034505 - 9999999999
//14997365686 - 9999999999
/*BEST PRACTICE
 var sum=(x)=>[...x].reduce((a,b)=>+a + +b)
function solve(n){
    let s = [...''+n], i=1
    while (i<s.length && s[i]==9) i++
    s[i-1] -= 1
    let num = s.slice(0,i).join``+'9'.repeat(s.slice(i).length)
    return sum(num)>sum(''+n)?+num:n
}
*/
