/*Fibonacci numbers
1,1,2,3,5,8,13,21,34,55,89... (next=curr+prev)*/

//типичная реализация
// const fibonacci = (n) => {
//   let prev = 0,
//     next = 1;
//   for (let i = 0; i < n; i += 1) {
//     let temp = next;
//     next += prev;
//     prev = temp;
//   }
//   return prev;
// };
// console.log(fibonacci(1476));
//максимальное число - 1476б далее infinity

//плохая реализация - относительно быстро считается примерно до 45
// const fibonacci = (n) => {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };
// console.log(fibonacci(30));
// let a;

//оптимальная реализация через рекурсию
const fibonacci = (n, i = 1, prev = 0, next = 0) => {
  if (i >= n) {
    return prev + next;
  }
  return fibonacci(n, i + 1, next || 1, prev + next);
};
console.log(fibonacci(4));

// вывести массив чисел фибоначчи с заданным количеством значений:
const fibonacciArray = (numbers) => {
  const result = [];
  for (let i = 0; i < numbers; i += 1) {
    result.push(fibonacci(i));
  }
  return result;
};
console.log(fibonacciArray(10));
