/*Write a function that combines two arrays by alternatingly taking elements from each array in turn.
Examples:
[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:
The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).*/
const mergeArrays = (a, b) => {
  if (a.length <= b.length) {
    return b
      .reduce((acc, curr, i) => {
        acc.push(a[i], curr);
        return acc;
      }, [])
      .filter((item) => item);
  }
  return a
    .reduce((acc, curr, i) => {
      acc.push(b[i], curr);
      return acc;
    }, [])
    .filter((item) => item);
};
const a = [1, 2, 3];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(mergeArrays(a, b));

/*Best practice
function mergeArrays(a, b) {
  let j = [],
      longest = a.length > b.length ? a:b;
  for (let i=0; i<longest.length; i++){
    if (a[i]) j.push(a[i])
    if (b[i]) j.push(b[i])
  }
  return j
}

const mergeArrays = (a, b) => {
  return [...Array(Math.max(a.length, b.length)).keys()]
    .reduce((r, i) => r.concat(a[i], b[i]), [])
    .filter(i => i);
}
*/
