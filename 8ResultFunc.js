/* eslint-disable no-console */
/* eslint-disable max-len */
//! Первый способ
function makeClosureArray(arr) { //! Функция makeClosureArray возвращает новую функцию, которая принимает массив функций arr  и вызывает каждую функцию в массиве
  return function () { //! Возвращение результата выполнения анонимной функций новый массив с результатом
    return arr.map((fn) => //! Метода массива map создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
      fn(), //! Вызывает поочерёдно функции и возвращает их результат который записывается в массив
    );
  };
}

const arr = [ //! Вспомогательный массив функций
  function () { return 1; },
  function () { return 2; },
];

const closureArray = makeClosureArray(arr); //! сохраняем результат вызова функцияя makeClosureArray с переданным в неё массивом и сохраняем возвращённую функцию
const result = closureArray(); //! вызываем и сохраняем результат в переменную

//! result результат выполнения функций будет равен массиву [1, 2]
console.log(result);

//! Второй способ

function executeFunctions(functions) { //! Функция принимает в себя массив функций functions. Она возвращает анонимную функцию, которая запускает цикл по каждой функции в functions
  return function () { //! Вызов анонимной функций
    const results = []; //! создания массива в который будем пушить результат

    for (let i = 0; i < functions.length; i++) { //! Циклом проходим по всей длине массива функций
      const result = functions[i](); //! Вызываем i-ую функцию
      results.push(result); //! Добавляем результат в массив результатов
    }

    return results; //! Возвращаем результат выполнения анонимной функции
  };
}

//! Пример использования
function sayHello() {
  return 4;
}

function sayWorld() {
  return 5;
}

const functions = [sayHello, sayWorld]; //! Вспомогательный массива функций

const executeAll = executeFunctions(functions); //! Создаем новую функцию
const results = executeAll(); //! Вызываем новую функцию
console.log(results); //! Получаем на выходе массив с результатом выполнения функций [4, 5]
