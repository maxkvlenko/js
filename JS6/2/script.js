'use strict';

// Задание 2 / вариант 1
function znak (a) {
        if (a >= 10 ) {
        return a*a;
        }
        else if (a <= 7) {
        return `Число ${a} меньше 7`;
        }
        else if (a == 8,9){
        return --a;    
        }
        }
        znak ();
        console.log(znak(12));
        console.log(znak(5));
        console.log(znak(8));
        console.log(znak(9));

// Задание 2 / вариант 2
function znak () {
let symbol = prompt('Введите число', ''); 
    if (symbol >= 10 ) {
    alert (symbol*symbol);}
    else if (symbol <= 7){
    alert ('Число меньше 7');}
    else if (symbol == 8,9){
        alert (--symbol);}
    }
    znak ();
