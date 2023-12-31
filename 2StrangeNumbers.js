/* eslint-disable max-len */

// 2. Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае.
// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.
//! Первый метод решения через function
function strangeNumbers(num) {
  if (num <= 1) { // проверка если число равно 1 или меньше 1 то вернём false так как в задание сказано что число должно делиться на сумму делителей не включая самого себя
    return false; // возвращаем false если число равно 1 или меньше 1
  }
  let result = 1; // Так как все деляться на 1 сразу записал как изначальное значение к которому буду прибавлять делители
  for (let i = 2; i < num; i++) { // Цикл for которые принимает как значение первую итерацию цифру 2 так как 1 мы уже записали и при каждой итерации +1
    if (num % i === 0) { // проверка делиться ли число на текущий делитель без остатка
      result += i; // если делиться без остатка то к текущему result прибавляем делитель
    }
  }
  return result === num; // если result то есть сумма делителей равна числу то вернём true в противном случае false
}

//! Второй метод решение где уже записываем функцию в переменную
const isStrangeNumber = (num) => {
  if (num <= 1) { // проверка если число равно 1 или меньше 1 то вернём false так как в задание сказано что число должно делиться на сумму делителей не включая самого себя
    return false; // возвращаем false если число равно 1 или меньше 1
  }
  let result = 1;// Так как все деляться на 1 сразу записал как изначальное значение к которому буду прибавлять делители

  for (let i = 2; i <= num / 2; i++) { // Цикл for которые принимает как значение первую итерацию цифру 2 так как 1 мы уже записали и при каждой итерации +1 будет проводить итерацию до половины числа включительно
    if (num % i === 0) { // проверка делиться ли число на делетли без остатка
      result += i; // прибавляем к текущему result делитель который равен текующей итерации цикла
    }
  }

  return result === num; // проверяем если сумма делителей равно числу то вернём true в противном случае вернём false
};

//! Третий способ решения
const isStrangeNumber2 = (num) => {
  if (num <= 1) { // проверка если число равно 1 или меньше 1 то вернём false так как в задание сказано что число должно делиться на сумму делителей не включая самого себя
    return false; // возвращаем false если число равно 1 или меньше 1
  }

  let result = 1; // Так как все деляться на 1 сразу записал как изначальное значение к которому буду прибавлять делители
  const sqrtNum = Math.sqrt(num); // при помощи метода Math.sqrt получаем квадратный корень числа

  for (let i = 2; i <= sqrtNum; i++) { // Цикл for первую итерация начнётся с числа 2 и будет считать до квадртаного корня числа num включительно при каждой итерации +1
    if (num % i === 0) { // проверка если число делиться на делитель без остатка идём дальше
      result += i; // прибавляем делитель который равен текущей итерации
      if (i !== num / i) { // проверяем если текующая итерация неравна числу деленому на текующую итерцию то выполняем следующие действия
        result += num / i; // то прибавляем к сумме делителей число которое получим при деление числа на текущую итерацию
      }
    }
  }

  return result === num; // если сумма делителей равно то вернём true в противном случае вернём false
};

// console.log(strangeNumbers(4)) false
// console.log(strangeNumbers(6)) true
// console.log(strangeNumbers(18)) false
// console.log(strangeNumbers(28)) true
// console.log(strangeNumbers(248)) false
// console.log(strangeNumbers(496)) true
// console.log(strangeNumbers(877)) false

// console.log(isStrangeNumber(4)) false
// console.log(isStrangeNumber(6)) true
// console.log(isStrangeNumber(18)) false
// console.log(isStrangeNumber(28)) true
// console.log(isStrangeNumber(248)) false
// console.log(isStrangeNumber(496)) true
// console.log(isStrangeNumber(877)) flase

// console.log(isStrangeNumber2(4)) false
// console.log(isStrangeNumber2(6)) true
// console.log(isStrangeNumber2(18)) false
// console.log(isStrangeNumber2(28)) true
// console.log(isStrangeNumber2(248)) false
// console.log(isStrangeNumber2(496)) true
// console.log(isStrangeNumber2(877)) false
// Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, если это число является странным, и false в противном случае.
// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.
