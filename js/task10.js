/*Напишите регулярное выражение, которое соответствует цветам в формате #abc
или #abcdef. То есть: # и за ним 3 или 6 шестнадцатеричных цифр.
Пример использования:
let regexp = /ваш шаблон/g;
let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
alert( str.match(regexp) ); // #3f3 #AA00ef
P.S. Это должно быть ровно 3 или 6 шестнадцатеричных цифр. При этом значения
с 4-мя цифрами типа #abcd не должны совпадать в результат.*/

let str = 'color: #3f3; background-color: #AA00ef; and: #abcd';
const regexp = /#([0-9a-f]{3}){1,2}\b/gi;
console.log(str.match(regexp));
