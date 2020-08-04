/*Есть строка с HTML-документом.
Вставьте после тега <body> (у него могут быть атрибуты) строку <h1>Hello</h1>.
Например:
let regexp = /ваше регулярное выражение/;
let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;
str = str.replace(regexp, `<h1>Hello</h1>`);
После этого значение str:
<html>
  <body style="height: 200px"><h1>Hello</h1>
  ...
  </body>
</html>*/
let regexp = /(?<=(<body.*>))/is;

let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;
// console.log(str.match(regexp));
str = str.replace(regexp, `<h1>Hello</h1>`);
console.log(str);
let regexp1 = /^((?=(\w+))\2\s?)*$/;
