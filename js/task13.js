/*MAC-адрес сетевого интерфейса состоит из 6-ти двузначных шестнадцатеричных
чисел, разделённых двоеточиями.
Например: '01:32:54:67:89:AB'.
Напишите регулярное выражение, которое проверит, является ли строка MAC-адресом.
Использование:

let regexp = /ваш regexp/;
alert( regexp.test('01:32:54:67:89:AB') ); // true
alert( regexp.test('0132546789AB') ); // false (нет двоеточий)
alert( regexp.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)
alert( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце строки)
*/

let str = '01:32:54:67:89:AB';
let str1 = '0132546789AB';
let str2 = '01:32:54:67:89';
let str3 = '01:32:54:67:89:ZZ';

const regexp = /([a-f0-9]{2}:){5}[a-f0-9]{2}/i;
console.log(str.match(regexp));
console.log(regexp.test(str));
console.log(regexp.test(str1));
console.log(regexp.test(str2));
console.log(regexp.test(str3));
