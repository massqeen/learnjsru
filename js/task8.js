/*Найти все HTML-комментарии в тексте:
let regexp = /ваше регулярное выражение/g;
let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
alert( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'*/

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
const regexp = /<!--.*?-->/gs;
console.log(str.match(regexp));
