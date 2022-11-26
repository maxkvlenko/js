'use strict';

// Задание 2
let n = +prompt('Введите число', '');
for (let i = 1; i <= n*2; i++) {
  if (i % 2 == 1) continue;
  if (i % 5 == 0) continue;
  alert(`Четные числа: ${i}`); 
}