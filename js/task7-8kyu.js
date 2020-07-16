/*
Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).
For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
function countSheep(arrayOfSheep) {
  return arrayOfSheep.reduce((sum, current) => {
    if (current) {
      return sum + current;
    }
    return sum;
  }, 0);
}

const test = countSheep([true, true, 0]);
let a;
/*BEST PRACTICE
function countSheep(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}*/
