/*Напишите регулярное выражение, которое ищет тег <style...>. Оно должно искать
 весь тег: он может как не иметь атрибутов <style>, так и иметь несколько
 <style type="..." id="...">.

…Но регулярное выражение не должно находить <styler>!

Например:

let regexp = /ваше регулярное выражение/g;
alert( '<style> <styler> <style test="...">'.match(regexp) ); // <style>, <style test="...">*/

let str = '<style> <styler> <style test="..."> <style type="..." id="...">';
const regexp = /<style\b.*?>/g;
console.log(str.match(regexp));
