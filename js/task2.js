/*Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false*/

const schedule = {};
const isEmpty = (obj) => {
  const empty = Object.keys(obj).length === 0 ? true : false;
  return empty;
};
console.log(schedule);
console.log(isEmpty(schedule));
schedule['8:30'] = 'get up';
console.log(schedule);
console.log(isEmpty(schedule));
