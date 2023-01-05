'use strict';

//Задание 2
const salary = {
    ivanov: 500,
    petrov: 450,
    krotov: 300,
    dudikov: 600,
    koval: 550,
    pirozkov: 1000,
    kopotkov: 400,
    soloda: 800,
    nemov: 360,
    kolobkov: 400,
   };
const clone = Object.assign ({}, salary);

let average = 0; // расчет средней зарплаты из объекта
let chislo = 0;
for (let key in salary){
    average += salary[key];
    chislo++;
}
let av = average/chislo;
alert ('средняя зарплата: ' +av);

salary.av = av; //добавление нового свойства в объект
console.log(salary);

let counter = 0; //число работников с ЗП выше средней
for (let sum in salary) {
    if (salary[sum]>=av){
    counter++;
    }
}
alert ('число работников которые получают зарплату выше средней: ' +counter);
