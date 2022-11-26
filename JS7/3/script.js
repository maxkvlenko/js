'use strict';

// Задание 3 Function Declaration
function factorial(n){
    return (n !=1) ? n*factorial(n-1):1;
        }
    console.log(factorial(5));

//Вариант 2 Function Declaration
function factorial(n){
let result = 1;
while (n){
    result*=n--;
}
return result;
}
factorial ();
console.log(factorial(5));

// Задание 3 Function Expression
let factorial = function (n) {
    return (n !=1) ? n*factorial(n-1):1;
}
console.log(factorial(5));

// Задание 3 Arrow functions
let factorial = (n) => {return (n !=1) ? n*factorial(n-1):1};
console.log(factorial(5));

