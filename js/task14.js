/*Существует много языков программирования, например, Java, JavaScript, PHP, C, C++.
Напишите регулярное выражение, которое найдёт их все в строке Java JavaScript PHP C++ C:
let regexp = /ваше регулярное выражение/флаги;
alert("Java JavaScript PHP C++ C".match(regexp));*/

let str = 'Java JavaScript PHP C++ C';
const regexp = /java(script)?|php|c(\+\+)?/gi;
console.log(str.match(regexp));
