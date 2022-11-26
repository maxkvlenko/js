'use strict';

// Задание 2 Function Declaration
function sum (a, b){
let summa = 0;
for (let i=a; i <= b; i++){
    summa += i;} 
    console.log(+ summa);
}    
sum(1, 5);

// Задание 2 Function Expression
let sum = function (a, b){
    let summa = 0;
    for (let i=a; i <= b; i++){
        summa += i;} 
        console.log(+ summa);
}
sum(1, 5);

// Задание 2 Arrow functions
let sum = (a,b) => {let summa = 0; for (let i=a; i <= b; i++){summa += i;} 
    console.log(+ summa);}
sum(1, 5);

