/* eslint-disable no-console */
/* eslint-disable max-len */

// 11. Задача о замыканиях и области видимости: напишите функцию, которая возвращает другую функцию.
// Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции, даже после того, как внешняя функция завершила свое выполнение.

//! Первый способ
function outerFunction() { //! Объявляем функцию outerFunction которая определяет переменную outerVariable и возвращает функцию innerFunction
  const outerVariable = 'Здравствуйте, я внешняя переменная'; //! Внутренняя функция имеет доступ к переменной outerVariable, даже после того, как внешняя функция outerFunction закончила свое выполнение

  function innerFunction() { //! является функцией замыканием
    console.log(outerVariable); //! отобразим в консоли значение переменной к которой есть доступ
  }

  return innerFunction; //! вернём замкнутую функцию у которой есть доступ к внешней переменной
}

//! Создаем экземпляр функции, которая имеет доступ к переменной "outerVariable"
const innerFunc = outerFunction();

//! Вызываем внутреннюю функцию
innerFunc();

//! Второй способ

function outerFunction2(x) { //! объяляем фукнцию в рамках которой замкнём и вернём результат выполнения другой функции и передадим 1 аргумент как внешнею переменную
  return function innerFunction2() { //! замкнутая функция которая имеет доступ к внешней переменной
    console.log(x); //! отобразим в консоли внешнею переменную к которая данная замкнутая функция имеет доступ
  };
}

//! Создаем экземпляр функции, которая имеет доступ к переменной "outerVariable"
const myFunc2 = outerFunction2(42);
//! Вызываем внутреннюю функцию
myFunc2(); // Output: 42
