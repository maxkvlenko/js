'use strict';

// Задание 1
function checkAge () {
    let age = prompt('Сколько вам лет?', '');
    if (age > 16 ) {
        alert ('Добро пожаловать!');}
        else {
            alert ('Вы еще молоды.');
        }
    }
    checkAge ();

// Задание 2 / вариант 1
// function znak (a) {
//         if (a >= 10 ) {
//         return a*a;
//         }
//         else if (a <= 7) {
//         return `Число ${a} меньше 7`;
//         }
//         else if (a == 8,9){
//         return --a;    
//         }
//         // let symbol = prompt('Введите число', ''); 
//         }
//         znak ();
//         console.log(znak(12));
//         console.log(znak(5));
//         console.log(znak(8));
//         console.log(znak(9));

// Задание 2 / вариант 2
// function znak () {
// let symbol = prompt('Введите число', ''); 
//     if (symbol >= 10 ) {
//     alert (symbol*symbol);}
//     else if (symbol <= 7){
//     alert ('Число меньше 7');}
//     else if (symbol == 8,9){
//         alert (--symbol);}
//     }
//     znak ();

// Задание 3
// function hello (text, name) {
//     name = 'Василий/гость';
//     console.log(text, name);
// }
// hello ('Привет,', name);

// Задание 4
// function stepen (chislo, stepen) {
//     chislo = prompt('Введите любое число', '');
//     stepen = prompt('Введите степень числа', '');
//     let result = chislo**stepen;
//     alert (result);
// }
// stepen ();

// Задание 5
// function multiply (n,m) {
//     return n*m;
// }
// multiply ();
// console.log(multiply(3,5));
