'use strict';

// Задание 1 Function Declaration
function ugol (){
    let angle = prompt ('Введите угол в градусах:','');
    alert(`Угол в радианах: ${angle*3.14/180}`);
}
ugol ();

// Задание 1 Function Expression
let angle = prompt ('Введите угол в градусах:','');
let ugol = function (){
    alert(`Угол в радианах: ${angle*3.14/180}`);
} 
ugol ();

// Задание 1 Arrow functions
let angle = prompt ('Введите угол в градусах:','');
let ugol = () => alert(`Угол в радианах: ${angle*3.14/180}`);
ugol ();

