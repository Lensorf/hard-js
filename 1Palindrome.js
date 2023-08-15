/* eslint-disable no-console */
/* eslint-disable max-len */
function palindrome(str) { // создаём функцию и указываем в аргументах что принимаем 1 аргумент;
  str = str.toLowerCase().replace(/[^а-яёa-z0-9]/iug, ''); // Данная строка приводит строку в нижний регистр и удаляет всё кроме букв латиницы и кирилицы
  const arrayStr = [...str]; // получаем массив из входящей строки
  const newArrayStr = []; // создаём массив куда будем добавлять буквы из массива обычной строки
  arrayStr.forEach((index) => newArrayStr.unshift(index)); // при помощи метода массива forEach проходим по масиву и добавляем буквы а начало нового массив при помощи метода unshift
  const newStr = newArrayStr.join(''); // соединяем получившаюся строку и проводим её к типу данных string методам массива join() где соеденияем их по пустой строке
  return str === newStr; // проводим сравнение строки и если они равно то получаем true значит строка является палиндромом если false строка не является палиндромом.
}

console.log(palindrome('аргентина манит негра')); // true
console.log(palindrome('Yo, Banana Boy!')); // true
console.log(palindrome('Николай 2 Николай ')); // false
// Решил что данный вариант оптимальный для любых строк более оптимальный вариант можно написать под что-то определённое
// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом.
// Палиндром — это строка, которая читается одинаково в обоих направлениях
