/* eslint-disable max-len */

// 21. Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

//! для проверки данных решений вместо деплоя использую Live Server в VS Code
function getStackSize() { //! Объявляем функцию
  let stackSize = 0; //! объяляем стек элементов

  function recursiveFunction() { //! объявляем рекурсивную функцию
    stackSize++; //! увеличиваем объем занятый объём коллстека
    recursiveFunction(); //! вызываем рекурсивную функцию
  }

  try { //! конструкция try catch для отлова ошибок
    recursiveFunction(); //! при вызове будем падать сюда и запускать рекурсивную функцию
  } catch (error) {
    console.log(`Stack size: ${stackSize}`); //! как только call stack переполнится выведем размер и выдадим ошибку что достигли максимума
    console.error(error);
  }
}

getStackSize(); //! вызовим функцию чтоб запустить рекурсию

//! Использовал данную статью для справки https://habr.com/ru/companies/yandex/articles/666870/
//! Взято и статьи размер call stack safari без параметров MacOS= 28 000 с параметрами = 23 000 но это всё приблизительыне значения так как у меня нету браузера safari.
// //! Получил такие данный максимальная глубина стека Google Chrome = 13954 размер call stack (конкретные результаты плавают в диапазоне ±10% от версии к версии и от запуска к запуску).
// //! Максимальная глубина стека FireFox = я получил 30646 размер call stack (конкретные результаты плавают в диапазоне ±10% от версии к версии и от запуска к запуску).
