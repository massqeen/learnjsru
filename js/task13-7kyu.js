/*In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);

ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].*/
function solve(a, b) {
  if (a === 0 || b === 0) {
    return [a, b];
  }
  if (a >= 2 * b) {
    a = a - Math.floor(a / (b * 2)) * b * 2;
    return solve(a, b);
  }
  if (b >= 2 * a) {
    b = b - Math.floor(b / (a * 2)) * a * 2;
    return solve(a, b);
  }
  return [a, b];
}
console.log(solve(2, 10));
let a;
/*BEST PRACTICE
function solve(a, b) {
  while (a && b) {
    if (a >= (2 * b)) {
      a %= 2 * b;
    } else if (b >= (2 * a)) {
      b %= 2 * a;
    } else {
      return [a, b];
    }
  }
  return [a, b];
}*/
