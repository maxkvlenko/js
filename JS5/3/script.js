'use strict';

// Задание 3
let itogo = 0;
while (true) {
  let value = +prompt('Введите число', '');
  if (!value) break; 
  itogo += value;
}
alert(`Сумма: ${itogo}`);
