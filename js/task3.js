/*У нас есть регулярное выражение /Java[^script]/.
Найдёт ли оно что-нибудь в строке Java? А в строке JavaScript?*/

let str = 'Java';
let str1 = 'JavaScript';
const regexp = /Java[^script]/g;
console.log(str.match(regexp));
console.log(str1.match(regexp));
