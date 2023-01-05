'use strict';

// Задание 1 
let str1 = 'aaa@bbb@ccc';
let change = /@/gi;
str = str1.replace(change, '!');
console.log(str1); 

// Задание 2
let str2 = 'aaa bbb ccc';
str = str2.replace(/bbb/,'');
console.log(str2); 

// Задание 3
const str3 = 'js';
console.log('js'.toUpperCase()); 

const str4 = 'JS';
console.log ('JS'.toLowerCase()); 

// Задание 4
let str = 'какой-то текст';
let n = str.slice(0, 5);
let result = n +'...';
console.log(result); 

// Задание 5
let num = 379;
let sqrt = Math.sqrt(num);
console.log(sqrt); 
console.log(Math.round(sqrt)); 
console.log(sqrt.toFixed(1)); 
console.log(sqrt.toFixed(2)); 

// Задание 6
function RandomInteger (min, max){
     let num = min+Math.random()*(max-min);
    return Math.round(num);
}
alert (RandomInteger(0, 100));






