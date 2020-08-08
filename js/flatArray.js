const array = [[2, 25], [2], [1, [2, [2, 3]]], 5, 10];
const array1 = [1, 23, ['abc', -50], { hello: 'world' }];
const flatArr = (arr) => {
  return arr.reduce((acc, arrItem) => {
    if (Array.isArray(arrItem)) {
      acc = [...acc, ...flatArr(arrItem)];
      return acc;
    }
    acc.push(arrItem);
    return acc;
  }, []);
};
console.log(flatArr(array));
console.log(flatArr(array1));
