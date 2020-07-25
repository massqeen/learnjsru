/*Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/
const oddNumber = (arr) => {
  const set = new Set();
  for (const item of arr) {
    set.add(item);
  }

  for (const key of set.keys()) {
    if (arr.filter((item) => item === key).length % 2 === 1) {
      return key;
    }
  }
};
console.log(oddNumber([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));

/*BEST PRACTICE
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);*/
