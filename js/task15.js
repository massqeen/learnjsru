/*BB-код имеет вид [tag]...[/tag], где tag– это один из: b, url или quote.

Например:

[b]текст[/b]
[url]http://ya.ru[/url]
BB-коды могут быть вложенными. Но сам в себя тег быть вложен не может, например:

Возможно:
[url] [b]http://ya.ru[/b] [/url]
[quote] [b]текст[/b] [/quote]

Не может быть:
[b][b]текст[/b][/b]
Теги могут содержать переносы строк, это допустимо:

[quote]
  [b]текст[/b]
[/quote]
Создайте регулярное выражение для поиска всех BB-кодов и их содержимого.

Например:

let regexp = /ваше регулярное выражение/флаги;

let str = "..[url]http://ya.ru[/url]..";
alert( str.match(regexp) ); // [url]http://ya.ru[/url]
Если теги вложены, то нужно искать самый внешний тег (при желании можно продолжить поиск в его содержимом):

let regexp = /ваше регулярное выражение/флаги;

let str = "..[url][b]http://ya.ru[/b][/url]..";
alert( str.match(regexp) ); // [url][b]http://ya.ru[/b][/url]*/

let str = '[b]текст[/b]';
let str1 = '[url]http://ya.ru[/url]';
let str2 = '[url] [b]http://ya.ru[/b] [/url]';
let str3 = `[quote]
  [b]текст[/b]
[/quote]`;
let str4 = '[quote] [url]http://ya.ru[/url] [/quote]';

const regexp = /\[(?<opentag>b|url|quote)].*?\[\/\k<opentag>]/gs;

console.log(str.match(regexp));
console.log(str1.match(regexp));
console.log(str2.match(regexp));
console.log(str3.match(regexp));
console.log(str4.match(regexp));
