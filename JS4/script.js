'use strict';

// Задание 1
let nameJS = prompt('Каково «официальное» название JavaScript?', '');
if (nameJS == 'ECMAScript') {
  alert('Верно!');}
  else {
  alert('Не знаете? «ECMAScript»!');}

// Задание 2
let znak = prompt('Каково число?', '');
if (znak < 0) {
  alert('Отрицательное число');}
  else if (znak > 0) {
  alert('Положительное число');}
  else {
  alert('Ноль');}

// Задание 3
  let month = prompt('Введите номер месяца, чтобы узнать пору года!', '');
  month = Number(month);
    if (month == 12) {
    alert('Зима');}
    if (month == 1) {
        alert('Зима');}
    if (month == 2) {
        alert('Зима');}
    if (month == 3) {
        alert('Весна');}
    if (month == 4) {
        alert('Весна');}
    if (month == 5) {
        alert('Весна');}
    if (month == 6) {
        alert('Лето');}
    if (month == 7) {
        alert('Лето');}
    if (month == 8) {
        alert('Лето');}
    if (month == 9) {
        alert('Осень');}
    if (month == 10) {
        alert('Осень');}
    if (month == 11) {
        alert('Осень');}
    if (month >= 13) {
    alert('Нет такого месяца в году');}

// Задание 3 (вариант 2)
  let month = prompt('Введите номер месяца, чтобы узнать пору года!', '');
  month = Number(month);
  switch (month) {
  case 12: 
  case 1:
  case 2:
      alert('Зима');
      break;
  case 3:
  case 4:
  case 5:
      alert('Весна');
      break;
  case 6: 
  case 7:
  case 8:
      alert('Лето');
      break;
  case 9: 
  case 10:
  case 11:
      alert('Осень');
      break;
      default:
      alert('Нет такого месяца в году');
  }

// Задание 4
  let date = new Date();
  let hour= date.getHours();
  let user = prompt('Укажите ваше имя пользователя:', '');
  switch (hour) {
  case 6: 
  case 7:
  case 8:
  case 9: 
  case 10:
  alert(`Доброе утро, ${user}!`);
  break;
  case 11: 
  case 12:
  case 13:
  case 14: 
  case 15:
  case 16:
  case 17: 
  alert(`Добрый день, ${user}!`);
  break;
  case 18: 
  case 19:
  case 20:
  case 21: 
  case 22:
  case 23: 
  alert(`Доброго вечера, ${user}!`);
  break;
  case 24: 
  case 0:
  case 1:
  case 2: 
  case 3:
  case 4: 
  case 5: 
  alert(`Доброй ночи, ${user}!`);
  break;
}

// Задание 5
let num1= prompt('Введите первое число!', '');
let num2= prompt('Введите второе число!', '');
    if (num1 > num2) {
    alert(`${num1}!`);}
    else if (num1 < num2) {
    alert(`${num2}!`);}
    else {
    alert('0');}

// Задание 5 (второй вариант)
let num1= prompt('Введите первое число!', '');
let num2= prompt('Введите второе число!', '');
let result=
    num1 > num2 ? num1;
    num1 < num2 ? num2;
    num1 == num2 ? '0';
    alert(result);
