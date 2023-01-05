'use strict';

// Задание 6
function RandomInteger (min, max){
     let num = min+Math.random()*(max-min);
    return Math.round(num);
}
alert (RandomInteger(0, 100));






