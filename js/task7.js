/*Совпадение для /d+? d+?/
Какое здесь будет совпадение?

"123 456".match(/\d+? \d+?/g) ); // ?*/

let str = '123 456';
const regexp = /\d+? \d+?/g;
console.log(str.match(regexp));
