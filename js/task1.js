/*Your task is to make a function that can take any non-negative integer as an
argument and return it with its digits in descending order. Essentially,
rearrange the digits to create the highest possible number.

  Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/
// const array=[25, 25, 2, 2,36]
// const result = array.sort(function(a,b){
//   return b-a;
// });
function descendingOrder(n) {
  let resultStr = '';
  const numToArray = String(n).split('');
  const resultArr = numToArray.sort(function (a, b) {
    return b - a;
  });
  for (const item of resultArr) {
    resultStr += item;
  }
  return Number(resultStr);
}

console.log(descendingOrder(25563));

//оптимальное решение:
function descendingOrder1(n) {
  return +(n + '').split('').sort().reverse().join('');
}

console.log(descendingOrder1(25563));
