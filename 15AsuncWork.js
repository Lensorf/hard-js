/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable max-len */
//! Первый вариант
async function loadData(url) { //! объявляю асинхронную функцию при помощи ключевого слова async
  try { //! конструкция try catch для отлова ошибок во время выполнения асинхронной функции
    const response = await fetch(url); //! используем ключевое слово await для ожидания выполнения промиса пока ждём ответа от сервера
    const data = await response.json(); //! ожидаем выполнения промиса для преобразования ответа в JSON
    return data; //! возвращаем данные
  } catch (error) {
    console.error(error); //! обработка ошибок
  }
}

loadData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => {
    console.log(data);
  });

//! второй вариант

function someAsyncOperation1() { //! Вспомогательная функция
  return 'hehe';
}

function someAsyncOperation2() { //! Вспомогательная функция
  return '123';
}

async function myAsyncFunction() { //! объявляю асинхронную функцию при помощи ключевого слова async
  try { //! конструкция try catch для отлова ошибок во время выполнения асинхронной функции
    //! Ожидаем выполнение асинхронной операции
    // eslint-disable-next-line no-unused-vars
    const result1 = await someAsyncOperation1();

    //! Ожидаем выполнение другой асинхронной операции
    const result2 = await someAsyncOperation2();

    //! Возвращаем результат выполнения
    return result2;
  } catch (error) {
    //! Обрабатываем ошибку, если таковая возникла
    console.error(error);
  }
}

//! Вызываем для проверки работоспособности
myAsyncFunction()
  .then((data) => {
    console.log(data);
  });
