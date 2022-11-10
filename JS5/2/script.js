'use strict';

// Задание 2
let chetn = +prompt('Введите число', '');
for (let i = 1; i <= chetn; i++) {
  if (i % 2 == 1) continue;
  alert(`Четные числа: ${i}`); 
}


let n = +prompt('Введите число', '');
for (let i = 1; i <= n; i++) {
  if (i % 5 == 0) continue;
  alert(`Четные числа: ${i}`); 
}

