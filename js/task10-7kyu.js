/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowercase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.*/
function solve(s) {
  if (s.match(/[A-Z]/g) && s.match(/[A-Z]/g).length > s.length / 2) {
    return s.toUpperCase();
  }
  return s.toLowerCase();
}

console.log(solve('code'));
let a;
/*BEST PRACTICE
  const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
*/
